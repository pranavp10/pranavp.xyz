import Icon from "@/components/icon/icon";
import Link from "next/link";

const BasicCard = ({
  title,
  description,
  iconName,
  link,
}: {
  title: string;
  description: string;
  iconName: string;
  link: string;
}) => (
  <Link
    href={link}
    className="p-3 border border-primary-white-50 rounded-xl w-full relative hover:bg-primary-white-50 transition duration-200 ease-in-out flex items-center gap-3"
  >
    <div className="h-12 w-12 bg-primary-white-50 rounded-md flex justify-center items-center flex-shrink-0">
      <Icon name={iconName} className="w-6 h-6" gradientName="gradient" />
    </div>
    <div>
      <p className="text-sm text-pretty">{title}</p>
      <p className="text-sm text-primary-white-300 text-pretty">
        {description}
      </p>
    </div>
  </Link>
);

export default BasicCard;
