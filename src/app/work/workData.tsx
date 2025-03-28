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
    "Software Design and Engineering, I've developed products entirely from scratch to production. I have over 5+ years of experience in working remotely with companies all around the world.",
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
      location: "Delhi · On-site",
      title: "Senior Software engineer",
      start: "Aug 2024",
      end: "Present · 1yr",
      descriptions: [
        "Integrated ML models for passport auto-capture and face auto-capture, reducing visa rejections based on embassy requirements.",
        "Designed and built the Co-Traveler feature from scratch, increasing group travel bookings by 30%.",
        "Developed real-time document sharing, enabling seamless uploads and updates for co-travelers.",
        "Created SEO-optimized country landing pages, reducing drop rates by 50% and improving mobile performance.",
        "New funnel for ESTA Visa application funnel, boosting revenue by 12%.",
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
        "Built an efficient input design system for the Orah Family app, increasing user satisfaction by 30% and reducing development time by 20%.",
        "Developed the Orah Nurture extension, enabling users to add pastoral notes seamlessly.",
        "Implemented a robust calendar view and recurring pass feature for a staff and student app, improving accessibility and reducing scheduling conflicts by 50%.",
        "Designed and developed pastoral and pastoral summary features for staff, enhancing student activity moderation",
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
        "Designed and implemented a comprehensive design system for the Now&Me app, streamlining UI components, improving consistency, and reducing development time by 40%.",
        "Developed a therapy session booking feature, streamlining therapist-patient communication and driving a 30% month-on-month increase in bookings, improving access to mental health services.",
        "Developed an AI-powered moderation dashboard, reducing abusive content by 25% and enhancing platform safety.",
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
        "Migrated the course catalog website from CRA to Next.js, enhancing SEO, mobile performance, and page load speed by 50% with a seamlessly integrated new design.",
        "Developed a user-friendly creator dashboard for the Super-Learning app, enabling seamless course creation and real-time student activity monitoring with interactive visual insights.",
        "Designed and developed the student-facing UI for the Super-Learning app, optimizing course exploration, purchase flow, and progress tracking, resulting in a 40% increase in engagement and a 25% rise in course sales.",
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
        "Designed and implemented an employee management system, automating attendance, leave tracking, and medical records, reducing administrative workload by 60%.",
        "Built a poultry management app to track egg production, medication, and daily activities, improving operational efficiency by 40% and reducing manual record-keeping errors by 90%.",
      ],
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js", "Node.js", "GraphQL"],
} as const;
