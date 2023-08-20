import { FC, ReactNode } from 'react';

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
                className={`relative pl-10 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-[3px] before:ring-gray-100
          ${
            index !== lists.length - 1 &&
            `pb-5 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-[3px] after:bg-gray-100 after:rounded-full`
          }`}
                style={{ counterIncrement: `step` }}
              >
                <p className="text-slate-700">{list}</p>
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
                className={`relative pl-10 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-[3px] before:ring-gray-100
          ${
            index !== children.length - 1 &&
            `pb-5 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-[3px] after:bg-gray-100 after:rounded-full`
          }`}
                style={{ counterIncrement: `step` }}
              >
                <div className="text-slate-700">{a}</div>
              </li>
            );
          })}
        </>
      )}
    </ol>
  );
};

export default NumberList;
