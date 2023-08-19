import { Footer } from "@/components/footer/footer";
import ThemeSwitch from "@/components/utils/ThemeSwitch";

export default function Home() {
  return (
    <main className="h-screen">
      <ThemeSwitch />
      <Footer />
    </main>
  );
}
