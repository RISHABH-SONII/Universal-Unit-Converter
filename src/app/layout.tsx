import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { MantineProvider } from "@mantine/core";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { generateKeywords } from "@/utils/generateKeywords";
import GoogleTagManager from "@/components/GoogleTagManager/GoogleTagManager";
import Head from "next/head";
import "@mantine/core/styles/global.css";
import "@mantine/core/styles/ScrollArea.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/VisuallyHidden.css";
import "@mantine/core/styles/Paper.css";
import "@mantine/core/styles/Popover.css";
import "@mantine/core/styles/CloseButton.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/Loader.css";
import "@mantine/core/styles/Overlay.css";
import "@mantine/core/styles/ModalBase.css";
import "@mantine/core/styles/Input.css";
import "@mantine/core/styles/InlineInput.css";
import "@mantine/core/styles/Flex.css";
import "@mantine/core/styles/Center.css";
import { IMAGES } from "@/assets/Images";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Universal Unit Converter - Convert Weight, Length, Temperature & More",
  description:
    "Easily convert units across multiple categories like weight, length, temperature, volume, currency, and more with our comprehensive online unit converter. Accurate, fast, and user-friendly conversions for professionals, students, and everyday users.",
  keywords: generateKeywords(),
  openGraph: {
    title: "",
    description:
      "Convert units across categories like weight, length, temperature, volume, currency, and more. Perfect for professionals and students alike.",
    url: process.env.NEXT_PUBLIC_LIVE_URL ?? "http://localhost:3000",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppin.className}`}>
        <MantineProvider
          theme={{
            fontFamily: "Poppins, sans-serif",
            headings: { fontFamily: "GoogleSans, sans-serif" },
          }}
        >
          <Head>
            <link
              rel="preload"
              href={IMAGES.heroImage.src}
              as="image"
              type="image/webp"
            />
          </Head>
          <Header />
          {children}
          <Footer />{" "}
        </MantineProvider>{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: "Top Categories",
              url: process.env.NEXT_PUBLIC_LIVE_URL ?? "http://localhost:3000",
              mainEntity: [
                {
                  "@type": "SiteNavigationElement",
                  name: "Convert Weight",
                  url: `${process.env.NEXT_PUBLIC_LIVE_URL}/weight/kilogram-to-gram`,
                  description:
                    "Easily convert between weight units like kilograms and grams.",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Convert Length",
                  url: `${process.env.NEXT_PUBLIC_LIVE_URL}/length/meter-to-centimeter`,
                  description:
                    "Convert length units such as meters to centimeters.",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Convert Temperature",
                  url: `${process.env.NEXT_PUBLIC_LIVE_URL}/temperature/celsius-to-fahrenheit`,
                  description:
                    "Convert between temperature units, including Celsius and Fahrenheit.",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Convert Currency",
                  url: `${process.env.NEXT_PUBLIC_LIVE_URL}/currency/united-states-dollar-to-euro`,
                  description:
                    "Convert between Currency units, including rupes and US dollars.",
                },
              ],
            }),
          }}
        ></script>
        <GoogleTagManager />
      </body>
    </html>
  );
}
