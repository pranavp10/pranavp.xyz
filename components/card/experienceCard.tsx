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
          <span className="bg-primary-white-100 font-normal py-[1px] text-xs ml-1 px-2 rounded-full border-primary-white-50 border">
            {location}
          </span>
        </p>
        <p className="text-primary-white-300 text-xs">
          {start} - {end}
        </p>
      </div>
      <p className="mt-1.2 text-sm">{title}</p>
      <ul className="text-primary-white-400 tracking-wider font-mono text-[13px] grid gap-2.5 mt-2 text-pretty">
        {descriptions.map((description: string) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </div>
  );
};
