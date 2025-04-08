export const Quote = ({ quote, author }: { quote: string; author: string }) => (
  <div className="relative px-4 py-10 d-border-t">
    <svg
      width="105"
      height="78"
      className="absolute top-6 left-6 dark:fill-neutral-900 fill-gray-50"
    >
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
    </svg>
    <p className="z-10 relative italic  text-subtle">“{quote}”</p>
    <p className="text-right relative italic  text-subtle">— {author}</p>
  </div>
);

export const HowToDoIt = ({
  lesson,
  steps,
  title,
}: {
  lesson: string;
  steps: string[];
  title?: string;
}) => (
  <div>
    <div className="default-border-r">
      <p className="text-sm py-3 px-7 d-border-b d-border-t font-medium">
        {title ?? "Behind the Scenes"}
      </p>
      <div className="px-7 pb-5">
        <p className="font-medium md:text-lg text-base">{lesson}</p>
        <ul className="list-decimal pt-3 space-y-1.5 ml-3">
          {steps.map((step, i) => (
            <li key={i} className="text-subtle text-sm">
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const quotes = {
  project: {
    lesson:
      "If one works with passion and dedication, a project will eventually succeed.",
    steps: [
      `Choose a project that excites you.`,
      `Make sure it solves a real problem or adds value—that will keep you motivated.`,
      `Work on it every day, even if it's just for 10 minutes.`,
      `Don't be afraid to ask for help.`,
      `Celebrate your progress.`,
    ],
    quote: `Work with Devotion and Passion`,
    author: "Bhagavad Gita",
  },
  home: {
    lesson:
      "If dreams are not fulfilled even after hard work then change the path,  not the principle",
    steps: [
      "Hard work brings success – Stay consistent and dedicated.",
      "Look for the good – A positive mindset helps you grow.",
      "Trust in God – Believe in a higher power for guidance.",
    ],
    quote: `Human is made by his belief. As he believes, so he is.`,
    author: "Bhagavad Gita",
  },
  about: {
    quote: `True personal growth comes when you stay balanced in both success and failure. Challenges are stepping stones to self-improvement`,
    author: "Bhagavad Gita",
  },
  a: {
    quote: `If you really believe in what you’re doing, work hard, take nothing
        personally and if something blocks one route, find another. Never give
        up.`,
    author: "Laurie Notaro",
  },
  b: {
    quote: `You have a right to perform your prescribed duty, but you are not
            entitled to the fruits of actions.`,
    author: "Bhagavad Gita",
  },
  c: {
    quote: `Man is made by his belief. As he believes, so he is.`,
    author: "Bhagavad Gita",
  },
};
