"use client";
import React, { memo } from "react";
import "@mantine/core/styles/Button.css";
import classes from "./Header.module.css";
import { IMAGES } from "@/assets/Images";
import Link from "next/link";
import { Button, Image, Select } from "@mantine/core";
import "@mantine/core/styles/Kbd.css";
import "@mantine/spotlight/styles.css";
import { spotlight } from "@mantine/spotlight";
import Spotlight from "../SpotLightItems/SpotLightItems";
import { IconSearch } from "@tabler/icons-react";
import "@mantine/spotlight/styles.css";
import "@mantine/core/styles/Image.css";
const Header = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.firstSection}>
        <text>
          <Link href="/" className={classes.HeaderLogo}>
            <Image
              className={classes.logo}
              src={IMAGES.headerlogo.src}
              alt="headerlogo"
            />
          </Link>
        </text>
      </div>
      <div className={classes.secondSection}>
        <Select
          classNames={{
            root: classes.selector,
            input: classes.input,
            label: classes.label,
          }}
          leftSection={<IconSearch size={16} />}
          rightSection={""}
          rightSectionProps={{
            style: { display: "none" },
          }}
          placeholder="Search for units and categories"
          onClick={spotlight.open}
          w={"100%"}
        />
        <Button
          aria-label="Open Search"
          variant="outline"
          className={classes.spotLightButton}
          onClick={spotlight.open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </Button>
        <Spotlight />
      </div>
    </nav>
  );
};

export default memo(Header);
