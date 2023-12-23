import React from "react";
import { Icon } from "@/components/utils/utils.icon";

export interface JobExperienceProps {
  title: string;
  company: string;
  employmentType: string;
  dateRange: string;
  responsibilities: string[];
  skills: string[];
}

export const JobExperience: React.FC<JobExperienceProps> = ({
  title,
  company,
  employmentType,
  dateRange,
  responsibilities,
}) => (
  <div className="flex gap-4">
    <div>
      <p className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 ">
        {title}
      </p>
      <div>
        <p className="text-neutral-800  dark:text-neutral-300">
          {company} · {employmentType}
        </p>
        <p className="text-sm text-neutral-600  dark:text-neutral-400">
          {dateRange}
        </p>
      </div>
      <div>
        <ul className="list-disc ml-5 flex flex-col gap-2 mt-2 text-neutral-800  dark:text-neutral-400">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
