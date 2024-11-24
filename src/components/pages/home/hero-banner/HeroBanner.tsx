import React from "react";
import classes from "./heroBanner.module.css";
import { IMAGES } from "@/assets/Images";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

const HeroBanner = () => {
  return (
    <div className={classes.heroBanner}>
      <div className={`${classes.column}`}>
        <div className={classes.textContainer}>
          <h1 className={classes.heading}>
            <span>Unit</span> Converter
          </h1>

          <p className={classes.description}>
            Effortlessly convert units across a variety of categories tailored
            for every need. Precision and ease come together, simplifying any
            measurement conversion. Fast, reliable! Unlock accuracy and explore
            seamless conversions in weight, length, currency, speed, and more.
            Discover how straightforward converting can be with just a few
            clicks!
          </p>
          <div className={classes.tagList}>
            <h2 className={classes.subHeading}>Convert Units Instantly</h2>
            <p className={classes.tagPoints}>
              <span>
                <GiCheckMark color="rgb(28, 135, 189)" />
              </span>
              Fast and accurate conversions
            </p>
            <p className={classes.tagPoints}>
              <span>
                <GiCheckMark color="rgb(28, 135, 189)" />
              </span>
              Multiple category support
            </p>
            <p className={classes.tagPoints}>
              <span>
                <GiCheckMark color="rgb(28, 135, 189)" />
              </span>
              Simple, intuitive interface
            </p>
          </div>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.imgContainer}>
          <link rel="preload" href={IMAGES.heroImage.src} as="image" />
          <Image
            className={classes.heroImage}
            src={IMAGES.heroImage.src}
            alt="heroImage"
            loading="eager"
            priority
            width={1200}
            height={800}
            sizes="(max-width: 600px) 100vw, 50vw"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
