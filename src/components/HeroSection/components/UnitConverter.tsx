"use client";
import React, { useState } from "react";
import classes from "../HeroSection.module.css";
import { Select, TextInput } from "@mantine/core";
import { unitsData } from "@/components/UnitList/UnitCategory";
import Image from "next/image";
import { unitConversions } from "@/components/UnitList/UnitCoversionValues";
import { ICONS } from "@/assets/ICONS";
import { IoIosArrowDown } from "react-icons/io";
import "@mantine/core/styles/Image.css";
import "@mantine/core/styles/Combobox.css";

interface IProps {
  category: string;
  FromUnit: string;
  ToUnit: string;
  onUnitChange: (fromUnit: string, toUnit: string) => void;
}

const UnitConverter: React.FC<IProps> = ({
  category,
  FromUnit,
  ToUnit,
  onUnitChange,
}) => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [Fromvalue, setFromValue] = useState<string | null>(FromUnit);
  const [Tovalue, setToValue] = useState<string | null>(ToUnit);
  const [result, setresult] = useState<number | null>(null);
  const roundToFour = (num: number) => Math.round(num * 1e10) / 1e10;

  const selectData = Object.entries(unitsData).flatMap(([, categoryValue]) =>
    Object.entries(categoryValue.units)
      .filter(([subCategoryKey]) => subCategoryKey === category)
      .flatMap(([, subCategoryValue]) =>
        subCategoryValue.units.map((unitType) => ({
          label: unitType,
          value: unitType,
        }))
      )
  );

  const filteredFromSelectData = selectData.filter(
    (unit) => unit.value !== Tovalue
  );

  const filteredToSelectData = selectData.filter(
    (unit) => unit.value !== Fromvalue
  );

  const handleConversion = (callValue: number) => {
    if (category === "Temperature") {
      let conversions: number | null = null;

      if (Fromvalue === "Celsius" && Tovalue === "Fahrenheit") {
        conversions = callValue * 1.8 + 32;
        setresult(roundToFour(conversions));
      } else if (Fromvalue === "Celsius" && Tovalue === "Kelvin") {
        conversions = callValue + 273.15;
        setresult(roundToFour(conversions));
      } else if (Fromvalue === "Celsius" && Tovalue === "Rankine") {
        conversions = (callValue + 273.15) * 1.8;
        setresult(roundToFour(conversions));
      } else if (Fromvalue === "Fahrenheit" && Tovalue === "Celsius") {
        conversions = (callValue - 32) / 1.8;
        setresult(roundToFour(conversions));
      } else if (Fromvalue === "Fahrenheit" && Tovalue === "Kelvin") {
        conversions = (callValue - 32) / 1.8 + 273.15;
        setresult(roundToFour(conversions));
      } else if (Fromvalue === "Fahrenheit" && Tovalue === "Rankine") {
        conversions = callValue + 459.67;
        setresult(conversions);
      } else if (Fromvalue === "Kelvin" && Tovalue === "Celsius") {
        conversions = callValue - 273.15;
        setresult(roundToFour(conversions));
      } else if (Fromvalue === "Kelvin" && Tovalue === "Fahrenheit") {
        conversions = (callValue - 273.15) * 1.8 + 32;
        setresult(roundToFour(conversions));
      } else if (Fromvalue === "Kelvin" && Tovalue === "Rankine") {
        conversions = callValue * 1.8;
        setresult(roundToFour(conversions));
      } else if (Fromvalue === "Rankine" && Tovalue === "Celsius") {
        conversions = ((callValue - 491.67) * 5) / 9;
        setresult(roundToFour(conversions));
      } else if (Fromvalue === "Rankine" && Tovalue === "Fahrenheit") {
        conversions = callValue - 459.67;
        setresult(roundToFour(conversions));
      } else if (Fromvalue === "Rankine" && Tovalue === "Kelvin") {
        conversions = callValue / 1.8;
        setresult(roundToFour(conversions));
      }
    } else if (category === "Fuel") {
      let conversions: number | null = null;
      if (
        Fromvalue === "Kilometer-per-litre" &&
        Tovalue === "Liter-per-100-kilometer"
      ) {
        conversions = 100 / callValue;
        setresult(roundToFour(conversions));
      } else if (
        Fromvalue === "Kilometer-per-litre" &&
        Tovalue === "Miles-per-gallon"
      ) {
        conversions = callValue * 2.35215;
        setresult(roundToFour(conversions));
      } else if (
        Fromvalue === "Liter-per-100-kilometer" &&
        Tovalue === "Kilometer-per-litre"
      ) {
        conversions = 100 / callValue;
        setresult(roundToFour(conversions));
      } else if (
        Fromvalue === "Liter-per-100-kilometer" &&
        Tovalue === "Miles-per-gallon"
      ) {
        conversions = (100 / callValue) * 2.35215;
        setresult(roundToFour(conversions));
      } else if (
        Fromvalue === "Miles-per-gallon" &&
        Tovalue === "Kilometer-per-litre"
      ) {
        conversions = callValue / 2.35215;
        setresult(roundToFour(conversions));
      } else if (
        Fromvalue === "Miles-per-gallon" &&
        Tovalue === "Liter-per-100-kilometer"
      ) {
        conversions = 100 / (callValue / 2.35215);
        setresult(roundToFour(conversions));
      }
    } else if (
      category === "Time" ||
      category === "Cooking" ||
      category === "Prefix" ||
      category === "Power" ||
      category === "Force" ||
      category === "Pressure" ||
      category === "Volume" ||
      category === "Energy" ||
      category === "Viscosity" ||
      category === "Flow" ||
      category === "Concentration" ||
      category === "Permeability" ||
      category === "Surface" ||
      category === "Resistance" ||
      category === "Capacitance" ||
      category === "Conductance" ||
      category === "Inductance" ||
      category === "Charge" ||
      category === "Conductivity" ||
      category === "Potential" ||
      category === "Resistivity" ||
      category === "Field-strength" ||
      category === "Linear-charger" ||
      category === "Surface-charger" ||
      category === "Image" ||
      category === "Storage" ||
      category === "Data-transfer" ||
      category === "Luminance" ||
      category === "Luminous-intensity"
    ) {
      const fromFactor = unitConversions[category][Fromvalue!];
      const toFactor = unitConversions[category][Tovalue!];

      if (fromFactor && toFactor) {
        const baseValue = callValue * fromFactor;
        const convertedValue = baseValue / toFactor;
        setresult(convertedValue);
      }
    } else {
      const fromFactor = unitConversions[category][Fromvalue!];
      const toFactor = unitConversions[category][Tovalue!];

      if (fromFactor && toFactor) {
        const baseValue = callValue / fromFactor;
        const convertedValue = baseValue * toFactor;
        setresult(convertedValue);
      }
    }
  };

  const handleFromChange = (newValue: string | null) => {
    setFromValue(newValue);
    onUnitChange(newValue!, Tovalue!);
  };

  const handleToChange = (newToValue: string | null) => {
    if (newToValue === Fromvalue) {
      alert("From and To values cannot be the same.");
      return;
    }
    setToValue(newToValue);
    onUnitChange(Fromvalue!, newToValue!);
  };

  const swapSelector = () => {
    const temp = Fromvalue;
    setFromValue(Tovalue);
    setToValue(temp);
    onUnitChange(Tovalue!, Fromvalue!);
  };
  return (
    <div>
      <div className={classes.heading}>
        {category ? (
          <h1>
            Category: <span style={{ color: "darkslateblue" }}>{category}</span>
          </h1>
        ) : (
          <h1>
            Category:{" "}
            <span style={{ color: "darkslateblue" }}>Not Selected</span>
          </h1>
        )}
      </div>
      <h2 className={classes.pageTitle}>
        {category} : {decodeURIComponent(FromUnit)} To{" "}
        {decodeURIComponent(ToUnit)}
      </h2>
      <div className={classes.TopSection}>
        <Select
          style={{ fontWeight: 400, fontSize: 16 }}
          rightSection={<IoIosArrowDown />}
          label="From"
          placeholder="Select Unit"
          data={filteredFromSelectData}
          value={Fromvalue}
          disabled={!category}
          onChange={(newValue) => {
            handleFromChange(newValue);
          }}
          classNames={{
            root: classes.selector,
            input: classes.input,
            label: classes.label,
            wrapper: classes.selectwrapper,
          }}
        />
        <div className={classes.exchangeImageContainer}>
          <Image
            src={ICONS.exchange.src}
            alt="exchange"
            width={25}
            height={25}
            onClick={swapSelector}
            title="click"
          />
        </div>

        <Select
          rightSection={<IoIosArrowDown />}
          label="To"
          placeholder="Select Unit"
          data={filteredToSelectData}
          value={Tovalue}
          disabled={!category}
          onChange={(newToValue) => {
            handleToChange(newToValue);
          }}
          classNames={{
            root: classes.selector,
            input: classes.input,
            label: classes.label,
            wrapper: classes.selectwrapper,
          }}
        />
      </div>
      <div>
        <TextInput
          label="Please enter the value"
          disabled={!Fromvalue && !Tovalue}
          type="number"
          classNames={{
            root: classes.selector,
            input: classes.input,
            wrapper: classes.selectwrapper,
            label: classes.label,
          }}
          placeholder="Enter value"
          styles={{
            input: {
              width: "100%",
            },
          }}
          value={inputValue}
          onChange={(event) => {
            const value = parseFloat(event.currentTarget.value);
            setInputValue(value);
            handleConversion(value);
          }}
        />
        <h6 className={classes.resultHeading}>Result</h6>
        <div className={classes.result}>
          <Image
            src={ICONS.resultIcon.src}
            alt="resultIcon"
            width={75}
            height={75}
          />
          <div className={classes.container}>
            <span className={classes.resultvalue}>
              <h4>{result?.toString() ?? "0"}</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;
