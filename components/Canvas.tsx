'use client';

import styles from '@components/Canvas.module.scss';

import * as React from 'react';

type WebGLContextResult = {
  gl: WebGLRenderingContext | WebGL2RenderingContext;
  ext: {
    internalFormat: number;
    internalFormatRG: number;
    formatRG: number;
    texType: number;
  };
  support_linear_float: boolean | null;
};

const config = {
  TEXTURE_DOWNSAMPLE: 1,
  DENSITY_DISSIPATION: 0.9899,
  VELOCITY_DISSIPATION: 0.99,
  PRESSURE_DISSIPATION: 0.8,
  PRESSURE_ITERATIONS: 80,
  CURL: 60,
  SPLAT_RADIUS: 0.2,
  SPEED: 0.02,
};

export default function CanvasComponent(props) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const booted = getWebGLContext(canvas);

    if (!booted) {
      return;
    }

    const { gl, ext, support_linear_float } = booted;

    function getWebGLContext(canvas: HTMLCanvasElement): WebGLContextResult | null {
      const params = {
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false,
      };

      let gl: WebGLRenderingContext | WebGL2RenderingContext | null = canvas.getContext('webgl2', params) as WebGL2RenderingContext | null;

      const isWebGL2 = !!gl;

      if (!isWebGL2) {
        gl = (canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params)) as WebGLRenderingContext | null;
      }

      if (!gl) return null;

      const halfFloat = gl.getExtension('OES_texture_half_float');
      let support_linear_float = gl.getExtension('OES_texture_half_float_linear');

      if (isWebGL2) {
        gl.getExtension('EXT_color_buffer_float');
        support_linear_float = gl.getExtension('OES_texture_float_linear');
      }

      const internalFormat = isWebGL2 ? (gl as WebGL2RenderingContext).RGBA16F : gl.RGBA;
      const internalFormatRG = isWebGL2 ? (gl as WebGL2RenderingContext).RG16F : gl.RGBA;
      const formatRG = isWebGL2 ? (gl as WebGL2RenderingContext).RG : gl.RGBA;
      const texType = isWebGL2 ? (gl as WebGL2RenderingContext).HALF_FLOAT : halfFloat?.HALF_FLOAT_OES || gl.UNSIGNED_BYTE;

      return {
        gl: gl as WebGLRenderingContext,
        ext: {
          internalFormat,
          internalFormatRG,
          formatRG,
          texType,
        },
        support_linear_float: !!support_linear_float,
      };
    }

    class GLProgram {
      program: WebGLProgram;
      uniforms: { [key: string]: WebGLUniformLocation | null };

      constructor(vertexShader: WebGLShader, fragmentShader: WebGLShader) {
        this.uniforms = {};
        this.program = gl.createProgram()!;

        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);

        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
          return;
        }

        const uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
          const uniformName = gl.getActiveUniform(this.program, i)!.name;
          this.uniforms[uniformName] = gl.getUniformLocation(this.program, uniformName);
        }
      }

      bind() {
        gl.useProgram(this.program);
      }
    }

    function compileShader(type: number, source: string): WebGLShader {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || 'Shader compilation failed');
      }

      return shader;
    }

    const baseVertexShader = compileShader(
      gl.VERTEX_SHADER,
      'precision highp float; precision mediump sampler2D; attribute vec2 aPosition; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform vec2 texelSize; void main () {     vUv = aPosition * 0.5 + 0.5;     vL = vUv - vec2(texelSize.x, 0.0);     vR = vUv + vec2(texelSize.x, 0.0);     vT = vUv + vec2(0.0, texelSize.y);     vB = vUv - vec2(0.0, texelSize.y);     gl_Position = vec4(aPosition, 0.0, 1.0); }'
    );
    const clearShader = compileShader(
      gl.FRAGMENT_SHADER,
      'precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTexture; uniform float value; void main () {     gl_FragColor = value * texture2D(uTexture, vUv); }'
    );
    const displayShader = compileShader(
      gl.FRAGMENT_SHADER,
      'precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTexture; void main () {     gl_FragColor = texture2D(uTexture, vUv); }'
    );
    const splatShader = compileShader(
      gl.FRAGMENT_SHADER,
      'precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTarget; uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius; void main () {     vec2 p = vUv - point.xy;     p.x *= aspectRatio;     vec3 splat = exp(-dot(p, p) / radius) * color;     vec3 base = texture2D(uTarget, vUv).xyz;     gl_FragColor = vec4(base + splat, 1.0); }'
    );
    const advectionManualFilteringShader = compileShader(
      gl.FRAGMENT_SHADER,
      'precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform float dt; uniform float dissipation; vec4 bilerp (in sampler2D sam, in vec2 p) {     vec4 st;     st.xy = floor(p - 0.5) + 0.5;     st.zw = st.xy + 1.0;     vec4 uv = st * texelSize.xyxy;     vec4 a = texture2D(sam, uv.xy);     vec4 b = texture2D(sam, uv.zy);     vec4 c = texture2D(sam, uv.xw);     vec4 d = texture2D(sam, uv.zw);     vec2 f = p - st.xy;     return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); } void main () {     vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;     gl_FragColor = dissipation * bilerp(uSource, coord);     gl_FragColor.a = 1.0; }'
    );
    const advectionShader = compileShader(
      gl.FRAGMENT_SHADER,
      'precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform float dt; uniform float dissipation; void main () {     vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;     gl_FragColor = dissipation * texture2D(uSource, coord); }'
    );
    const divergenceShader = compileShader(
      gl.FRAGMENT_SHADER,
      'precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; vec2 sampleVelocity (in vec2 uv) {     vec2 multiplier = vec2(1.0, 1.0);     if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }     if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }     if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }     if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }     return multiplier * texture2D(uVelocity, uv).xy; } void main () {     float L = sampleVelocity(vL).x;     float R = sampleVelocity(vR).x;     float T = sampleVelocity(vT).y;     float B = sampleVelocity(vB).y;     float div = 0.5 * (R - L + T - B);     gl_FragColor = vec4(div, 0.0, 0.0, 1.0); }'
    );
    const curlShader = compileShader(
      gl.FRAGMENT_SHADER,
      'precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; void main () {     float L = texture2D(uVelocity, vL).y;     float R = texture2D(uVelocity, vR).y;     float T = texture2D(uVelocity, vT).x;     float B = texture2D(uVelocity, vB).x;     float vorticity = R - L - T + B;     gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0); }'
    );
    const vorticityShader = compileShader(
      gl.FRAGMENT_SHADER,
      'precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform float curl; uniform float dt; void main () {     float L = texture2D(uCurl, vL).y;     float R = texture2D(uCurl, vR).y;     float T = texture2D(uCurl, vT).x;     float B = texture2D(uCurl, vB).x;     float C = texture2D(uCurl, vUv).x;     vec2 force = vec2(abs(T) - abs(B), abs(R) - abs(L));     force *= 1.0 / length(force + 0.00001) * curl * C;     vec2 vel = texture2D(uVelocity, vUv).xy;     gl_FragColor = vec4(vel + force * dt, 0.0, 1.0); }'
    );
    const pressureShader = compileShader(
      gl.FRAGMENT_SHADER,
      'precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uPressure; uniform sampler2D uDivergence; vec2 boundary (in vec2 uv) {     uv = min(max(uv, 0.0), 1.0);     return uv; } void main () {     float L = texture2D(uPressure, boundary(vL)).x;     float R = texture2D(uPressure, boundary(vR)).x;     float T = texture2D(uPressure, boundary(vT)).x;     float B = texture2D(uPressure, boundary(vB)).x;     float C = texture2D(uPressure, vUv).x;     float divergence = texture2D(uDivergence, vUv).x;     float pressure = (L + R + B + T - divergence) * 0.25;     gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0); }'
    );
    const gradientSubtractShader = compileShader(
      gl.FRAGMENT_SHADER,
      'precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uPressure; uniform sampler2D uVelocity; vec2 boundary (in vec2 uv) {     uv = min(max(uv, 0.0), 1.0);     return uv; } void main () {     float L = texture2D(uPressure, boundary(vL)).x;     float R = texture2D(uPressure, boundary(vR)).x;     float T = texture2D(uPressure, boundary(vT)).x;     float B = texture2D(uPressure, boundary(vB)).x;     vec2 velocity = texture2D(uVelocity, vUv).xy;     velocity.xy -= vec2(R - L, T - B);     gl_FragColor = vec4(velocity, 0.0, 1.0); }'
    );

    let textureWidth: number = 0;
    let textureHeight: number = 0;

    let density: { first: any[]; second: any[]; swap: () => void } | undefined;
    let velocity: { first: any[]; second: any[]; swap: () => void } | undefined;
    let divergence: any[] | undefined;
    let curl: any[] | undefined;
    let pressure: { first: any[]; second: any[]; swap: () => void } | undefined;

    try {
      initFramebuffers();
    } catch (e) {
      return;
    }

    const clearProgram = new GLProgram(baseVertexShader, clearShader);
    const displayProgram = new GLProgram(baseVertexShader, displayShader);
    const splatProgram = new GLProgram(baseVertexShader, splatShader);
    const advectionProgram = new GLProgram(baseVertexShader, support_linear_float ? advectionShader : advectionManualFilteringShader);
    const divergenceProgram = new GLProgram(baseVertexShader, divergenceShader);
    const curlProgram = new GLProgram(baseVertexShader, curlShader);
    const vorticityProgram = new GLProgram(baseVertexShader, vorticityShader);
    const pressureProgram = new GLProgram(baseVertexShader, pressureShader);
    const gradienSubtractProgram = new GLProgram(baseVertexShader, gradientSubtractShader);

    function initFramebuffers() {
      textureWidth = gl.drawingBufferWidth >> config.TEXTURE_DOWNSAMPLE;
      textureHeight = gl.drawingBufferHeight >> config.TEXTURE_DOWNSAMPLE;

      const iFormat = ext.internalFormat;
      const iFormatRG = ext.internalFormatRG;
      const formatRG = ext.formatRG;
      const texType = ext.texType;

      density = createDoubleFBO(0, textureWidth, textureHeight, iFormat, gl.RGBA, texType, support_linear_float ? gl.LINEAR : gl.NEAREST);
      velocity = createDoubleFBO(2, textureWidth, textureHeight, iFormatRG, formatRG, texType, support_linear_float ? gl.LINEAR : gl.NEAREST);
      divergence = createFBO(4, textureWidth, textureHeight, iFormatRG, formatRG, texType, gl.NEAREST);
      curl = createFBO(5, textureWidth, textureHeight, iFormatRG, formatRG, texType, gl.NEAREST);
      pressure = createDoubleFBO(6, textureWidth, textureHeight, iFormatRG, formatRG, texType, gl.NEAREST);
    }

    function createFBO(texId, w, h, internalFormat, format, type, param) {
      gl.activeTexture(gl.TEXTURE0 + texId);

      const texture = gl.createTexture();

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

      const fbo = gl.createFramebuffer();

      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      return [texture, fbo, texId];
    }

    function createDoubleFBO(texId, w, h, internalFormat, format, type, param) {
      let fbo1 = createFBO(texId, w, h, internalFormat, format, type, param);
      let fbo2 = createFBO(texId + 1, w, h, internalFormat, format, type, param);

      return {
        get first() {
          return fbo1;
        },
        get second() {
          return fbo2;
        },
        swap: function swap() {
          const temp = fbo1;

          fbo1 = fbo2;
          fbo2 = temp;
        },
      };
    }

    const blit = (() => {
      const vertexData = new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]);
      const elementData = new Uint16Array([0, 1, 2, 0, 2, 3]);

      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, elementData, gl.STATIC_DRAW);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(0);

      return (destination: WebGLFramebuffer | null) => {
        gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      };
    })();

    let lastTime = Date.now();
    let timeAccumulator = 0;

    class Pointer {
      id: number;
      x: number;
      y: number;
      dx: number;
      dy: number;
      down: boolean;
      moved: boolean;

      constructor(id: number) {
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.dx = 0;
        this.dy = 0;
        this.down = false;
        this.moved = false;
      }
    }

    let pointers: Pointer[] = [];
    pointers.push(new Pointer(-1));

    try {
      update();
    } catch (e) {
      return;
    }

    function update() {
      resizeCanvas();

      const dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
      lastTime = Date.now();

      gl.viewport(0, 0, textureWidth, textureHeight);

      timeAccumulator += dt;

      if (canvas) {
        if (timeAccumulator >= config.SPEED) {
          timeAccumulator = 0;
          splat(80, canvas.height + canvas.height / 1.5, canvas.height + 300, -200);
        }
      }

      advectionProgram.bind();

      if (!velocity) return;
      if (!density) return;
      if (!curl) return;
      if (!divergence) return;
      if (!pressure) return;

      gl.uniform2f(advectionProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.first[2]);
      gl.uniform1i(advectionProgram.uniforms.uSource, velocity.first[2]);
      gl.uniform1f(advectionProgram.uniforms.dt, dt);
      gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
      blit(velocity.second[1]);
      velocity.swap();

      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.first[2]);

      gl.uniform1i(advectionProgram.uniforms.uSource, density.first[2]);
      gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
      blit(density.second[1]);
      density.swap();

      curlProgram.bind();
      gl.uniform2f(curlProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
      gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.first[2]);
      blit(curl[1]);

      vorticityProgram.bind();
      gl.uniform2f(vorticityProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
      gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.first[2]);
      gl.uniform1i(vorticityProgram.uniforms.uCurl, curl[2]);
      gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
      gl.uniform1f(vorticityProgram.uniforms.dt, dt);
      blit(velocity.second[1]);
      velocity.swap();

      divergenceProgram.bind();
      gl.uniform2f(divergenceProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
      gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.first[2]);
      blit(divergence[1]);

      clearProgram.bind();

      let pressureTexId = pressure.first[2];

      gl.activeTexture(gl.TEXTURE0 + pressureTexId);
      gl.bindTexture(gl.TEXTURE_2D, pressure.first[0]);
      gl.uniform1i(clearProgram.uniforms.uTexture, pressureTexId);
      gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION);
      blit(pressure.second[1]);
      pressure.swap();

      pressureProgram.bind();
      gl.uniform2f(pressureProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
      gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence[2]);
      pressureTexId = pressure.first[2];
      gl.activeTexture(gl.TEXTURE0 + pressureTexId);

      for (let _i = 0; _i < config.PRESSURE_ITERATIONS; _i++) {
        gl.bindTexture(gl.TEXTURE_2D, pressure.first[0]);
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressureTexId);
        blit(pressure.second[1]);
        pressure.swap();
      }

      gradienSubtractProgram.bind();
      gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
      gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.first[2]);
      gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.first[2]);
      blit(velocity.second[1]);
      velocity.swap();

      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      displayProgram.bind();
      gl.uniform1i(displayProgram.uniforms.uTexture, density.first[2]);
      blit(null);

      if (canvas) {
        for (let i = 0; i < pointers.length; i++) {
          const pointer = pointers[i];
          if (pointer.moved) {
            pointer.moved = false;
            splat(pointer.x, pointer.y, canvas.height + 300, -200, 0.000005);
          }
        }
      }

      requestAnimationFrame(update);
    }

    function splat(x: number, y: number, dx: number, dy: number, radius?: number) {
      if (!velocity) return;
      if (!canvas) return;
      if (!density) return;

      splatProgram.bind();
      gl.uniform1i(splatProgram.uniforms.uTarget, velocity.first[2]);
      gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
      gl.uniform2f(splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
      gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0);
      gl.uniform1f(splatProgram.uniforms.radius, radius !== undefined ? radius : config.SPLAT_RADIUS);
      blit(velocity.second[1]);
      velocity.swap();

      gl.uniform1i(splatProgram.uniforms.uTarget, density.first[2]);
      gl.uniform3f(splatProgram.uniforms.color, 0.42, 0.42, 0.42);
      gl.uniform1f(splatProgram.uniforms.radius, radius !== undefined ? radius : config.SPLAT_RADIUS);
      blit(density.second[1]);
      density.swap();
    }

    function resizeCanvas() {
      if (!canvas) return;

      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        initFramebuffers();
      }
    }
  }, []);

  return <canvas className={styles.canvas} ref={canvasRef} style={props.style} />;
}
