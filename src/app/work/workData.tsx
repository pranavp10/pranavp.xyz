import { Icon } from "@/components/Icon";
import { JSX } from "react";

type ResumeData = {
  name: string;
  location: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    social: {
      name: string;
      url: string;
      icon: JSX.Element;
    }[];
  };
  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: {
    company: string;
    link: string;
    location: string;
    title: string;
    start: string;
    end: string;
    descriptions: string[];
  }[];
  skills: string[];
};

export const RESUME_DATA: ResumeData = {
  name: "Pranav Patel",
  location: "Bangalore, karnataka, India",
  about:
    "A design-focused Full Stack Engineer skilled in crafting products with a strong eye for design.",
  summary:
    "As a Full Stack Engineer, I've developed products entirely from scratch to production. Currently, I work mostly with TypeScript, React, Next.js, and GraphQL. I have over 4+ years of experience in working remotely with companies all around the world.",
  avatarUrl: "/logo.png",
  personalWebsiteUrl: "https://pranavp.xyz/",
  contact: {
    social: [
      {
        name: "Mail",
        url: "mailto:hello@pranavp.xyz",
        icon: <Icon name="social-mail" className="w-4 h-4" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/pranavp10",
        icon: <Icon name="social-github" className="w-4 h-4" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pranavp10/",
        icon: <Icon name="social-linkedin" className="w-4 h-4" />,
      },
      {
        name: "X",
        url: "https://x.com/thatspranav",
        icon: <Icon name="social-x" className="w-4 h-4" />,
      },
    ],
  },
  education: [
    {
      school: "KLE Institute of Technology",
      degree: "Bachelor's degree, Computer Science",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Atlys",
      link: "https://www.atlys.com",
      location: "Remote",
      title: "Senior Software engineer",
      start: "Aug 2024",
      end: "Present · 1yr",
      descriptions: [
        "Engineered a highly efficient input design system for the Orah Family app, resulting in a 30% increase in user satisfaction and a 20% decrease in development time",
        "Collaborated with the team to implement a robust calendar view and recurring pass feature for a staff and student app, enhanced user accessibility and convenience, leading to a 50% decrease in scheduling conflicts",
        "Crafted Orah nurture extension where users can add pastoral notes form extensions",
        "Developed and collaborated robust pastoral and pastoral summary features for staff, to moderate the student's activity",
      ],
    },
    {
      company: "Orah",
      link: "https://www.orah.com/",
      location: "Remote",
      title: "Software engineer",
      start: "Aug 2022",
      end: "Jul 2024 · 2 yr",
      descriptions: [
        "Engineered a highly efficient input design system for the Orah Family app, resulting in a 30% increase in user satisfaction and a 20% decrease in development time",
        "Collaborated with the team to implement a robust calendar view and recurring pass feature for a staff and student app, enhanced user accessibility and convenience, leading to a 50% decrease in scheduling conflicts",
        "Crafted Orah nurture extension where users can add pastoral notes form extensions",
        "Developed and collaborated robust pastoral and pastoral summary features for staff, to moderate the student's activity",
      ],
    },
    {
      company: "Now&Me",
      link: "https://nowandme.com/",
      location: "Remote",
      title: "Software engineer II",
      start: "Sep 2021",
      end: "Aug 2022 · 1 yr 1 mos",
      descriptions: [
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
        "Implemented therapy session booking feature, revolutionizing communication between therapists and patients, achieved a remarkable 30% month-on-month growth in patient bookings, fostering seamless access to vital mental health services",
        "Built a moderation dashboard that contributed to reducing abusive content by 25%",
      ],
    },
    {
      company: "Quze",
      link: "https://www.quze.co/",
      location: "Remote",
      title: "Frontend Intern -> Frontend Developer",
      start: "May 2020",
      end: "Aug 2021 · 1 yr 4 mos",
      descriptions: [
        "Built the entire user interface (UI) for a Super Learning app, transformed student engagement, course exploration, purchase experiences, and learning progress tracking, resulting in a 40% increase in user engagement and a 25% boost in course sales.",
        "Implemented a user-friendly dashboard for the Super-learning app, tailored explicitly to course creators, enabling seamless course creation and real-time monitoring of student activities via visually interactive representations.",
        "Revamped the course catalogue website by transitioning from CRA to Next.js, seamlessly integrating the new design using the Chakra UI framework, resulting in a 50% increase in page loading speed and a 20% boost in user engagement.",
      ],
    },
    {
      company: "Tulasi Technologies",
      link: "https://www.tulassi.com/",
      location: "Bangalore · On-site",
      title: "Software Engineer",
      start: "Sep 2019",
      end: "Apr 2020 · 8 mos",
      descriptions: [
        "Architected a highly efficient employee management system, revolutionizing attendance, leaves, and medical records automation. Slashing administrative tasks by 60%.",
        "Developed a cutting-edge layer poultry management app to monitor egg production, medication records, and daily activities of chickens and optimized efficiency by 40% and reduced manual record-keeping errors by 90%.",
      ],
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js", "Node.js", "GraphQL"],
} as const;
