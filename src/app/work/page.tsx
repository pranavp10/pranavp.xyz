import { JobExperienceProps, JobExperience } from "./component/JobExperience";

const Work = () => {
  return (
    <div className="max-w-3xl m-auto py-10">
      <div className="sm:px-2 px-4">
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
          Pranav Patel
        </h1>
        <p className="mt-4 text-neutral-600  dark:text-neutral-400">
          Software Engineer | Open Source Contributor | Storyteller | Software
          Consultant | ask any help for React, Next-js, and tailwind css
        </p>
        <div className="relative space-y-4 mt-6">
          <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Experience
          </p>
          {experienceList.map((experience: JobExperienceProps) => (
            <JobExperience {...experience} key={experience.company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

const experienceList: JobExperienceProps[] = [
  {
    title: "Software Engineer II",
    company: "Orah",
    employmentType: "Full Time (Remote)",
    dateRange: "Aug 2022 - Present",
    responsibilities: [
      "Engineered a highly efficient input design system for the Orah Family app, resulting in a 30% increase in user satisfaction and a 20% decrease in development time",
      "Collaborated with the team to implement a robust calendar view and recurring pass feature for a staff and student app, enhanced user accessibility and convenience, leading to a 50% decrease in scheduling conflicts",
      "Crafted Orah nurture extension where users can add pastoral notes from extensions",
      "Developed and collaborated on robust pastoral and pastoral summary features for staff, to moderate the student's activity",
    ],
    skills: [],
  },
  {
    title: "Software Engineer II",
    company: "Now&Me",
    employmentType: "Full-time (Remote)",
    dateRange: "Sep 2021 - Aug 2022 · 1 yr",
    responsibilities: [
      "Engineered a comprehensive design system for the entire Now&Me app. Streamlined UI components, resulting in a 40% reduction in development time and improved consistency across the app",
      "Implemented therapy session booking feature, revolutionizing communication between therapists and patients, achieved a remarkable 30% month-on-month growth in patient bookings, fostering seamless access to vital mental health services",
      "Built a moderation dashboard that contributed to reducing abusive content by 25%",
    ],
    skills: [
      "Stripe (Software)",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Quze",
    employmentType: "Full-time (Remote)",
    dateRange: "Sep 2020 - Aug 2021 · 1 yr",
    responsibilities: [
      "Built the entire user interface (UI) for a Super Learning app, transformed student engagement, course exploration, purchase experiences, and learning progress tracking, resulting in a 40% increase in user engagement and a 25% boost in course sales.",
      "Implemented a user-friendly dashboard for the Super-learning app, tailored explicitly to course creators, enabling seamless course creation and real-time monitoring of student activities via visually interactive representations.",
    ],
    skills: [
      "Stripe (Software)",
      "GraphQL",
      "PostgreSQL",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Frontend Intern",
    company: "Quze",
    employmentType: "Full-time (Remote)",
    dateRange: "May 2020 - Aug 2020 · 4 mos",
    responsibilities: [
      "Revamped the course catalogue website by transitioning from CRA to Next.js, seamlessly integrating the new design using the Chakra UI framework, resulting in a 50% increase in page loading speed and a 20% boost in user engagement.",
    ],
    skills: [
      "Figma (Software)",
      "Chakra UI",
      "Next.js",
      "React.js",
      "REST APIs",
    ],
  },
  {
    title: "Software Engineer",
    company: "Tulasi Technologies",
    employmentType: "Full-time Bangalore · On-site",
    dateRange: "Sep 2019 - Apr 2020 · 8 mos",
    responsibilities: [
      "Architected a highly efficient employee management system, revolutionizing attendance, leaves, and medical records automation. Slashing administrative tasks by 60%.",
      "Developed a cutting-edge layer poultry management app to monitor egg production, medication records, and daily activities of chickens and optimized efficiency by 40% and reduced manual record-keeping errors by 90%.",
    ],
    skills: ["Express.js", "React.js", "Node.js", "React Native", "MySQL"],
  },
];
