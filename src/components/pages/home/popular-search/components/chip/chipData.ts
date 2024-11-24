import ROUTES from "@/enum/routes";

interface IPopularSearch {
  title: string;
  link: string;
}

export const chipData: IPopularSearch[] = [
  {
    title: "Weight",
    link: ROUTES.WEIGHT,
  },
  {
    title: "Length",
    link: ROUTES.LENGTH,
  },
  {
    title: "Currency",
    link: ROUTES.CURRENCY,
  },
  {
    title: "Time",
    link: ROUTES.TIME,
  },
  {
    title: "Storage",
    link: ROUTES.STORAGE,
  },
  {
    title: "Force",
    link: ROUTES.FORCE,
  },
  {
    title: "Volume",
    link: ROUTES.VOLUME,
  },
  {
    title: "Area",
    link: ROUTES.AREA,
  },
  {
    title: "Pressure",
    link: ROUTES.PRESSURE,
  },
  {
    title: "Speed",
    link: ROUTES.SPEED,
  },
];
