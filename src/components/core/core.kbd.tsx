import { FC } from 'react';

const Kbd: FC<{ text: string }> = ({ text }) => {
  return (
    <kbd className="inline-flex items-center border-2 border-gray-100 rounded-md px-2 text-sm font-sans font-medium text-gray-400 shadow shadow-gray-400/50">
      {text}
    </kbd>
  );
};
export default Kbd;
