import Link from "next/link";
import Image from "next/image";
import Icon from "./icon/icon";
import { NavLinkItem } from "./NavLinkItem";

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

      <div className="flex items-center gap-1 border border-primary-white-100 rounded-full pt-1 pb-1.5 px-1.5 bg-primary-black">
        {links.map(({ link, title }) => (
          <NavLinkItem key={link} link={link} title={title} />
        ))}
      </div>
      <a
        href="http://github.com/pranavp10/pranavp10.com"
        className="text-sm rounded-md px-3 py-1.5 hover:text-primary-white text-primary-white-300"
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
