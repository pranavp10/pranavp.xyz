"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const DataThemeElement = () => {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      (theme === "system" ? systemTheme : theme) || "dark"
    );
  }, [theme, systemTheme]);

  return <></>;
};

export default DataThemeElement;
