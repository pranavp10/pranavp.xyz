import { FC, ReactNode } from "react";

export const IconTitleCard: FC<{
  title?: string;
  description?: string;
  children?: ReactNode;
  icon?: ReactNode;
  experience?: string;
}> = ({ description, icon, title, children }) => (
  <div className="border-gray-50 rounded-xl md:rounded-[20px] relative sm:px-3 sm:py-2">
    {title && icon && (
      <div className="flex gap-2.5 md:gap-4 items-center">
        {icon}
        <p className="font-display md:text-3xl font-medium md:font-extrabold tracking-tight">
          {title}
        </p>
      </div>
    )}
    {description && (
      <p className="mt-1 md:mt-4 md:text-lg tracking-tight text-slate-700">
        {description}
      </p>
    )}
    {children}
  </div>
);
