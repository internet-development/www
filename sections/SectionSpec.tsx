import styles from '@sections/SectionSpec.module.scss';

import * as React from 'react';

const Item = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <span className={styles.symbol}>{props.symbol}</span>
        {props.hide ? null : <span className={styles.line} />}
      </div>
      <div className={styles.right}>{props.children}</div>
    </div>
  );
};

const SubItem = (props) => {
  return (
    <div className={styles.item} style={{ paddingLeft: 8, opacity: 0.75 }}>
      <div className={styles.left}>➝</div>
      <div className={styles.right}>{props.children}</div>
    </div>
  );
};

const SubSubItem = (props) => {
  return (
    <div className={styles.item} style={{ paddingLeft: 48, opacity: 0.5 }}>
      <div className={styles.left}>↳</div>
      <div className={styles.right}>{props.children}</div>
    </div>
  );
};

export default function SectionSpec(props) {
  return (
    <div className={styles.section}>
      <Item symbol={`⫸`}>
        We join your team
        <SubItem>Attend standup, meetings, and gatherings</SubItem>
        <SubItem>Do as much work as we can (a lot)</SubItem>
        <SubItem>Comply with your rules and confidentiality agreements</SubItem>
        <SubItem>Teach you what we know</SubItem>
        <SubSubItem>Setup your computer</SubSubItem>
        <SubSubItem>Setup git and command line tools</SubSubItem>
        <SubSubItem>Setup your development environment and software</SubSubItem>
        <SubSubItem>Help you deploy your first website</SubSubItem>
        <SubItem>Be available 24/7</SubItem>
      </Item>
      <Item symbol={`⫸`}>
        We make your websites
        <SubItem>Make all the web pages</SubItem>
        <SubItem>Make all the templates</SubItem>
        <SubItem>Go from zero to a new TypeScript front-end implementation</SubItem>
        <SubSubItem>Our default tools ➝ NextJS + SASS + Postgres</SubSubItem>
        <SubSubItem>Our additional accoutrements ➝ AngularJS, Vue, Svelte</SubSubItem>
      </Item>
      <Item symbol={`⫸`}>
        We design you beautiful interfaces
        <SubItem last>Go from zero to as many Figma revisions or pages you need</SubItem>
        <SubSubItem>We will never get mad if you say "just make it pretty"</SubSubItem>
        <SubSubItem>Our additional accoutrements ➝ Sketch, Adobe Photoshop, Adobe Illustrator</SubSubItem>
      </Item>
      <Item symbol={`⫸`}>
        We architect your design systems
        <SubItem>Go from zero to a new design system in Figma</SubItem>
        <SubSubItem>We work on our own</SubSubItem>
        <SubSubItem>Our friends make them all the time</SubSubItem>
        <SubSubItem>We researched designsystems.surf/design-systems</SubSubItem>
        <SubSubItem>We researched designsystems.com</SubSubItem>
        <SubSubItem>We worked with Google Material 3 in production</SubSubItem>
        <SubItem>Go from zero to a new component library in TypeScript</SubItem>
        <SubSubItem>Pick your favorite JS rendering library or framework</SubSubItem>
        <SubSubItem>Pick your favorite CSS-in-JS or standalone CSS dialect</SubSubItem>
      </Item>
      <Item symbol={`⫸`}>
        We help you use your brand
        <SubItem>Prepare social media templates</SubItem>
        <SubItem>Manage social media accounts</SubItem>
        <SubItem>Design slides and visualize data</SubItem>
        <SubSubItem>We know you might pitch to VCs</SubSubItem>
        <SubItem>Implement brand guidelines in code</SubItem>
      </Item>
      <Item symbol={`⫸`}>
        We draw you illustrations
        <SubItem>Design custom characters</SubItem>
        <SubSubItem>They are cute and you can keep the IP</SubSubItem>
        <SubItem>Prepare marketing spots</SubItem>
      </Item>
      <Item symbol={`⫸`}>
        We make you a logo
        <SubItem>Design an unique logo</SubItem>
        <SubSubItem>We researched logo-archive.org</SubSubItem>
        <SubSubItem>We own that logo modernism book by TASCHEN</SubSubItem>
        <SubSubItem>We own that logo beginnings book by TASCHEN</SubSubItem>
        <SubSubItem>We own that soviet logos book</SubSubItem>
      </Item>
      <Item symbol={`⫸`}>
        We build all web applications for you
        <SubItem>Implement a custom content management system</SubItem>
        <SubItem>Implement a marketing page</SubItem>
        <SubItem>Implement a new documentation site</SubItem>
        <SubSubItem>We will go in and learn your technology and write everything</SubSubItem>
        <SubItem>Implement custom versions of our existing products</SubItem>
        <SubItem>Go from zero to new product</SubItem>
        <SubSubItem>We make new products all the time</SubSubItem>
        <SubSubItem>We specialize in WYSIWYG editors using SlateJS</SubSubItem>
      </Item>
      <Item symbol={`⫸`}>
        We build your API services
        <SubItem>Handle authentication</SubItem>
        <SubItem>Implement an API server for your business function</SubItem>
        <SubSubItem>Our default tools ➝ NodeJS + Postgres</SubSubItem>
        <SubSubItem>Our additional accoutrements ➝ Rust implementation, Go implementation</SubSubItem>
      </Item>
      <Item symbol={`⫸`}>
        We maintain your deployments
        <SubItem>Deploy services that support up to millions of monthly actives</SubItem>
        <SubItem>Scale horizontally</SubItem>
        <SubItem>Use GCE, AWS, Vercel or Render, you decide</SubItem>
        <SubItem>Manage DNS</SubItem>
      </Item>
      <Item symbol={`⫸`} hide>
        We project manage
        <SubItem>Finish on time</SubItem>
        <SubItem>Manage issue tracking</SubItem>
        <SubItem>Provoke discussion</SubItem>
        <SubItem>Produce hand off documentation</SubItem>
        <SubItem last>Make accurate estimations</SubItem>
      </Item>
    </div>
  );
}
