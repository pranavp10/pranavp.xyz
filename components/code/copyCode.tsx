"use client";

import { FC, useState } from "react";
import Icon from "../icon/icon";

const CopyCode: FC<{
  textToCopy: string;
}> = ({ textToCopy }) => {
  const [copy, setCopy] = useState(false);
  return (
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
  );
};

export default CopyCode;
