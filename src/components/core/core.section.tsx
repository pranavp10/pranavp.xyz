import { FC, ReactNode } from "react";

export const Section: FC<{
  title: string;
  children: ReactNode;
  end?: boolean;
  start?: boolean;
}> = ({ title, children, end, start }) => {
  return (
    <>
      <div className="flex items-center">
        {start && (
          <div className="bg-white p-1 rounded-full w-2 h-2 border-2 border-gray-200 -translate-x-[35%]" />
        )}
        <div>
          <h3 className="animate-move-bg bg-gradient-to-r dark:text-[#fafafa] font-medium">
            {title}
          </h3>
        </div>
      </div>
      {children}
      {end && (
        <div className="bg-white p-1 rounded-full w-2 h-2 border-2 border-gray-200 -translate-x-[35%]" />
      )}
    </>
  );
};
