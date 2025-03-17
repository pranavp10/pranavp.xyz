import Icon from "@/components/icon/icon";

const Info = ({
  title,
  description,
  iconName,
  color,
}: {
  title: string;
  description: string;
  iconName: string;
  color: string;
}) => (
  <div className="p-4 border dark:border-dark-white-50 rounded-2xl w-full relative transition duration-200 ease-in-out gap-3 bg-dark-white-50 mt-4">
    <div className="flex gap-2 items-center">
      <Icon
        name={iconName}
        className={`w-6 h-6 ${color ? color : "!text-yellow-500"} `}
        gradientName="gradient"
      />
      <div>
        <p className={`${color ? color : "!text-yellow-500"} text-sm`}>
          {title}
        </p>
      </div>
    </div>
    <p className="text-sm text-zinc-500 dark:text-dark-white-300 text-pretty mt-1 ml-8">
      {description}
    </p>
  </div>
);

export default Info;
