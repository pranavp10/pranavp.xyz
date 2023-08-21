"use client";

import { FC, ReactNode, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { toast } from "sonner";
import { Icon } from "../utils/utils.icon";

const Window: FC<{
  children: ReactNode;
  copyClipBoard?: () => void;
  height?: string;
  title?: string;
}> = ({ children, copyClipBoard, height, title }) => {
  const [expanded, setExpanded] = useState<string>(height ? height : `auto`);
  const [copy, setCopy] = useState(false);
  return (
    <div className="border-4 border-zinc-100 dark:border-zinc-900 rounded-xl relative">
      <div className="flex justify-between items-center border-b-4 border-zinc-100 dark:border-zinc-900 px-4 py-2">
        <span className="">{title}</span>
        {copyClipBoard && (
          <div className="flex justify-end items-center">
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                copyClipBoard();
                toast(
                  <div>
                    <Icon name="clipboard-text" className="w-5 h-5" />
                  </div>
                );
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              {copy ? (
                <Icon name="clipboard-check" className="w-5 h-5" />
              ) : (
                <Icon name="clipboard-text" className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        )}
      </div>
      <div
        className="p-4 overflow-auto no-scrollbar"
        style={{ maxHeight: height }}
      >
        {children}
      </div>
    </div>
  );
};

export default Window;
