import Link from "next/link";
import Image from "next/image";
import Icon from "./icon/icon";
import NavBarLinkItem from "./navBarLinkItem";

const NavBar = () => (
  <nav className="sticky top-4 z-10">
    <div className="max-w-2xl w-full m-auto flex flex-wrap items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          width={40}
          height={10}
          alt="pixilated child"
          className="w-11 h-11"
        />
      </Link>

      <div className="flex items-center gap-1 border dark:border-dark-white-100 rounded-full pt-1 pb-1.5 px-1.5 bg-white dark:bg-primary-black border-zinc-200">
        {links.map(({ link, title }) => (
          <NavBarLinkItem key={link} link={link} title={title} />
        ))}
      </div>
      <a
        href="http://github.com/pranavp10/portfolio"
        className="text-sm rounded-md px-3 py-1.5 dark:hover:text-dark-white-900 text-zinc-600 hover:text-zinc-900 dark:text-dark-white-300"
      >
        <p className="sr-only">Github</p>
        <Icon name="social-github" className="w-5 h-5" />
      </a>
    </div>
  </nav>
);

const links = [
  {
    title: "About",
    link: "/about",
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
