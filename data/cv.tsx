import Icon from "@/components/icon/icon";

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
      displayName: string;
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

export const CV_DATA: ResumeData = {
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
        name: "Website",
        url: "pranavp.xyz",
        icon: <Icon name="social-mail" className="w-4 h-4" />,
        displayName: "pranavp.xyz",
      },

      {
        name: "GitHub",
        url: "https://github.com/pranavp10",
        icon: <Icon name="social-github" className="w-4 h-4" />,
        displayName: "pranavp10",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pranavp10/",
        icon: <Icon name="social-linkedin" className="w-4 h-4" />,
        displayName: "pranavp10",
      },
      {
        name: "Email",
        url: "mailto:hello@pranavp.xyz",
        icon: <Icon name="social-mail" className="w-4 h-4" />,
        displayName: "hello@pranavp.xyz",
      },
      {
        name: "Twitter",
        url: "https://x.com/thatspranav",
        icon: <Icon name="social-x" className="w-4 h-4" />,
        displayName: "thatspranav",
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
      company: "Orah",
      link: "https://www.orah.com/",
      location: "Remote",
      title: "Software engineer",
      start: "2024",
      end: "Now",
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
      title: "Software engineer",
      start: "2021",
      end: "2022",
      descriptions: [
        "Engineered a comprehensive design system for the entire now&me app. Streamlined UI components, resulting in a 40% reduction in development time and improved consistency across the app. (Skill: Yarn Workspace, React, Tailwind CSS, Framer Motion)",
        "Implemented therapy session booking feature, revolutionizing communication between therapists and patients, achieved a remarkable 30% month-on-month growth in patient bookings, fostering seamless access to vital mental health services",
        "Built a moderation dashboard that contributed to reducing abusive content by 25%",
      ],
    },
    {
      company: "Quze",
      link: "https://www.quze.co/",
      location: "Remote",
      title: "Frontend Developer",
      start: "2020",
      end: "2021",
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
      start: "2019",
      end: "2020",
      descriptions: [
        "Architected a highly efficient employee management system, revolutionizing attendance, leaves, and medical records automation. Slashing administrative tasks by 60%.",
        "Developed a cutting-edge layer poultry management app to monitor egg production, medication records, and daily activities of chickens and optimized efficiency by 40% and reduced manual record-keeping errors by 90%.",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "GraphQL",
  ],
} as const;
