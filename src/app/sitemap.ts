import { unitConversions } from "@/components/UnitList/UnitCoversionValues";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_LIVE_URL ?? "http://localhost:3000";

  const routes: MetadataRoute.Sitemap = [];

  for (const [category, units] of Object.entries(unitConversions)) {
    const unitKeys = Object.keys(units);

    for (let i = 0; i < unitKeys.length; i++) {
      for (let j = i + 1; j < unitKeys.length; j++) {
        const fromUnit = unitKeys[i].toLowerCase();
        const toUnit = unitKeys[j].toLowerCase();

        routes.push({
          url: `${baseUrl}/${category.toLowerCase()}/${fromUnit}-to-${toUnit}`,
          lastModified: new Date(),
        });

        routes.push({
          url: `${baseUrl}/${category.toLowerCase()}/${toUnit}-to-${fromUnit}`,
          lastModified: new Date(),
        });
      }
    }
  }

  return [...routes, { url: baseUrl, lastModified: new Date() }];
}
