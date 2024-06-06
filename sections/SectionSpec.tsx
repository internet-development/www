import styles from '@sections/SectionSpec.module.scss';

import * as React from 'react';

const Item = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <span className={styles.symbol}>☀</span>
        {props.hide ? null : <span className={styles.line} />}
      </div>
      <div className={styles.right}>{props.children}</div>
    </div>
  );
};

const SubItem = (props) => {
  return (
    <div className={styles.item} style={{ paddingLeft: 8, opacity: 0.75 }}>
      <div className={styles.left}>↳</div>
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
      <Item>
        We join your team
        <SubItem>Attend standup, meetings, and gatherings</SubItem>
        <SubItem>Do as much work as we can</SubItem>
        <SubItem>Teach you what we know</SubItem>
        <SubItem>Be available 24/7</SubItem>
      </Item>
      <Item>
        We make you a new website
        <SubItem last>Go from zero to a new TypeScript front-end implementation</SubItem>
        <SubSubItem>Our default tools ➝ NextJS + SASS + Postgres</SubSubItem>
        <SubSubItem>Our accoutrements ➝ AngularJS, Vue, Svelte</SubSubItem>
      </Item>
      <Item>
        We design you a beautiful interface
        <SubItem last>Go from zero to as many Figma revisions or pages you need</SubItem>
        <SubSubItem>Our accoutrements ➝ Sketch, Adobe Photoshop, Adobe Illustrator</SubSubItem>
      </Item>
      <Item>
        We make you a design system
        <SubItem>Go from zero to a new design system in Figma</SubItem>
        <SubSubItem>We work on our own</SubSubItem>
        <SubSubItem>Our friends make them all the time</SubSubItem>
        <SubSubItem>We researched designsystems.surf/design-systems</SubSubItem>
        <SubSubItem>We researched designsystems.com</SubSubItem>
        <SubSubItem>We worked with Google Material 3 in production</SubSubItem>
        <SubItem>Go from zero to a new component library in TypeScript and library of choice</SubItem>
      </Item>
      <Item>
        We help you use your brand
        <SubItem>Prepare social media templates</SubItem>
        <SubItem>Manage social media account</SubItem>
        <SubItem>Design slides and visualize data</SubItem>
        <SubItem>Implement brand guidelines in code</SubItem>
      </Item>
      <Item>
        We draw you illustrations
        <SubItem>Design custom characters</SubItem>
        <SubItem>Prepare marketing spots</SubItem>
      </Item>
      <Item>
        We make you a logo
        <SubItem>Design an unique logo based on your research</SubItem>
      </Item>
      <Item>
        We build for you
        <SubItem>Implement a custom content management system</SubItem>
        <SubItem>Implement a marketing page</SubItem>
        <SubItem>Implement a new documentation site</SubItem>
        <SubItem>Implement custom versions of our existing products</SubItem>
        <SubItem>Go from zero to new product</SubItem>
        <SubSubItem>We make new products all the time</SubSubItem>
        <SubSubItem>We specialize in WYSIWYG editors using SlateJS</SubSubItem>
      </Item>
      <Item>
        We build your API
        <SubItem>Implement an API server for your services</SubItem>
        <SubSubItem>Our default tools ➝ NodeJS + Postgres</SubSubItem>
        <SubSubItem>Our accoutrements ➝ Rust implementation, Go implementation</SubSubItem>
      </Item>
      <Item>
        We maintain your deployments
        <SubItem>Deploy services that support up to a million annual page views</SubItem>
        <SubItem>Scale horizontally</SubItem>
        <SubItem>Use Vercel or Render, you decide</SubItem>
        <SubItem>Manage DNS</SubItem>
      </Item>
      <Item hide>
        We project manage
        <SubItem>Finish on time</SubItem>
        <SubItem>Manage issue tracking</SubItem>
        <SubItem>Provoke discussion</SubItem>
        <SubItem last>Make accurate estimations</SubItem>
      </Item>
    </div>
  );
}
