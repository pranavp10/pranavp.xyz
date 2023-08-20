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
          <h3 className="animate-move-bg bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-[length:400%] bg-clip-text text-2xl text-transparent sm:text-3xl md:text-4xl font-bold ml-2 md:ml-8">
            {title}
          </h3>
        </div>
      </div>
      <div className="ml-4 md:ml-10 space-y-4 md:mt-6">{children}</div>
      {end && (
        <div className="bg-white p-1 rounded-full w-2 h-2 border-2 border-gray-200 -translate-x-[35%]" />
      )}
    </>
  );
};
