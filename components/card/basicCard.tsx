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
    className=" p-3 border dark:border-dark-white-50 rounded-xl w-full relative dark:hover:bg-dark-white-50 transition duration-200 ease-in-out flex items-center gap-3 hover:bg-zinc-100/50 group"
  >
    <div className="h-12 w-12 bg-zinc-100 dark:bg-dark-white-50 rounded-md flex justify-center items-center flex-shrink-0">
      <Icon
        name={iconName}
        className="w-6 h-6 group-hover:text-highlight text-primary-gray-500"
      />
    </div>
    <div>
      <p className="text-sm text-pretty">{title}</p>
      <p className="text-sm text-zinc-500 dark:text-dark-white-300 text-pretty">
        {description}
      </p>
    </div>
  </Link>
);

export default BasicCard;
