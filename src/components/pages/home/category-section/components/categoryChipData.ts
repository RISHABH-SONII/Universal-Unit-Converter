import { ICONS } from "@/assets/ICONS";
import { StaticImageData } from "next/image";

interface ICategoryChip {
  image: StaticImageData;
  title: string;
}
export const categoryChipData: ICategoryChip[] = [
  {
    image: ICONS.common,
    title: "Common",
  },
  {
    image: ICONS.engineer,
    title: "Engineering",
  },
  {
    image: ICONS.electricity,
    title: "Electricity",
  },
  {
    image: ICONS.laptop,
    title: "Computer",
  },
  {
    image: ICONS.light,
    title: "Light",
  },
  {
    image: ICONS.fluid,
    title: "Fluid",
  },
];
