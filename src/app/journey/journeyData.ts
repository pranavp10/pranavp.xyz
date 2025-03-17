export type JourneyEvent = {
  title: string;
  description: string;
  imageURl?: string;
  url?: string;
};

export type JourneyYear = {
  year: number;
  events: JourneyEvent[];
};

export const journeyData: JourneyYear[] = [
  {
    year: 2025,
    events: [
      {
        title: "Joined Atlys (Visa Company)",
        description:
          "I gained knowledge about design systems, microservices architecture(Nats), Next.js, Tailwind CSS, Stripe, and React Native.",
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        title: "Revamp Protfolio",
        description:
          "Revamped my portfolio with a new design, and as a developer, grasping the design aspect was challenging. However, I successfully navigated it, giving my portfolio a fresh and appealing look.",
        imageURl: "/journey/portfolio.png",
        url: "https://pranavp.xyz/",
      },
      {
        title: "Invoice Generator",
        description:
          "Developed an invoice generator that I utilize monthly for sending invoices to my current employer.",
        imageURl: "/journey/invoice-generator.jpeg",
        url: "https://invoice-generator.prolab.sh",
      },
      {
        title: "Compress video",
        description:
          "Created a tool utilizing FFmpeg and web assembly to compress videos.",
        imageURl: "/journey/compress.jpeg",
        url: "https://videocompress.prolab.sh",
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        title: "AI detective (First Side Product)",
        description: "I developed a product that aggregates various AI tools.",
        imageURl: "/journey/aidetective.png",
        url: "https://www.aidetective.xyz/",
      },
    ],
  },
  {
    year: 2022,
    events: [
      {
        title: "Joined Orah (Student management)",
        description:
          "I gained knowledge about design systems, microservices architecture(Nats), Next.js, Tailwind CSS, Stripe, and React Native.",
      },
      {
        title: "Built NFT game",
        description:
          "I met an awesome founder who was not only a great manager but also an exceptional person. It was a pleasure working with someone so skilled and personable. During our collaboration, I had the opportunity to learn about Mud and Phaser.",
      },
    ],
  },
  {
    year: 2021,
    events: [
      {
        title: "Joined Now&me (Mental health)",
        description:
          "I gained knowledge about design systems, microservices architecture, Next.js, Tailwind CSS, Stripe, and React Native.",
      },
      {
        title: "My initial freelancing job.",
        description:
          "I freelanced for a London-based company, using AI to aggregate news content.",
      },
    ],
  },
  {
    year: 2020,
    events: [
      {
        title: "Joined Quze",
        description:
          "I'm fortunate to be part of the company, especially grateful to the founder who helped me enhance my skills with the latest technologies. This is when I started working with Next.js, Tailwind, and Chakra UI.",
      },
      {
        title: "Lost my first job",
        description:
          "I lost my initial job because of the COVID-19 impact. While the virus took away my job, I'm grateful it didn't affect my life, and for that, I consider myself fortunate.",
      },
      {
        title: "COVID-19",
        description:
          "I moved back to my hometown due to the COVID-19 pandemic.",
      },
    ],
  },
  {
    year: 2019,
    events: [
      {
        title: "Joined my first company",
        description:
          "I started my initial engineering position, involving work with PHP, React.js, React Native, and MySQL.",
      },
      {
        title: "Moved to Bangalore",
        description:
          "I began my first engineering job, where I work with PHP, React.js, React Native, and MySQL.",
      },
      {
        title: "Graduated from university",
        description:
          "Summing up four years of my university: learned mainly discipline, struggled with a failed programming lab in the first year, managed to complete three years without scoring above 60%. However, I cracked an interview and secured a job offer. P.S.: I feel I didn't make the most of my four years in engineering to acquire skills the industry values.",
      },
    ],
  },
  {
    year: 2015,
    events: [
      {
        title: "Bachelor of Engineering in Computer Science",
        description:
          "I consider myself extremely fortunate to have the opportunity to study Computer Engineering.",
      },
    ],
  },
  {
    year: 2013,
    events: [
      {
        title: "I got my first smartphone when I was 16.",
        description:
          "I received my first smartphone, a Canvas HD, at the age of 16. Curiosity led me to explore touch functionality, and I discovered the Greenify app, aiming to boost screen time by hibernating unused apps. Unfortunately, it required Root Access. While researching rooting, I found a custom ROM and stumbled upon GitHub's open-source Android OS. This sparked my interest in pursuing computer science as an engineering course.",
      },
    ],
  },
  {
    year: 1997,
    events: [
      {
        title: "Born",
        description: "on 25th of February.",
      },
    ],
  },
];
