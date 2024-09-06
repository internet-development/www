import styles from '@sections/V2SectionProcess.module.scss';

import * as React from 'react';

import Avatars from '@components/Avatars';
import Logo from '@components/Logo';

const CardListItem = (props) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.listItemLeft}>☀</div>
      <div className={styles.listItemRight}>{props.children}</div>
    </div>
  );
};

export default function V2SectionProcess(props) {
  return (
    <div className={styles.process}>
      <h2 className={styles.h2}>
        What does working with <Logo height="1.6rem" href="/office" /> look like?
      </h2>

      <div className={styles.slot} style={{ marginTop: 88 }}>
        <div className={styles.card}>
          <div className={styles.label}>Introduction</div>
          <Avatars people={['JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Discovery video call</div>
          <div className={styles.description}>
            We start with a call to learn more about your goals or the challenge you want us to solve. This is when we figure out how our team can best work with yours to get
            things done.
          </div>
          <CardListItem>We use Zoom or Google Hangouts.</CardListItem>
          <CardListItem>We can start scoping from a month onwards.</CardListItem>
        </div>

        <div className={styles.card}>
          <div
            alt="Some visitors hanging out at the Internet Development Studio Company office doing various crafts and talking"
            className={styles.backdrop}
            style={{ backgroundImage: `url('https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/e58c98c2-72f6-4c39-ab3c-023d42ae1e55.png')` }}
          />
        </div>

        <div className={styles.card}>
          <div className={styles.label}>Introduction</div>
          <Avatars />
          <div className={styles.h4}>Our first Seattle, WA meeting</div>
          <div className={styles.description}>
            Come visit our Pike Place office and set up at a desk to work alongside us. We’ll dive into your goals and challenges, working together to find the best way to
            collaborate. You’re welcome to work from our space while we figure out the ideal approach. You’ll also have the chance to meet other companies in the space and likely
            enjoy some great chats.
          </div>

          <CardListItem>We have meeting rooms and open desks.</CardListItem>
          <CardListItem>There is always clean filtered water.</CardListItem>
          <CardListItem>We are here during the weekends.</CardListItem>
        </div>
      </div>

      <div className={styles.slot}>
        <div className={styles.card}>
          <div className={styles.label}>Day 1</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Onboarding</div>
          <div className={styles.description}>
            We’ve all worked at a variety of companies, and from day one, we’ll integrate seamlessly into your team, feeling like colleagues you’ve known for a while. We’re
            well-versed in various compliance requirements, including NDAs, and we’re comfortable working across Linux, MacOS, and Windows ecosystems.
          </div>
          <CardListItem>We're willing to train your employees too.</CardListItem>
          <CardListItem>If you prefer, we’ll adapt to all of your existing tools and processes.</CardListItem>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Day 1</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Embedding</div>
          <div className={styles.description}>
            We aim to fit seamlessly into the roles you expect from your engineers and designers. We can take direction without debate, following your lead, or we can passionately
            advocate for features as if our jobs depend on it. We’ll join your daily routine, either as active participants or as observers, depending on your needs.
          </div>
          <CardListItem>We’re experienced with a variety of workflows—whether it’s waterfall, agile, or the “move fast and break things” approach.</CardListItem>
          <CardListItem>Don't hesitate to ask us to try something new!</CardListItem>
        </div>

        <div className={styles.card}>
          <div
            alt="Some visitors hanging out at the Internet Development Studio Company sign, they are going to use a room for a podcast."
            className={styles.backdrop}
            style={{ backgroundImage: `url('https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c88ea48a-e1ff-4447-9b76-240481cc28be.png')` }}
          />
        </div>

        <div className={styles.card}>
          <div className={styles.label}>Day 1</div>
          <Avatars />
          <div className={styles.h4}>Work in the office</div>
          <div className={styles.description}>
            We can host stand-ups at our office, and we’re ready for any meetings you need. Our office has meeting rooms, which makes it easy for clients to bring in their own
            customers. Being in the same space often leads to organic activities, like team-building events. We’re also happy to host and cook for large groups—just plan it with
            us!
          </div>
          <CardListItem>Just give us a few days’ notice, and we’ll do our best to accommodate. We keep our client list small to stay flexible.</CardListItem>
          <CardListItem>Pike Place in Seattle offers plenty of local restaurants and great spots for a refreshing walk during breaks.</CardListItem>
          <CardListItem>We do not provide parking for guests unfortunately. You will have to find your own and it is not always easy.</CardListItem>
          <CardListItem>We have symmetrical fiber internet and quiet space.</CardListItem>
        </div>
      </div>

      <div className={styles.slot}>
        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['JIM', 'ANASTASIYA']} />
          <div className={styles.h4}>Technical Program Management</div>
          <div className={styles.description}>
            You can count on us to help identify your TPGM needs. We understand the importance of defining “done” and the value of both storytelling and listening. As fresh eyes,
            we can offer an outside perspective and help align everyone around a common goal. While we’ve been fortunate to work on projects that have made it to top app lists,
            we’re here to support your vision and bring our experience to help you get there too. Wins are great for everyone.
          </div>
          <CardListItem>Defining “done” is crucial, and so is being honest—we set that standard from the start.</CardListItem>
          <CardListItem>With our deep technical expertise, having tackled some of the toughest challenges on the web, we can help guide smart, long-term decisions.</CardListItem>
          <CardListItem>We’re passionate about software and product development—we could talk about it endlessly and never get tired.</CardListItem>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Zero to one</div>
          <div className={styles.description}>
            With designers who have spent the last decade working at various startups, our creative partners are here to help bring your product to market for the first time and
            support you through future launches if you’d like. For us, every product launch is like releasing a heartfelt album—we want to be proud of it and the opportunities it
            creates.
          </div>
          <CardListItem>We love exploring logos, we have so many logo books and archives.</CardListItem>
          <CardListItem>We use the classics like Figma, Sketch, Adobe Photoshop, Adobe Illustrator.</CardListItem>
          <CardListItem>
            We have quick access to some of the top photographers and videographers in Seattle, whether they’re in our network or right here in the office.
          </CardListItem>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Get in quick</div>
          <div className={styles.description}>
            If you’re tired of talk and just want results, we’re ready to jump in, handle some quick tasks, or work through a long-standing backlog. No problem—we’ll get to work
            and keep the conversation brief. This is a reasonable scenario for us since we are a team of web design, graphic design, and web engineering specialists, especially if
            your current team is overloaded with tasks they haven’t been able to tackle.
          </div>

          <CardListItem>No need to feel anxious about asking your team for one-off tasks anymore.</CardListItem>
          <CardListItem>We’re not intimidated by technical debt.</CardListItem>
          <CardListItem>Let us step in and add that missing design system component.</CardListItem>
          <CardListItem>We’ll could tackle those obscure backlog tasks that require extra attention.</CardListItem>
          <CardListItem>We can even handle the tricky forks of a repository that others are hesitant to maintain.</CardListItem>
        </div>
      </div>

      <div className={styles.slot}>
        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Tooling investment</div>
          <div className={styles.description}>
            We understand that a company’s design and engineering teams have their own identity, often shaped by the tools they use. So we would like to bolster this position or
            start fresh. We work with popular tools like Next.js, Postgres, Figma, GSAP, SASS, and Tailwind, and we’re well-versed in various CSS dialects, including CSS-in-JS and
            email-compliant inline styles. One of our partners even contributed to the development and design of Expo (React Native).
          </div>

          <CardListItem>A fresh start can benefit teams.</CardListItem>
          <CardListItem>We respect the tools you’ve used—both your history and future matter.</CardListItem>
          <CardListItem>Involve us in your consulting meetings for added perspectives and knowledge sharing.</CardListItem>
          <CardListItem>We are not scared of LLMs.</CardListItem>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM']} />
          <div className={styles.h4}>Launch, maintain, and survive</div>
          <div className={styles.description}>
            Your uptime is critical, and while we can’t guarantee 99.9999999% uptime at scale (though that’s a good problem to have), we have extensive experience keeping websites
            running smoothly with minimal attention cost. Reducing attention cost matters because you should focus on what’s most important, not on unnecessary distractions. Let us
            help you reach a place where you can continue to grow your product alongside your customers.
          </div>
          <CardListItem>Have to use IPFS? We can help.</CardListItem>
          <CardListItem>We have experience with GCE, GCS, AWS EC2, and S3.</CardListItem>
          <CardListItem>Let us manage your VPS or consult with you on-premise solutions.</CardListItem>
          <CardListItem>We enjoy working with tools like Fly, Vercel, and Render.</CardListItem>
          <CardListItem>We enjoy doing database backups.</CardListItem>
        </div>

        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANDY']} />
          <div className={styles.h4}>Supporting volatility</div>
          <div className={styles.description}>
            Do your leaders often change their minds? Are you dealing with conflicting priorities and concerned that your team might not fully support the final decision? We can
            help you navigate those challenges by backing you through frequent changes. We understand that, in tough times, businesses need to focus on what truly matters. We’re
            highly flexible and can adapt as needed.
          </div>
          <CardListItem>We’re never afraid to start fresh and delete what’s not working.</CardListItem>
          <CardListItem>Our deal structure is built to support these changes when needed.</CardListItem>
          <CardListItem>We share your goals—achieving success and helping your business thrive.</CardListItem>
        </div>

        <div className={styles.card}>
          <div className={styles.label}>Workflow</div>
          <Avatars people={['XIANGAN', 'ELIJAH', 'JIM', 'ANASTASIYA', 'ANDY']} />
          <div className={styles.h4}>Libraries and documentation</div>
          <div className={styles.description}>
            Documentation and design systems are a big priority for us, though we know they aren’t always top of mind for everyone. If needed, we can create comprehensive,
            user-friendly documentation for your products and develop beautiful, easy-to-navigate design systems for the web. We also enjoy building tools that address these
            challenges.
          </div>
          <CardListItem>We’re also happy to create a custom solution if needed.</CardListItem>
          <CardListItem>We’re comfortable using Scalar, GitBook, Notion, or any other product to support your growth.</CardListItem>
          <CardListItem>Publications, blog posts, and video tutorials are also exciting options we love to explore.</CardListItem>
        </div>
      </div>

      <p className={styles.h3}>
        Interested in working with us? Send us a direct message or @-reply through any of our social channels (we’re always checking), and we’ll exchange contact details to get
        started!
        <br />
        <br />
        <a href="https://t.me/internetdevelopmentstudio" target="_blank" className={styles.link}>
          ↗ Join us on Telegram
        </a>
      </p>
    </div>
  );
}
