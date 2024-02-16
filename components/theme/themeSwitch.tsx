"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Icon from "../icon/icon";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[26px]" />;
  }

  return (
    <div className="flex space-x-1 border dark:border-dark-white-100 rounded-full py-1 px-2 relative">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setTheme(tab.id)}
          className={`${
            theme === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-1 py-0.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {theme === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10  bg-dark-white-100 mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitch;

let tabs = [
  {
    id: "system",
    label: (
      <Icon
        name="monitor"
        className="sm:w-3 sm:h-3 w-5 h-5 sm:p-0 p-0.5"
        gradientName="gradient"
      />
    ),
  },
  {
    id: "dark",
    label: (
      <Icon
        name="moon"
        className="sm:w-3 sm:h-3 w-5 h-5 sm:p-0 p-0.5"
        gradientName="gradient"
      />
    ),
  },
  {
    id: "light",
    label: (
      <Icon
        name="sun"
        className="sm:w-3 sm:h-3 w-5 h-5 sm:p-0 p-0.5"
        gradientName="gradient"
      />
    ),
  },
];
