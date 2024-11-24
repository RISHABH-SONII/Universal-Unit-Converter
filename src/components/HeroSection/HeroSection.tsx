"use client";
import React, { useEffect, useState } from "react";
import classes from "./HeroSection.module.css";
import { Accordion, Card, Group, Text } from "@mantine/core";
import Image from "next/image";
import { unitsData } from "../UnitList/UnitCategory";
import UnitConverter from "./components/UnitConverter";
import { useRouter } from "next/navigation";
import { unitConversions } from "../UnitList/UnitCoversionValues";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/Card.css";
import "@mantine/core/styles/Text.css";
import "@mantine/core/styles/Accordion.css";

interface IProps {
  categoryProp: string;
  FromUnit: string;
  ToUnit: string;
}

const HeroSection: React.FC<IProps> = ({ categoryProp, FromUnit, ToUnit }) => {
  const [category, setCategory] = useState<string>(categoryProp);
  const [fromUnit, setFromUnit] = useState<string>(FromUnit);
  const [toUnit, setToUnit] = useState<string>(ToUnit);
  const [selectedCard, setSelectedCard] = useState<string>(categoryProp);
  const router = useRouter();

  const updateUrl = (newFromUnit: string, newToUnit: string) => {
    if (newFromUnit && newToUnit) {
      setFromUnit(newFromUnit);
      setToUnit(newToUnit);
    }
  };

  const handleCardClick = (categoryKeys: string, subCategoryKey: string) => {
    localStorage.setItem("accordionOpened", categoryKeys);
    setCategory(subCategoryKey);
    setSelectedCard(subCategoryKey);
    const categoryUnits = unitConversions[subCategoryKey];
    const entries = Object.entries(categoryUnits);
    setFromUnit(entries.at(0)?.[0] || "");
    setToUnit(entries.at(1)?.[0] || "");
  };

  useEffect(() => {
    localStorage.setItem("accordionOpened", "Common");
  }, []);

  useEffect(() => {
    if (fromUnit && toUnit) {
      const categoryForUrl = category.toLowerCase();
      const fromUnitForUrl = encodeURIComponent(fromUnit.toLowerCase());
      const toUnitForUrl = encodeURIComponent(toUnit.toLowerCase());
      router.push(`/${categoryForUrl}/${fromUnitForUrl}-to-${toUnitForUrl}`);
    }
  }, [fromUnit, toUnit]);

  return (
    <div className={classes.heroSection}>
      <div className={classes.leftSection}>
        <Accordion
          transitionDuration={1000}
          variant="default"
          defaultValue={
            typeof window !== "undefined"
              ? localStorage.getItem("accordionOpened")
              : null
          }
        >
          {Object.entries(unitsData).map(
            ([categoryKeys, categoryValue], index) => (
              <Accordion.Item value={categoryKeys} key={"i" + "_" + index}>
                <Accordion.Control
                  style={{
                    padding: "0",
                    backgroundColor: "transparent",
                    borderBottom: "none",
                  }}
                >
                  <Group align="center" className={classes.Groups}>
                    <Image
                      src={unitsData[categoryKeys].image}
                      width={24}
                      height={24}
                      style={{ fontWeight: 700 }}
                      alt={`${categoryKeys} icon`}
                    />
                    {categoryKeys}
                  </Group>
                </Accordion.Control>
                <Accordion.Panel styles={{ content: { padding: "10px 7px" } }}>
                  <div className={classes.cardsContainer}>
                    {Object.entries(categoryValue.units).map(
                      ([subCategoryKey, subCategoryValue]) => (
                        <Card
                          key={subCategoryKey}
                          onClick={() => {
                            handleCardClick(categoryKeys, subCategoryKey);
                          }}
                          className={`${classes.cardUnactive} ${
                            selectedCard === subCategoryKey &&
                            classes.cardActive
                          }`}
                        >
                          <Card.Section>
                            <Image
                              src={subCategoryValue.image}
                              width={35}
                              height={35}
                              alt={`${subCategoryKey} icon`}
                              style={{
                                marginTop: "10px",
                                objectFit: "contain",
                              }}
                            />
                          </Card.Section>
                          <Text
                            size="sm"
                            style={{ marginTop: 7, fontWeight: 700 }}
                          >
                            {subCategoryKey}
                          </Text>
                        </Card>
                      )
                    )}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            )
          )}
        </Accordion>
      </div>

      <div className={classes.rightSection}>
        <div className={classes.rightSectionContainer}>
          <UnitConverter
            category={category}
            FromUnit={fromUnit}
            ToUnit={toUnit}
            onUnitChange={updateUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
