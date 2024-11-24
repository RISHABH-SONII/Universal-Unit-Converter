import React from "react";
import classes from "./notFound.module.css";
import Image from "next/image";
import { IMAGES } from "@/assets/Images";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className={classes.notFoundContainer}>
      <Image
        className={classes.notFoundImage}
        src={IMAGES.errorPageImage}
        alt="errorPageImage"
      />
      <p className={classes.goBack}>
        Go Back{" "}
        <Link className={classes.link} href="/">
          HOME
        </Link>
      </p>
    </div>
  );
}
