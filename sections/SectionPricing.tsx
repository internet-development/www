import styles from '@sections/SectionPricing.module.scss';

import * as React from 'react';

export default function SectionPricing(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <div className={styles.card}>
          <img className={styles.img} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/spot-mockup.png" />
          <div className={styles.title}>INTDEV joins your team for 3 months</div>
          <div className={styles.description}>
            Join forces with us for the next 3 months. Our team will integrate with yours, collaborating on original visual design, branding, full-stack software development,
            go-to-market strategies, and user testing. We'll work swiftly, handling as many requests and changes as our schedule and capabilities allow.
            <br />
            <br />
            In a typical 3-month engagement, we can launch a website, create a new brand, develop a design system, and deliver large feature work that ships to customers. This is
            the perfect starting point for companies looking to make a significant impact in a short timeframe.
          </div>
          <div className={styles.label}>
            <strong>Estimated cost</strong>$185,000 USD
          </div>
          <div className={styles.label}>
            <strong>Payment</strong>Non-refundable upfront payment
          </div>
          <div className={styles.label}>
            <strong>Team size</strong>4
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.img} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/spot-wireframe.png" />
          <div className={styles.title}>INTDEV joins your team for 6 months</div>
          <div className={styles.description}>
            Extend our partnership to 6 months, and our builders and designers will become an integral part of your team. We'll create, brand, develop, launch, and test your
            projects with speed and agility. We'll be right there in your channels, working side-by-side to make as many impactful changes as possible.
            <br />
            <br />
            With 6 months, we can take things to the next level. A typical engagement of this length allows us to launch multiple new products, each with its own unique design
            system and brand. We can also deliver a few static websites, large features, and conduct user testing sessions to ensure your products resonate with your target
            audience.
          </div>
          <div className={styles.label}>
            <strong>Estimated cost</strong>$380,000 USD
          </div>
          <div className={styles.label}>
            <strong>Payment</strong>Non-refundable upfront payment
          </div>
          <div className={styles.label}>
            <strong>Team size</strong>4
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.img} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/spot-apps.png" />
          <div className={styles.title}>INTDEV joins your team for 9 months</div>
          <div className={styles.description}>
            Unlock the full potential of our partnership by working with us for 9 months. This extended engagement provides ample time to launch a wide array of products, brands,
            and features, creating a comprehensive ecosystem for your company.
            <br />
            <br />
            With 9 months, we can dive deep into your company's long-term goals and develop a holistic product development strategy that encompasses multiple product launches,
            cohesive branding across all touchpoints, and a robust feature set that keeps your customers engaged. Our team will be dedicated to your success, ensuring that every
            aspect of your company's digital presence is optimized for growth.
          </div>
          <div className={styles.label}>
            <strong>Estimated cost</strong>$575,000 USD
          </div>
          <div className={styles.label}>
            <strong>Payment</strong>Non-refundable upfront payment
          </div>
          <div className={styles.label}>
            <strong>Team size</strong>4
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.img} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/spot-embed.png" />
          <div className={styles.title}>INTDEV joins your team for 12 months</div>
          <div className={styles.description}>
            Imagine the possibilities of having our entire team join you for a full year. This is the ultimate partnership, where we'll launch as many products, brands, and
            websites as possible during our time together.
            <br />
            <br />
            With a 12-month engagement, the sky's the limit. We'll become a seamless extension of your company, working tirelessly to bring your vision to life. From ideation to
            execution, our team will be there every step of the way, launching products, creating captivating brands, and developing full stack web applications or static websites
            that drive your business forward. With our studio's full attention and resources dedicated to your company for an entire year, you can expect unparalleled results and a
            transformative experience that will set you apart in your industry.
          </div>
          <div className={styles.label}>
            <strong>Estimated cost</strong>$750,000 USD
          </div>
          <div className={styles.label}>
            <strong>Payment</strong>Non-refundable upfront payment
          </div>
          <div className={styles.label}>
            <strong>Team size</strong>4
          </div>
        </div>

        <div className={styles.glossary}>
          <ol className={styles.list}>
            <li className={styles.item}>
              <strong>Estimated cost</strong>
              <br />
              The estimated cost only covers the initial design, build, and ship and not the upkeep costs or further development costs. The projected or approximated amount of
              money we expect to charge you to assist you with budgeting. The actual cost will be determined after we speak to you.
            </li>
            <li className={styles.item}>
              <strong>Payment</strong>
              <br />
              All payments to Internet Development Studio are paid in advance as advanced funds and are non-refundable. We have a small team and need to protect our time, attention
              and resources.
            </li>
            <li className={styles.item}>
              <strong>Upkeep fees</strong>
              <br />A portion of the payment funds are used for upkeep of your website, databases, and/or applications. If fund's are not paid we will maintain your services for 45
              days until permanent non-reversible termination.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
