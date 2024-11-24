import React from "react";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes.privacyPolicy}>
      <h1 className={classes.heading}>Privacy Policy</h1>
      <p className={classes.date}>
        Effective Date: <span>29th October 2024</span>
      </p>
      <p className={classes.description}>
        Flipr Innovation Labs Pvt Ltd (&quot;we&quot;, &quot;our&quot;, or
        &quot;us&quot;) is committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, and safeguard your information when
        you use our Unit Converter mobile application (&quot;App&quot;). By
        using the Unit Converter App, you agree to the collection and use of
        information in accordance with this policy. If you do not agree with any
        part of this policy, please do not use our App.
      </p>
      <br />
      <p className={classes.description}>
        By using the Unit Converter App, you agree to the collection and use of
        information in accordance with this policy. If you do not agree with any
        part of this policy, please do not use our App.
      </p>

      <h3 className={classes.listHeading}>Introduction</h3>

      <p className={classes.listDescription}>
        This Privacy Policy outlines the information practices of our Unit
        Converter application (&quot;App&quot;). Our primary objective is to
        provide a safe and secure user experience, and we are committed to
        protecting your privacy. By using our App, you agree to the terms
        outlined in this Privacy Policy. Please read it carefully to understand
        how we handle your information.
      </p>

      <h3 className={classes.listHeading}>Information Collection and Use</h3>

      <p className={classes.listDescription}>
        Our App does not collect, store, or request any personal data from
        users. We do not require registration, personal details, or any form of
        identification to use the App. The Unit Converter App is designed solely
        to provide measurement conversions, and all conversions are performed on
        your device without any data being transmitted to our servers.
      </p>

      <h3 className={classes.listHeading}>
        Analytics and Tracking Technologies
      </h3>

      <p className={classes.listDescription}>
        To improve user experience and enhance app performance, we have
        integrated Google Analytics and Google Tag Manager within our App. These
        tools help us gather anonymous usage data, such as app usage frequency,
        feature engagement, and crash reports. The information collected by
        these tools is not personally identifiable and is used solely for
        analytical purposes to optimise the App. Google’s privacy policies apply
        to these services, and you may refer to Google’s Privacy Policy for more
        information.
      </p>

      <h3 className={classes.listHeading}>Security</h3>

      <p className={classes.listDescription}>
        We are committed to ensuring the security of your information. The Unit
        Converter App does not transmit any data that could compromise user
        privacy or security. All conversions and calculations are processed
        locally on your device, so your data remains fully secure and private
      </p>

      <h3 className={classes.listHeading}>Policy Changes</h3>

      <p className={classes.listDescription}>
        We may update this Privacy Policy from time to time. Any changes will be
        effective immediately upon posting the revised policy in the App. We
        encourage you to review this policy periodically to stay informed about
        how we are protecting your information.
      </p>

      <h3 className={classes.listHeading}>Contact Us</h3>

      <p className={classes.listDescription}>
        If you have any questions or concerns about this Privacy Policy, please
        feel free to contact us at{" "}
        <a href="mailto:devops@flipr.ai.">devops@flipr.ai.</a>
      </p>
      <p className={classes.listDescription}>Flipr Innovation Labs Pvt Ltd</p>
      <p className={classes.listDescription}>
        We Work Prestige Atlanta, Koramangala 7th Block, Bangalore, 560034
      </p>
      <p className={classes.listDescription}>
        By using the Unit Converter App, you agree to this Privacy Policy
      </p>
    </div>
  );
};

export default page;
