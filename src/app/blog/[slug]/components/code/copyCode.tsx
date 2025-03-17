"use client";

import { Icon } from "@/components/Icon";
import { FC, useState } from "react";

const CopyCode: FC<{
  textToCopy: string;
}> = ({ textToCopy }) => {
  const [copy, setCopy] = useState(false);
  return (
    <button
      className="text-subtle"
      onClick={() => {
        navigator.clipboard.writeText(textToCopy);
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 1000);
      }}
    >
      <Icon name={copy ? "check" : "copy"} className="w-4 h-4" />
    </button>
  );
};

export default CopyCode;
