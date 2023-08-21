"use client";

import { FC } from "react";
import { toast } from "sonner";
import { Icon } from "../utils/utils.icon";
import Kbd from "./core.kbd";

export const TextCommand: FC<{ cmd: string }> = ({ cmd }) => (
  <p>
    Enter the text {`  `}
    <span
      onClick={() => {
        navigator.clipboard.writeText(cmd);
        toast("Copied to Clipboard", {
          icon: (
            <Icon
              name="clipboard-text"
              className="w-5 h-5"
              gradientName="gradient"
            />
          ),
        });
      }}
      className="inline-flex items-center border-2 dark:border-zinc-500 border-zinc-100 rounded-md px-2 text-sm font-sans font-medium text-gray-400 shadow shadow-zinc-400/50 cursor-pointer"
    >
      {cmd}
    </span>
    {` `}
    in prompt
    {` `}and press
    {` `}
    <Kbd text="⏎ (Enter)" />
  </p>
);
