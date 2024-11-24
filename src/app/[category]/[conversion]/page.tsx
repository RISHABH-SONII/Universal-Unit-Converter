import Conversion from "@/components/pages/conversion/Conversion";
import { generateKeywords } from "@/utils/generateKeywords";
import { Metadata } from "next";
import React from "react";

const page = () => {
  return <Conversion />;
};

export default page;

export function generateMetadata({
  params,
}: {
  params: { category: string; conversion: string };
}): Metadata {
  const { category, conversion } = params;

  const [fromUnit, toUnit] = conversion.split("-to-");

  const title = `Convert ${fromUnit} to ${toUnit} - ${category} Unit Converter | Universal Unit Converter`;
  const description = `Easily convert ${fromUnit} to ${toUnit} in the ${category} category. Get accurate, fast, and user-friendly conversions for ${category} units like ${fromUnit} and ${toUnit} on our online unit converter. Ideal for professionals, students, and anyone looking to convert ${category} units.`;

  return {
    title,
    description,
    keywords: generateKeywords(),
    openGraph: {
      title,
      description,
      url: process.env.NEXT_PUBLIC_LIVE_URL ?? "http://localhost:3000",
      type: "website",
    },
  };
}
