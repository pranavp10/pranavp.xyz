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
  <div className="p-2 border border-primary-white-50 rounded-md w-full relative transition duration-200 ease-in-out gap-3 bg-primary-white-50">
    <div className="flex gap-2 items-center">
      <Icon
        name={iconName}
        className={`w-4 h-4 ${color ? color : "!text-yellow-500"} `}
        gradientName="gradient"
      />
      <div>
        <p className={`${color ? color : "!text-yellow-500"} text-sm`}>
          {title}
        </p>
      </div>
    </div>
    <p className="text-sm text-primary-white-300 text-pretty mt-1 ml-6">
      {description}
    </p>
  </div>
);

export default Info;
