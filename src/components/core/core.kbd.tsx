import { FC } from "react";

const Kbd: FC<{ text: string }> = ({ text }) => {
  return (
    <kbd className="inline-flex items-center border-2 dark:border-zinc-500 border-zinc-100 rounded-md px-2 text-sm font-sans font-medium text-gray-400 shadow shadow-zinc-400/50">
      {text}
    </kbd>
  );
};
export default Kbd;
