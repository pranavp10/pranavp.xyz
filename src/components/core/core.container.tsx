import { FC, ReactNode } from "react";

export const Container: FC<{
  children: ReactNode;
  title: string;
  description: string;
  subTitle?: string;
  showRightBorder?: boolean;
}> = ({ children, title, description, subTitle, showRightBorder }) => (
  <div className="max-w-2xl m-auto py-14">
    <div className="px-4">
      <h1 className="text-xl font-medium text-neutral-900 dark:text-[#fafafa] lg:relative">
        {title}
      </h1>
      <p className="mt-3 text-natural-100 dark:text-[#fafafaa3]">
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
