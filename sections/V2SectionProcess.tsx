import styles from '@sections/V2SectionProcess.module.scss';

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

export default function V2SectionProcess(props) {
  return (
    <div className={styles.process} id="what-do-we-do">
      <h2 className={styles.h2}>
        When you hire our company, you gain the full support of our dedicated six-member team.
        <br />
        <br />
        So what does working with <Logo height="1.6rem" href="/office" /> look like?
      </h2>

      <div className={styles.slot} style={{ marginTop: 88 }}>
        <div className={styles.card}>
          <div className={styles.label}>Introduction</div>
          <Avatars people={['JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Discovery Video Call</div>
          <div className={styles.description}>
            We start with a video call to learn about your goals or the challenges you need to solve. This is where we identify how our team can best collaborate with yours to
            deliver results.
          </div>
          <CardListItem>We are happy to use whichever video chat platform you prefer.</CardListItem>
          <CardListItem>Our projects typically begin with a scope of at least one month.</CardListItem>
        </div>

        <div className={styles.card}>
          <div
            className={styles.backdrop}
            style={{ backgroundImage: `url('https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/e58c98c2-72f6-4c39-ab3c-023d42ae1e55.png')` }}
          />
        </div>

        <div className={styles.card}>
          <div className={styles.label}>Introduction</div>
          <Avatars />
          <div className={styles.h4}>First Meeting in Seattle, WA</div>
          <div className={styles.description}>
            Join us at our Pike Place office and work alongside our team. We will dive into your goals and challenges, collaborating to find the best way forward. You are welcome
            to use our space while we explore the ideal approach together. Along the way, you will meet other companies in the office and potentially engage in fun conversations.
          </div>

          <CardListItem>Meeting rooms and open desks are available.</CardListItem>
          <CardListItem>We always have fresh, filtered water.</CardListItem>
          <CardListItem>We are here during weekends, too.</CardListItem>
        </div>
      </div>

      <div className={styles.slot}>
        <div className={styles.card}>
          <div className={styles.label}>Day 1</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY', 'CHENYU']} />
          <div className={styles.h4}>Onboarding</div>
          <div className={styles.description}>
            From day one, we seamlessly integrate into your team, feeling like colleagues you have worked with for years. Our experience across various companies makes us
            comfortable with compliance requirements, including NDAs. We are also well-versed in working within Linux, MacOS, and Windows environments.
          </div>
          <CardListItem>We are happy to train your employees when needed.</CardListItem>
          <CardListItem>If you prefer, we will adapt to your existing tools and processes.</CardListItem>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Day 1</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY', 'CHENYU']} />
          <div className={styles.h4}>Embedding</div>
          <div className={styles.description}>
            We aim to fit naturally into the roles you need, whether you want us to follow your direction or advocate for key features. We will integrate into your daily routine,
            participating as much or as little as you require.
          </div>
          <CardListItem>We are comfortable with different workflows—whether agile, waterfall, or a “move fast and break things” approach.</CardListItem>
          <CardListItem>If you want to try something new, we are always up for the challenge.</CardListItem>
        </div>

        <div className={styles.card}>
          <div
            className={styles.backdrop}
            style={{ backgroundImage: `url('https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c88ea48a-e1ff-4447-9b76-240481cc28be.png')` }}
          />
        </div>

        <div className={styles.card}>
          <div className={styles.label}>Day 1</div>
          <Avatars />
          <div className={styles.h4}>Working in the Office</div>
          <div className={styles.description}>
            We can host stand-ups at our office and are ready for any meetings you need. Our meeting rooms provide an easy way for clients to bring in their own customers. Being
            together in the same space often sparks spontaneous team-building activities. We are also happy to host and cook for large groups—just give us a heads-up!
          </div>
          <CardListItem>Give us a few days’ notice, and we will do our best to accommodate. We keep our client list small to stay flexible.</CardListItem>
          <CardListItem>Pike Place offers great local restaurants and scenic spots for walks during breaks.</CardListItem>
          <CardListItem>We do not offer guest parking, so please arrange your own.</CardListItem>
          <CardListItem>Our office provides symmetrical fiber internet and quiet workspaces.</CardListItem>
        </div>
      </div>

      <div className={styles.slot}>
        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['JIM', 'ANASTASIYA']} />
          <div className={styles.h4}>Technical Program Management</div>
          <div className={styles.description}>
            We help you identify your Technical Program Management needs, offering fresh perspectives to align your team around a shared goal. We understand the importance of
            defining “done” and know the value of storytelling and listening. Our experience spans high-profile projects, but our focus is on supporting your vision and bringing
            our expertise to help you achieve it.
          </div>
          <CardListItem>Defining “done” from the start is critical, and we set honest expectations right away.</CardListItem>
          <CardListItem>With deep technical expertise, we guide long-term, strategic decisions.</CardListItem>
          <CardListItem>We are passionate about software and product development and could talk about it endlessly.</CardListItem>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Zero to One</div>
          <div className={styles.description}>
            With years of startup experience, our design partners help bring your product to market for the first time and support future launches. Each launch is a personal
            milestone for us, and we take pride in every opportunity it creates.
          </div>
          <CardListItem>We love exploring logos and have an extensive collection of logo books and archives.</CardListItem>
          <CardListItem>We use trusted tools like Figma, Sketch, Photoshop, and Illustrator.</CardListItem>
          <CardListItem>Our network includes some of Seattle’s top photographers and videographers, many of whom work directly in our space.</CardListItem>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY', 'CHENYU']} />
          <div className={styles.h4}>Get in Quick</div>
          <div className={styles.description}>
            When you need quick results without the extra discussion, we are ready to jump in. Whether tackling long-standing backlogs or handling one-off tasks, we lighten the
            load for your team. Our web design, graphic design, and web engineering expertise ensures we deliver results without delay.
          </div>

          <CardListItem>Do not hesitate to ask for help with one-off tasks—we are ready.</CardListItem>
          <CardListItem>We are not fazed by technical debt.</CardListItem>
          <CardListItem>Let us step in and add that missing design system component.</CardListItem>
          <CardListItem>Let us handle missing design system components or tackle those obscure backlog tasks.</CardListItem>
          <CardListItem>We are comfortable managing tricky forks of repositories that others might avoid.</CardListItem>
        </div>
      </div>

      <div className={styles.slot}>
        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY', 'CHENYU']} />
          <div className={styles.h4}>Tooling Investment</div>
          <div className={styles.description}>
            We understand that a team’s identity is often defined by the tools they use. Whether you want to strengthen your current toolkit or start fresh, we can help. Our team
            works with popular tools like Next.js, Postgres, Figma, GSAP, and Tailwind. We are also well-versed in CSS dialects, including CSS-in-JS and email-compliant inline
            styles. One of our partners contributed to the development of Expo (React Native), so we understand the importance of great tooling.
          </div>

          <CardListItem>A fresh start can energize teams and lead to new growth.</CardListItem>
          <CardListItem>We respect the tools you’ve relied on—your history and future both matter.</CardListItem>
          <CardListItem>Involve us in consulting meetings for additional perspectives.</CardListItem>
          <CardListItem>We are not afraid to explore new technologies, including LLMs.</CardListItem>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'CHENYU']} />
          <div className={styles.h4}>Launch, Maintain, and Survive</div>
          <div className={styles.description}>
            Your uptime is critical, and while we can not guarantee 99.9999999% uptime at scale, we specialize in keeping websites running smoothly with minimal attention cost. We
            help you stay focused on what is most important, allowing you to grow your product and engage your customers without unnecessary distractions.
          </div>
          <CardListItem>Need to work with IPFS? We’ve got you covered.</CardListItem>
          <CardListItem>We are experienced with GCE, GCS, AWS EC2, and S3.</CardListItem>
          <CardListItem>Let us manage your VPS or consult on on-premise solutions.</CardListItem>
          <CardListItem>We enjoy working with tools like Fly, Vercel, and Render.</CardListItem>
          <CardListItem>Database backups? We are happy to help.</CardListItem>
        </div>

        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANDY', 'CHENYU']} />
          <div className={styles.h4}>Supporting Volatility</div>
          <div className={styles.description}>
            If you are dealing with frequent changes in priorities or decisions, we provide the flexibility you need to adapt. We understand that leaders may change their minds,
            and we support you through those shifts while keeping your team focused on what matters most.
          </div>
          <CardListItem>We are never afraid to start fresh and remove what is not working.</CardListItem>
          <CardListItem>Our flexible deal structure supports your evolving needs.</CardListItem>
          <CardListItem>We share your goals—success and growth for your business.</CardListItem>
        </div>

        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY', 'CHENYU']} />
          <div className={styles.h4}>Libraries and Documentation</div>
          <div className={styles.description}>
            We value great documentation and design systems, even though they are not always top of mind for everyone. If needed, we can create clear, user-friendly documentation
            and develop intuitive design systems for your web products. We also enjoy building tools to make these processes more efficient.
          </div>
          <CardListItem>We are happy to create custom solutions if needed.</CardListItem>
          <CardListItem>We work with tools like Scalar, GitBook, and Notion, among others.</CardListItem>
          <CardListItem>We love contributing to publications, blog posts, and video tutorials.</CardListItem>
        </div>
      </div>

      <p className={styles.h3}>
        Interested in working with us? Send us a direct message or @-reply on any of our social channels (we’re always keeping an eye out), and we’ll exchange contact details to
        get started!
        <br />
        <br />
        <a href="https://t.me/internetdevelopmentstudio" target="_blank" className={styles.link}>
          ↗ Join us on Telegram
        </a>
      </p>
    </div>
  );
}
