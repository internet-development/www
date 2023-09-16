import styles from '@sections/SectionPricing.module.scss';

import * as React from 'react';

export default function SectionPricing(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <div className={styles.card}>
          <img className={styles.img} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/spot-mockup.png" />
          <div className={styles.title}>Mockups</div>
          <div className={styles.description}>
            A mockup is a static representation of a product, showing users and stakeholders how it may look and be used. Make requests for complete website mockups or spot mockups
            on demand with quick turn around.
            <br />
            <br />
            Sometimes you need something quick, thats why we provide this option.
          </div>
          <div className={styles.label}>
            <strong>Estimated cost</strong>$18,999 USD
          </div>
          <div className={styles.label}>
            <strong>Payment</strong>Non-refundable upfront payment
          </div>
          <div className={styles.label}>
            <strong>Duration</strong>7 Days
          </div>
          <div className={styles.label}>
            <strong>Scope</strong>5 pages
          </div>
          <div className={styles.label}>
            <strong>Amendments</strong>3 change orders
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.img} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/spot-wireframe.png" />
          <div className={styles.title}>Websites</div>
          <div className={styles.description}>
            A website is a set of related web pages located under a single domain name. Everything will be designed, built, and deployed by us. We will also include a light CMS
            where you can manage small changes.
            <br />
            <br />
            Your project with us starts as a design & build, we will make your website and deploy it to the internet. Afterwards we will treat your website as if we were
            professional gardeners, tending and caring for your web pages.
          </div>
          <div className={styles.label}>
            <strong>Estimated cost</strong>$110,999 USD
          </div>
          <div className={styles.label}>
            <strong>Upkeep</strong>$599 USD / mo
          </div>
          <div className={styles.label}>
            <strong>Development</strong>$11,372 USD / mo
          </div>
          <div className={styles.label}>
            <strong>Payment</strong>Non-refundable upfront payment
          </div>
          <div className={styles.label}>
            <strong>Duration</strong>As long as development or upkeep is paid for
          </div>
          <div className={styles.label}>
            <strong>Scope</strong>5 web page max
          </div>
          <div className={styles.label}>
            <strong>Amendments</strong>As many that are necessary
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.img} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/spot-apps.png" />
          <div className={styles.title}>Web applications</div>
          <div className={styles.description}>
            A web application is software that runs in your web browser, often made by businesses that have to exchange information and deliver services remotely. Everything with
            be designed, built, and deployed by us. We will also include a custom CMS for your application and provide database backups.
            <br />
            <br />
            Your application with us starts as a design & build, we will build your application, ensure that it is secure for your users, and run your database. Afterwards we will
            treat your product or platform as if we were professional gardeners, tending and caring for your web pages and users.
          </div>
          <div className={styles.label}>
            <strong>Estimated cost</strong>$242,999 USD
          </div>
          <div className={styles.label}>
            <strong>Upkeep</strong>$5,999 USD / mo (per 1 million page views)
          </div>
          <div className={styles.label}>
            <strong>Development</strong>$31,471 USD / mo
          </div>
          <div className={styles.label}>
            <strong>Payment</strong>Non-refundable upfront payment
          </div>
          <div className={styles.label}>
            <strong>Duration</strong>As long as development or upkeep is paid for
          </div>
          <div className={styles.label}>
            <strong>Scope</strong>1,000,000 page views
          </div>
          <div className={styles.label}>
            <strong>Amendments</strong>As many that are necessary
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.img} src="https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/spot-embed.png" />
          <div className={styles.title}>Team embedding</div>
          <div className={styles.description}>
            Internet Development Studio can be hired to take on projects from you, your team, or company. We will craft software, user-centric products, and perform marketing to
            help you stand out. During this time we will act as if we are your employees and do our best to adjust to the culture and performance expectations.
            <br />
            <br />
            As a studio we can only embed with one entity at a time. So you will get 40 hours a week (minimum) of our undivided attention. In a lot of cases, we tend to allocate
            more hours because we love what we're working on.
          </div>
          <div className={styles.label}>
            <strong>Estimated cost</strong>$89,000 USD / mo
          </div>
          <div className={styles.label}>
            <strong>Payment</strong>Non-refundable upfront payment
          </div>
          <div className={styles.label}>
            <strong>Duration</strong>As long as services are paid for
          </div>
          <div className={styles.label}>
            <strong>Scope</strong>3 web applications or websites
          </div>
          <div className={styles.label}>
            <strong>Amendments</strong>As many that are necessary
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
              <br />A portion of the advanced funds are used for upkeep of your website, databases, and/or applications. If fund's are not advanced we will maintain your services
              for 45 days until permanent non-reversible termination. These fee's begin after a project has been successfully launched.
            </li>
            <li className={styles.item}>
              <strong>Development fees</strong>
              <br />
              Change orders in a development contract refer to formal requests to modify the original scope of work, specifications of a project, and/or growth of a service are
              acceptable as long as development fees are sent as advanced funds to the company. Failure to pay development fees does not result in termination of your website,
              database, and/or applications unless the upkeep fees are not paid. These fee's begin after a project has been successfully launched.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
