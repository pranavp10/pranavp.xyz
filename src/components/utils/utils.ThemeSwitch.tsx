"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from "./utils.icon";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[26px]" />;
  }

  return (
    <div className="flex space-x-1 border rounded-full p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setTheme(tab.id)}
          className={`${
            theme === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-1 py-0.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {theme === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-black dark:bg-white mix-blend-difference"
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
    label: <Icon name="monitor" className="w-3 h-3" gradientName="gradient" />,
  },
  {
    id: "dark",
    label: <Icon name="moon" className="w-3 h-3" gradientName="gradient" />,
  },
  {
    id: "light",
    label: <Icon name="sun" className="w-3 h-3" gradientName="gradient" />,
  },
];
