import Icon from "@/components/icon/icon";

export const CVExperienceCard = ({
  company,
  location,
  descriptions,
  title,
  end,
  start,
  link,
}: {
  company: string;
  location: string;
  title: string;
  descriptions: string[];
  start: string;
  link: string;
  end: string;
}) => {
  return (
    <div className="grid grid-cols-4 gap-y-4 text-sm">
      <p className="text-zinc-400 dark:text-dark-white-300">
        {start} - {end}
      </p>
      <div className="col-span-3">
        <a
          target="_blank"
          href={link}
          className="hover:text-highlight group flex gap-1"
        >
          <p>
            {title} at {company}
          </p>
          <Icon
            name="social-link"
            className="w-2 h-2 group-hover:scale-125 mt-1.5"
          />
        </a>
        <p className="text-zinc-500 dark:text-dark-white-400 tracking-wider text-xs">
          {location}
        </p>
        <ul className="text-zinc-500 dark:text-dark-white-400 tracking-wider grid gap-2.5 mt-3 text-pretty list-disc">
          {descriptions.map((description: string) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
