"use client";
import { GoogleAnalytics } from "@next/third-parties/google";
import React, { useEffect, useState } from "react";

const GoogleTagManager = () => {
  const [first, setFirst] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirst(false);
    }, 2 * 1000);
  }, []);

  if (first) return null;
  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />;
};

export default GoogleTagManager;
