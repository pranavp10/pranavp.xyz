import Link from "next/link";
import Image from "next/image";

const NavBar = () => (
  <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-primary-black py-2">
    <div className="max-w-2xl w-full m-auto flex flex-wrap items-center justify-between">
      <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            width={40}
            height={10}
            alt="pixilated child"
            className="w-auto h-auto"
          />
        </Link>
      </div>
      <ul className="flex items-center gap-2">
        {links.map(({ link, title }) => (
          <li key={link}>
            <Link
              href={link}
              className="text-sm hover:bg-primary-black-link-hover px-3 transition duration-200 ease-in-out rounded-md py-2"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

const links = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Work",
    link: "/work",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Projects",
    link: "/projects",
  },
];

export default NavBar;
