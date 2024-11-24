"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { unitsData } from "@/components/UnitList/UnitCategory";
import UnitDescription from "@/components/HeroSection/UnitDescription";

const Conversion = () => {
  const pathname = useParams();
  const router = useRouter();

  const { category, conversion } = pathname;

  const [fromUnit, toUnit] =
    typeof conversion === "string" ? conversion.split("-to-") : ["", ""];

  function capitalizeWords(str: string) {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  function splitter(str: string) {
    if (!str) return "";
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("_");
  }

  const actualCategory = capitalizeWords(category as string) ?? "Weight";
  const finalCategory = splitter(actualCategory);
  const actualFromUnit = capitalizeWords(fromUnit) ?? "Kilogram";
  const actualToUnit = capitalizeWords(toUnit) ?? "Gram";

  const selectData = Object.entries(unitsData).flatMap(([, categoryValue]) =>
    Object.entries(categoryValue.units)
      .filter(([subCategoryKey]) => subCategoryKey.toLowerCase() === category)
      .flatMap(([, subCategoryValue]) =>
        subCategoryValue.units.map((unitType) => ({
          label: unitType,
          value: unitType,
        }))
      )
  );

  const isFromUnitValid = selectData.some(
    (unit) => fromUnit && unit.value.toLowerCase() === fromUnit.toLowerCase()
  );
  const isToUnitValid = selectData.some(
    (unit) => toUnit && unit.value.toLowerCase() === toUnit.toLowerCase()
  );

  const validationData = [
    {
      slug: category,
      convertion: `${fromUnit}-to-${toUnit}`,
    },
  ];

  const urlValidation = validationData.find(
    (item) =>
      item.slug === category && item.convertion === `${fromUnit}-to-${toUnit}`
  );

  useEffect(() => {
    if (!urlValidation || !isFromUnitValid || !isToUnitValid) {
      router.push("/");
    }
  }, [router, urlValidation, isFromUnitValid, isToUnitValid]);

  if (!urlValidation) {
    return null;
  }

  return (
    <>
      <HeroSection
        categoryProp={finalCategory}
        FromUnit={actualFromUnit}
        ToUnit={actualToUnit}
      />
      <UnitDescription categoryKey={finalCategory} />
    </>
  );
};

export default Conversion;
