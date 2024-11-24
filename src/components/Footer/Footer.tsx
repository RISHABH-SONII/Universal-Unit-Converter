"use client";
import classes from "./Footer.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Image } from "@mantine/core";
import { IMAGES } from "@/assets/Images";
import Link from "next/link";
import ROUTES from "@/enum/routes";
import "@mantine/core/styles/Image.css";

export function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerSocialLinks}>
        <div className={classes.footerImageContainer}>
          <Image
            className={classes.footerImage}
            src={IMAGES.headerlogo.src}
            alt="headerlogo"
            width={70}
            height={70}
          />
        </div>
        <div className={classes.footerDescription}>
          <a href={ROUTES.PRIVACY_POLICY} aria-label="Privacy Policy">
            Privacy Policy
          </a>
        </div>
        <div className={classes.socialLinks}>
          <Link
            href="https://www.linkedin.com/company/externshipai/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn color="black" />
          </Link>
          <Link
            href="https://www.instagram.com/fliprindia/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram color="black" />
          </Link>
          <Link
            href="https://www.facebook.com/fliprindia/"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF color="black" />
          </Link>
        </div>
      </div>
      <div className={classes.copyright}>
        <FaRegCopyright className={classes.copyRightSymbol} />
        <p className={classes.copyrightText}>
          2022{" "}
          <Link href={"https://flipr.ai/"} target="_blank">
            Flipr.ai
          </Link>{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
