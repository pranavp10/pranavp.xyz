import { FC, ReactNode } from "react";

const NumberList: FC<{ lists?: string[]; children?: ReactNode[] }> = ({
  lists,
  children,
}) => {
  return (
    <ol
      className="relative space-y-2 my-4 ml-5"
      style={{ counterReset: `step` }}
    >
      {lists && (
        <>
          {lists.map((list, index) => {
            return (
              <li
                key={index}
                className={`relative pl-10 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-zinc-700 dark:before:text-zinc-100 before:rounded-md before:shadow-sm before:ring-[3px] before:ring-zinc-100 dark:before:ring-zinc-900
          ${
            index !== lists.length - 1 &&
            `pb-5 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-[3px] after:bg-zinc-100 after:rounded-full dark:after:bg-zinc-900`
          }`}
                style={{ counterIncrement: `step` }}
              >
                <p className="text-zinc-700 dark:text-zinc-300">{list}</p>
              </li>
            );
          })}
        </>
      )}

      {children && (
        <>
          {children.map((a, index) => {
            return (
              <li
                key={index}
                className={`relative pl-10 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-zinc-700 dark:before:text-zinc-100 before:rounded-md before:shadow-sm before:ring-[3px] before:ring-zinc-100 dark:before:ring-zinc-900
          ${
            index !== children.length - 1 &&
            `pb-5 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-[3px] after:bg-zinc-100 after:rounded-full dark:after:bg-zinc-900`
          }`}
                style={{ counterIncrement: `step` }}
              >
                <div className="text-zinc-700 dark:text-zinc-300">{a}</div>
              </li>
            );
          })}
        </>
      )}
    </ol>
  );
};

export default NumberList;
