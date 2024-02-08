import { FC, ReactNode } from "react";

const IconTitleCard: FC<{
  title: string;
  icon: ReactNode;
  experience?: string;
}> = ({ icon, title }) => (
  <div className="flex gap-6 items-center">
    {icon}
    <p className="font-mono text-sm text-pretty">{title}</p>
  </div>
);

export default IconTitleCard;
