import { Icon } from "@/components/Icon";

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
  <div className="p-4 d-border rounded-md  w-full relative gap-3">
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
    <p className="text-sm text-pretty mt-1 ml-8">{description}</p>
  </div>
);

export default Info;
