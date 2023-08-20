import { Container } from "@/components/core/core.container";
import { IconTitleCard } from "@/components/core/core.iconTitleCard";
import { Section } from "@/components/core/core.section";
import { Icon } from "@/components/utils/utils.icon";

const Gear = () => (
  <div>
    <Container
      title="My Gear"
      description="This setup that helps me achieve my goals"
    >
      <Section title="Devices">
        <IconTitleCard
          icon={
            <Icon
              name="laptop"
              className={iconClassName}
              gradientName="gradient"
            />
          }
          title="16-inch MacBook Pro(M1 pro 2021)"
        />
        <IconTitleCard
          icon={
            <Icon
              name="monitor"
              className={iconClassName}
              gradientName="gradient"
            />
          }
          title="Dell Professional 24 inches"
        />
        <IconTitleCard
          icon={
            <Icon
              name="keyboard"
              className={iconClassName}
              gradientName="gradient"
            />
          }
          title="Keychron K2 (V2)"
        />
        <IconTitleCard
          icon={
            <Icon
              name="mouse"
              className={iconClassName}
              gradientName="gradient"
            />
          }
          title="Logitech MX Master 3"
        />
        <IconTitleCard
          icon={
            <Icon
              name="headphone"
              className={iconClassName}
              gradientName="gradient"
            />
          }
          title="Sony WH-1000XM3 & AirPods 3"
        />
        <IconTitleCard
          icon={
            <Icon
              name="table"
              className={iconClassName}
              gradientName="gradient"
            />
          }
          title="Featherlite Engineered Wood Slick Table"
        />
        <IconTitleCard
          icon={
            <Icon
              name="stand"
              className={iconClassName}
              gradientName="gradient"
            />
          }
          title="Amazon basics Monitor Stand"
        />
        <IconTitleCard
          icon={
            <Icon
              name="cell"
              className={iconClassName}
              gradientName="gradient"
            />
          }
          title="iphone 11"
        />
      </Section>
    </Container>
  </div>
);

export default Gear;

const iconClassName = `md:border-4 dark:border-zinc-900 border-zinc-100 rounded-xl md:rounded-2xl w-6 h-6 md:w-16 md:h-16 md:p-3`;
