import styles from '@sections/V2SectionUniversityOfWashingtonCopy.module.scss';

import * as React from 'react';

import Avatars from '@components/Avatars';
import Logo from '@components/Logo';

const CardListItem = (props) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.listItemLeft}>☼</div>
      <div className={styles.listItemRight}>{props.children}</div>
    </div>
  );
};

export default function V2SectionUniversityOfWashingtonCopy(props) {
  return (
    <div className={styles.process} id="what-do-we-do">
      <h2 className={styles.h2}>
        We admire the{' '}
        <a className={styles.link} href="https://www.washington.edu/" target="_blank">
          University of Washington
        </a>
        ’s dedication to innovation and inclusivity, and the alumni who work in our{' '}
        <a className={styles.link} href="/office">
          office
        </a>{' '}
        proudly align our mission with these values. As designers, we are committed to ensuring that every website we create is not only modern but also accessible.
        <br />
        <br />
        <a
          className={styles.link}
          href="https://www.federalregister.gov/documents/2024/04/24/2024-07758/nondiscrimination-on-the-basis-of-disability-accessibility-of-web-information-and-services-of-state"
        >
          The guidelines
        </a>{' '}
        released by the Department of Justice under Title II of the Americans with Disabilities Act (ADA) have set a new bar for digital accessibility, which we embrace. Effective
        April 24, 2024, these standards require all web content to achieve compliance by April 24, 2026.
        <br />
        <br />
        Let’s work together to ensure we meet these standards and get the job done.
      </h2>

      <p className={styles.h4} style={{ padding: `4rem 0 4rem 0` }}>
        <a href="https://t.me/internetdevelopmentstudio" target="_blank" className={styles.link}>
          ⭢ Meet our team on Telegram
        </a>
      </p>

      <div className={styles.slot} style={{ borderTop: `1px solid var(--theme-marketing-border)` }}>
        <div className={styles.card}>
          <div className={styles.label}>STEP ONE</div>
          <Avatars people={['PHIL', 'XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Ensuring all web content and mobile applications meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA standards.</div>
          <div className={styles.description}>
            This is a cornerstone of our approach to accessibility. We achieve this through rigorous processes and meticulous attention to detail. Our team follows best practices
            to make sure every user has a seamless and inclusive experience.
          </div>
          <CardListItem>
            <strong>Semantic HTML</strong>, we use semantic HTML to define the structure and meaning of web content, ensuring assistive technologies can interpret and navigate the
            site effectively.
          </CardListItem>
          <CardListItem>
            <strong>Keyboard Accessibility</strong>, we ensure all features are accessible via keyboard for users who cannot use a mouse.
          </CardListItem>
          <CardListItem>
            <strong>Color Contrast</strong>, we employ high-contrast color schemes to ensure text is readable by users with visual impairments while adhering to UW’s brand
            guidelines.
          </CardListItem>
          <CardListItem>
            <strong>Alternative Text</strong>, we provide descriptive text for images and multimedia content, helping screen readers convey information accurately to visually
            impaired users.
          </CardListItem>
          <CardListItem>
            <strong>Resizable Text</strong>, our designs allow for text resizing without loss of content or functionality, catering to users who need larger fonts.
          </CardListItem>
          <CardListItem>
            <strong>Error Identification and Suggestion</strong>, our forms are designed to identify errors and provide suggestions for correction, improving usability for those
            with cognitive disabilities.
          </CardListItem>
          <CardListItem>
            <strong>Consistent Navigation</strong>, our predictable navigation and layouts help users with cognitive and learning disabilities.
          </CardListItem>
        </div>

        <div className={styles.card}>
          <div className={styles.label}>STEP TWO</div>
          <Avatars people={['PHIL', 'XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Providing alternative text for all visual media, including images, videos, and interactive elements.</div>
          <div className={styles.description}>
            Alternative text ensures that all users, including those with visual impairments, can fully understand and engage with all content on the website.
          </div>

          <CardListItem>
            <strong>Descriptive Alt Text for Images</strong>, we provide concise and descriptive alternative text for all images, enabling screen reader users to understand the
            context and content of visual elements.
          </CardListItem>
          <CardListItem>
            <strong>Detailed Descriptions for Complex Images</strong>, for complex images such as charts, infographics, or detailed diagrams, we offer extended descriptions to
            convey all critical information effectively.
          </CardListItem>
          <CardListItem>
            <strong>Captions for Videos</strong>, all video content includes synchronized captions, ensuring that users with hearing impairments can access the information being
            presented.
          </CardListItem>
          <CardListItem>
            <strong>Transcripts for Audio Content</strong>, we provide textual transcripts for all audio content, making it accessible to users with hearing impairments and
            allowing for easier comprehension during listening.
          </CardListItem>
          <CardListItem>
            <strong>Text Alternatives for Interactive Elements</strong>, interactive elements, such as buttons, forms, and dynamic content, come with clear text alternatives or
            labels that describe their function and purpose.
          </CardListItem>

          <CardListItem>
            <strong>Accessible Icons</strong>, we use ARIA labels or alternative text for icons and other graphical elements to ensure they communicate their meaning to assistive
            technologies.
          </CardListItem>
        </div>

        <div className={styles.card}>
          <div className={styles.label}>STEP THREE</div>
          <Avatars people={['PHIL', 'XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Making complex navigational structures accessible with clear and user-friendly interfaces.</div>
          <div className={styles.description}>
            This is a fundamental aspect of our design philosophy. We believe that every user deserves an accessible browsing experience, regardless of the complexity of the
            content.
          </div>
          <CardListItem>
            <strong>Logical Menu Hierarchies</strong>, we design navigation menus with logical hierarchies, ensuring that users can easily find the information they need with
            minimal clicks.
          </CardListItem>
          <CardListItem>
            <strong>Descriptive Links</strong>, all links are clearly labeled with descriptive text, so users understand where each link will take them, aiding both screen readers
            and visual users.
          </CardListItem>
          <CardListItem>
            <strong>Accessible Dropdown Menus</strong>, our dropdown menus are designed to be keyboard-accessible and screen reader-friendly, ensuring inclusivity for all users.
          </CardListItem>
          <CardListItem>
            <strong>Breadcrumb Navigation</strong>, we employ breadcrumb navigation to help users understand their current location within the website and easily backtrack if
            necessary.
          </CardListItem>
          <CardListItem>
            <strong>Search Functionality</strong>, we integrate advanced search functionalities, allowing users to quickly locate specific content without navigating through
            multiple menus.
          </CardListItem>
          <CardListItem>
            <strong>Consistent Layouts</strong>, we maintain consistency in layouts and navigation across all pages, so users can predict and understand where to find information.
          </CardListItem>

          <CardListItem>
            <strong>Skip Navigation Links</strong>, our skip links allow users to bypass repetitive content and navigate directly to the main content, which is particularly helpful
            for screen reader users.
          </CardListItem>

          <CardListItem>
            <strong>Visual Indicators</strong>, clear visual indicators highlight the current page or section, helping users keep track of their navigation path.
          </CardListItem>

          <CardListItem>
            <strong>ARIA Landmarks</strong>, we implement ARIA (Accessible Rich Internet Applications) landmarks to define regions of a page, making it easier for screen reader
            users to navigate and skip to different sections.
          </CardListItem>
        </div>
      </div>

      <p className={styles.h3}>
        We enjoy these challenges and are equipped with the expertise to navigate and implement these updates.
        <br />
        <br />
        We also see beyond compliance; we see an opportunity to provide examples for digital accessibility so others can follow along. Everything we implement is open source and
        available to the broader community, so they can learn our techniques to make other sites accessible too.
      </p>

      <p className={styles.h4} style={{ margin: `4rem 0 4rem 0` }}>
        <a href="https://t.me/internetdevelopmentstudio" target="_blank" className={styles.link}>
          ⭢ Meet our team on Telegram
        </a>
        <br />
        <br />
        Let’s work together to solve these problems.
      </p>
    </div>
  );
}
