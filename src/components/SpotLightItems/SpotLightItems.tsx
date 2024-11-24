import "@mantine/spotlight/styles.css";
import { rem } from "@mantine/core";
import { Spotlight, SpotlightActionData } from "@mantine/spotlight";
import {
  IconAspectRatio,
  IconRulerMeasure,
  IconScaleOutline,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { memo } from "react";
import ROUTES from "@/enum/routes";

import { PiTimerDuotone } from "react-icons/pi";
import { TiCloudStorage } from "react-icons/ti";
import { MdCurrencyExchange } from "react-icons/md";
import classes from "./spotLightItem.module.css";
const SpotlightItems = () => {
  const router = useRouter();
  const actions: SpotlightActionData[] = [
    {
      id: "speed",
      label: "Speed",
      description:
        "Convert speed units, e.g., kilometers per hour (km/h) to miles per hour (mph).",
      onClick: () => {
        router.push(ROUTES.SPEED);
        localStorage.setItem("accordionOpened", "Common");
      },
      leftSection: (
        <IconScaleOutline
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
    {
      id: "temperature",
      label: "Temperature",
      description:
        "Convert temperature units, e.g., Celsius (°C) to Fahrenheit (°F) or Kelvin (K).",
      onClick: () => {
        router.push(ROUTES.TEMPERATURE);
        localStorage.setItem("accordionOpened", "Engineering");
      },
      leftSection: (
        <IconRulerMeasure
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
    {
      id: "volume",
      label: "Volume",
      description:
        "Convert volume units, e.g., liters (L) to gallons (gal) or cubic meters (m³).",
      onClick: () => {
        router.push(ROUTES.VOLUME);
        localStorage.setItem("accordionOpened", "Engineering");
      },
      leftSection: (
        <IconAspectRatio
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
    {
      id: "time",
      label: "Time",
      description:
        "Convert time units, e.g., hours (hr) to minutes (min) or days",
      onClick: () => {
        router.push(ROUTES.TIME);
        localStorage.setItem("accordionOpened", "Common");
      },
      leftSection: (
        <PiTimerDuotone style={{ width: rem(24), height: rem(24) }} />
      ),
    },
    {
      id: "storage",
      label: "Storage",
      description:
        "Convert digital storage units, e.g., bytes (B) to megabytes (MB) or gigabytes (GB).",
      onClick: () => {
        router.push(ROUTES.STORAGE);
        localStorage.setItem("accordionOpened", "Computer");
      },
      leftSection: (
        <TiCloudStorage style={{ width: rem(24), height: rem(24) }} />
      ),
    },
    {
      id: "currency",
      label: "Currency",
      description: "Convert currency units, e.g., dollars ($) to yen (¥).",
      onClick: () => {
        router.push(ROUTES.CURRENCY);
        localStorage.setItem("accordionOpened", "Common");
      },
      leftSection: (
        <MdCurrencyExchange style={{ width: rem(24), height: rem(24) }} />
      ),
    },
    {
      id: "force",
      label: "Force",
      description:
        "Convert force units, e.g., newtons (N) to pounds-force (lbf) or dynes (dyn).",
      onClick: () => {
        router.push(ROUTES.FORCE);
        localStorage.setItem("accordionOpened", "Engineering");
      },
      leftSection: (
        <IconAspectRatio
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
  ];
  return (
    <div className={classes.spotLightContainer}>
      <Spotlight
        centered
        styles={{ content: { width: "50%", margin: "auto" } }}
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery={false}
        searchProps={{
          leftSection: (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </>
          ),
          placeholder: "Search...",
        }}
      />
    </div>
  );
};

export default memo(SpotlightItems);
