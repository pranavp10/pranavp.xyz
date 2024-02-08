export const ExperienceCard = ({
  company,
  location,
  descriptions,
  title,
  end,
  start,
}: {
  company: string;
  location: string;
  title: string;
  descriptions: string[];
  start: string;
  end: string;
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">
          {company}{" "}
          <span className="dark:bg-dark-white-100 font-normal py-[1px] text-xs ml-1 px-2 rounded-full dark:border-dark-white-50 border dark:text-dark-white-900 text-zinc-500 bg-zinc-100">
            {location}
          </span>
        </p>
        <p className="text-zinc-400 dark:text-dark-white-300 text-xs">
          {start} - {end}
        </p>
      </div>
      <p className="mt-1.2 text-sm font-medium">{title}</p>
      <ul className="text-zinc-500 dark:text-dark-white-400 tracking-wider font-mono text-sm grid gap-2.5 mt-2 text-pretty">
        {descriptions.map((description: string) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </div>
  );
};
