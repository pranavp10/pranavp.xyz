import { FC } from "react";

const Kbd: FC<{ text: string }> = ({ text }) => (
  <kbd className="inline-flex items-center border border-primary-white-50 rounded-md px-2 text-sm font-sans font-medium text-primary-white bg-primary-white-50 shadow shadow-primary-white/30">
    {text}
  </kbd>
);

export default Kbd;
