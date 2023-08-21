import { Container } from "@/components/core/core.container";
import { IconTitleCard } from "@/components/core/core.iconTitleCard";
import NumberList from "@/components/core/core.numberList";
import { Section } from "@/components/core/core.section";
import { Icon } from "@/components/utils/utils.icon";

const Gear = () => (
  <Container
    title="My Gear"
    description="This setup that helps me achieve my goals"
  >
    <div className="pt-20 pb-16 sm:px-2 px-4 relative">
      <Section title="Devices">
        {gears.map((gear) => (
          <IconTitleCard
            key={gear.title}
            icon={
              <Icon
                name={gear.iconsName}
                className={iconClassName}
                gradientName="gradient"
              />
            }
            title={gear.title}
          />
        ))}
      </Section>
      <div className="mt-4 sm:mt-6">
        <Section title="Software and Apps">
          <IconTitleCard
            icon={
              <Icon
                name="coding"
                className={iconClassName}
                gradientName="gradient"
              />
            }
            title="Coding Tools"
          >
            <NumberList>
              {codingApps.map((app) => (
                <a target="_blank" key={app.href} href={app.href}>
                  {app.title}
                </a>
              ))}
            </NumberList>
          </IconTitleCard>
          <IconTitleCard
            icon={
              <Icon
                name="box"
                className={iconClassName}
                gradientName="gradient"
              />
            }
            title="Web Extensions"
          >
            <NumberList>
              {browserExtensions.map((extension) => (
                <a target="_blank" key={extension.href} href={extension.href}>
                  {extension.title}
                </a>
              ))}
            </NumberList>
          </IconTitleCard>
          <IconTitleCard
            icon={
              <Icon
                name="laptop"
                className={iconClassName}
                gradientName="gradient"
              />
            }
            title="Softwares"
          >
            <NumberList>
              {softwares.map((software) => (
                <a target="_blank" key={software.href} href={software.href}>
                  {software.title}
                </a>
              ))}
            </NumberList>
          </IconTitleCard>
        </Section>
      </div>
    </div>
  </Container>
);

export default Gear;

const iconClassName = `border-2 md:border-4 dark:border-zinc-900 border-zinc-100 rounded-lg md:rounded-2xl w-9 h-9 md:w-16 md:h-16 md:p-3 p-1.5`;

const gears = [
  {
    iconsName: "laptop",
    title: "16-inch MacBook Pro(M1 pro 2021)",
  },
  {
    iconsName: "monitor",
    title: "Dell Professional 24 inches",
  },
  {
    iconsName: "keyboard",
    title: "Keychron K2 (V2)",
  },
  {
    iconsName: "mouse",
    title: "Logitech MX Master 3",
  },
  {
    iconsName: "headphone",
    title: "Sony WH-1000XM3 & AirPods 3",
  },
  {
    iconsName: "table",
    title: "Featherlite Engineered Wood Slick Table",
  },
  {
    iconsName: "stand",
    title: "Amazon basics Monitor Stand",
  },
  {
    iconsName: "cell",
    title: "iphone 11",
  },
];

const codingApps = [
  { href: `/vscode-setup`, title: `VS code` },
  { href: `https://developer.apple.com/xcode/`, title: `Xcode` },
  { href: `https://developer.android.com/studio`, title: `Android studio` },
  { href: `https://iterm2.com/`, title: `iterm2` },
  { href: `https://www.warp.dev/`, title: `wrap` },
  { href: `https://www.docker.com/`, title: `docker` },
  { href: `https://www.sublimemerge.com/`, title: `sublime merge` },
];

const softwares = [
  { href: `https://bitwarden.com/`, title: `Bitwarden` },
  { href: `https://arc.net/`, title: `Arc` },
  { href: `https://discord.com/`, title: `Discord` },
  { href: `https://www.google.com/intl/en_in/chrome/`, title: `Google Chrome` },
  { href: `https://maccy.app/`, title: `Maccy` },
  { href: `https://rectangleapp.com/`, title: `Rectangle` },
  { href: `https://obsidian.md/`, title: `Obsidiane` },
  { href: `https://freemacsoft.net/appcleaner/`, title: `AppCleaner` },
  {
    href: `https://github.com/MonitorControl/MonitorControl#readme`,
    title: `Monitor control`,
  },
  { href: `https://www.videolan.org/vlc/`, title: `VLC` },
  { href: `https://bjango.com/mac/istatmenus/`, title: `IStat Menu` },
];
const browserExtensions = [
  {
    href: `https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb`,
    title: `Bitwaredn`,
  },
  {
    href: `https://daily.dev/`,
    title: `daily.dev`,
  },
  {
    href: `https://www.grammarly.com/`,
    title: `Grammarly`,
  },
  {
    href: `https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi`,
    title: `React Developer Tools`,
  },
  {
    href: `https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm`,
    title: `uBlock Origin`,
  },
  {
    href: `https://chrome.google.com/webstore/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk`,
    title: `Video speed controller`,
  },
  {
    href: `https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh`,
    title: `Window Resizer`,
  },
];
