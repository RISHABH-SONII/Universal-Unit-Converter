"use client";
import React from "react";
import classes from "./popularSearch.module.css";
import Chip from "./components/chip/Chip";
import { chipData } from "./components/chip/chipData";
const PopularSearch = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Popular Search</h2>
      <div className={classes.chipContainer}>
        {chipData.map((item, index) => (
          <div key={index} className={classes.column}>
            <Chip title={item.title} link={item.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSearch;
