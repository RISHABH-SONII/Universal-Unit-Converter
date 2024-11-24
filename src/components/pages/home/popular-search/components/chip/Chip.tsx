import React from "react";
import classes from "./chip.module.css";
import Link from "next/link";

interface IChipProps {
  title: string;
  link: string;
}
const Chip: React.FC<IChipProps> = ({ title, link }) => {
  return (
    <Link href={link}>
      <button className={classes.button}>{title}</button>
    </Link>
  );
};

export default Chip;
