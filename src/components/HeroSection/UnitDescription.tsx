import React from "react";
import classes from "./UnitDescription.module.css";
import { unitDescription } from "@/utils/unitDescription";
import { GoDotFill } from "react-icons/go";

interface UnitDescriptionProps {
  categoryKey: string;
}

const UnitDescription: React.FC<UnitDescriptionProps> = ({ categoryKey }) => {
  const category = unitDescription[categoryKey];

  return (
    <div className={classes.container}>
      {category ? (
        <>
          <h3 className={classes.header}>{category.header}</h3>
          <p className={classes.title}>{category.title}</p>

          <h4 className={classes.listHeader}>
            Common {categoryKey.toLowerCase()} units{" "}
          </h4>
          <ul className={classes.list}>
            {category.descriptions.map((description, index) => (
              <div key={index} className={classes.listItemContainer}>
                <div className={classes.firstSection}>
                  <GoDotFill />
                </div>
                <div className={classes.secondSection}>
                  <li className={classes.listItem}>{description}</li>
                </div>
              </div>
            ))}
          </ul>
        </>
      ) : (
        <p className={classes.noDescription}>
          No descriptions available for this category.
        </p>
      )}
    </div>
  );
};

export default UnitDescription;
