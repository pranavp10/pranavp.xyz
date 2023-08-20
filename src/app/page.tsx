import { Container } from "@/components/container/container";
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header/header";
import ThemeSwitch from "@/components/utils/ThemeSwitch";

export default function Home() {
  return (
    <main className="h-screen">
      <Header />
      <Container
        title="Hey, I’m Pranav Patel"
        description="A Self taught Software engineer with 4+ years of experience who likes to build the product from the scratch with the eye on design"
      >
        <p>sdfasfd</p>
      </Container>
      <ThemeSwitch />
      <Footer />
    </main>
  );
}
