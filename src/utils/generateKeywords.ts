import { unitConversions } from "@/components/UnitList/UnitCoversionValues";

export function generateKeywords(): string[] {
  const keywords = new Set<string>();

  for (const [category, units] of Object.entries(unitConversions)) {
    keywords.add(category);

    const unitNames = Object.keys(units);

    unitNames.forEach((unit) => keywords.add(unit));

    for (let i = 0; i < unitNames.length; i++) {
      for (let j = i + 1; j < unitNames.length; j++) {
        const fromUnit = unitNames[i];
        const toUnit = unitNames[j];

        keywords.add(`${fromUnit} to ${toUnit}`);
        keywords.add(`${toUnit} to ${fromUnit}`);
      }
    }
  }

  return [...Array.from(keywords)];
}
