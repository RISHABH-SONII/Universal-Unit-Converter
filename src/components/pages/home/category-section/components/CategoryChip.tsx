import React from "react";
import classes from "./categoryChip.module.css";
import { StaticImageData } from "next/image";
import { Image } from "@mantine/core";
import "@mantine/core/styles/Image.css";

interface ICategoryChipProps {
  image: StaticImageData;
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const CategoryChip: React.FC<ICategoryChipProps> = ({
  image,
  title,
  onClick,
  isActive,
}) => {
  return (
    <div className={classes.container} onClick={onClick}>
      <div
        className={`${classes.imageContainerUnActive} ${
          isActive ? classes.imageContainerActive : ""
        }`}
      >
        <Image
          className={classes.categoryImage}
          src={image.src}
          alt="categoryImages"
        />
      </div>
      <p className={classes.tittle}>{title}</p>
    </div>
  );
};

export default CategoryChip;
