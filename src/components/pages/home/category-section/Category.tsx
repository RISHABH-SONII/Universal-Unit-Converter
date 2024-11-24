"use client";
import React, { useState } from "react";
import classes from "./category.module.css";
import { categoryChipData } from "./components/categoryChipData";
import CategoryChip from "./components/CategoryChip";
import { Accordion, Card, Text } from "@mantine/core";
import { unitsData } from "@/components/UnitList/UnitCategory";
import ROUTES from "@/enum/routes";
import Link from "next/link";
import "@mantine/core/styles/Card.css";
import "@mantine/core/styles/Text.css";
import "@mantine/core/styles/Accordion.css";
import Image from "next/image";

const Category = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>("Common");

  const handleCategoryClick = (categoryTitle: string) => {
    setActiveCategory((prevCategory) =>
      prevCategory === categoryTitle ? null : categoryTitle
    );
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Category</h2>
      <div className={classes.row}>
        {categoryChipData.map((item, index) => (
          <div key={index} className={classes.column}>
            <CategoryChip
              isActive={activeCategory === item.title}
              image={item.image}
              title={item.title}
              onClick={() => handleCategoryClick(item.title)}
            />
          </div>
        ))}
      </div>
      <div className={classes.accordionPanel}>
        <Accordion
          styles={{
            item: {
              border: "none",
            },
            control: {
              border: "none",
            },
          }}
          variant="default"
          value={activeCategory}
          onChange={(value) => setActiveCategory(value)}
        >
          {Object.entries(unitsData).map(
            ([categoryKeys, categoryValues], index) => (
              <Accordion.Item key={index} value={categoryKeys}>
                <Accordion.Panel>
                  <div className={classes.grid}>
                    {Object.entries(categoryValues.units).map(
                      ([subCategoryKey, subCategoryValue]) => (
                        <div
                          className={classes.gridColumn}
                          key={subCategoryKey}
                        >
                          <Link
                            onClick={() =>
                              localStorage.setItem(
                                "accordionOpened",
                                categoryKeys
                              )
                            }
                            style={{ textDecoration: "none" }}
                            href={
                              ROUTES[
                                subCategoryKey.toUpperCase() as keyof typeof ROUTES
                              ]
                            }
                          >
                            <Card
                              padding="xs"
                              classNames={{ root: classes.card }}
                            >
                              <Card.Section>
                                <Image
                                  src={subCategoryValue.image}
                                  width={35}
                                  height={35}
                                  alt={subCategoryKey}
                                  style={{
                                    marginTop: "10px",
                                    objectFit: "contain",
                                  }}
                                />
                              </Card.Section>
                              <Text size="sm" style={{ fontWeight: 700 }}>
                                {subCategoryKey}
                              </Text>
                            </Card>
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            )
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default Category;
