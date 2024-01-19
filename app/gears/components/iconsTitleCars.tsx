import { FC, ReactNode } from "react";

const IconTitleCard: FC<{
  title: string;
  icon: ReactNode;
  experience?: string;
}> = ({ icon, title }) => (
  <div className="border-primary-white-50">
    <div className="flex gap-6 items-center">
      {icon}
      <p className="font-mono text-sm text-pretty">{title}</p>
    </div>
  </div>
);

export default IconTitleCard;
