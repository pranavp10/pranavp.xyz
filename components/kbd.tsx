import { FC } from "react";

const Kbd: FC<{ text: string }> = ({ text }) => (
  <kbd className="inline-flex items-center border border-dark-white-50 rounded-md px-2 text-sm font-sans font-medium text-dark-white bg-dark-white-50 shadow shadow-dark-white/30">
    {text}
  </kbd>
);

export default Kbd;
