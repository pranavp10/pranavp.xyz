"use client";

import { FC, ReactNode, useState } from "react";
import Icon from "./icon/icon";

const Window: FC<{
  children: ReactNode;
  height?: string;
  title?: string;
  textToCopy?: string;
}> = ({ children, height = "auto", title, textToCopy }) => {
  const [copy, setCopy] = useState(false);
  return (
    <div className="rounded-lg border border-primary-white-50 relative">
      <div className="flex justify-between items-center border-b border-primary-white-50 px-4 py-2 bg-primary-white-50 rounded-t-lg">
        <span className="text-primary-white-300 text-pretty font-mono text-sm">
          {title}
        </span>
        {textToCopy && (
          <div className="flex justify-end items-center">
            <button
              onClick={() => {
                navigator.clipboard.writeText(textToCopy);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 1000);
              }}
            >
              {copy ? (
                <Icon name="check" className="w-4 h-4" />
              ) : (
                <Icon name="copy" className="w-4 h-4" />
              )}
            </button>
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
