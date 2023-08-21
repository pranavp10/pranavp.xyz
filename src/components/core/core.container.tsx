import { FC, ReactNode } from "react";

export const Container: FC<{
  children: ReactNode;
  title: string;
  description: string;
  subTitle?: string;
  showRightBorder?: boolean;
}> = ({ children, title, description, subTitle, showRightBorder }) => (
  <div className="max-w-3xl m-auto py-20">
    <div className="sm:px-2 px-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 lg:text-6xl lg:relative text-center ">
        {title}
      </h1>
      <p className="mt-4 sm:text-3xl text-center text-natural-100 dark:text-neutral-300">
        {description}
      </p>
    </div>
    <div className="relative space-y-12">
      {showRightBorder && (
        <div className="border-2 border-natural-200 rounded-full absolute top-0 bottom-0" />
      )}
      <div>{children}</div>
    </div>
  </div>
);
