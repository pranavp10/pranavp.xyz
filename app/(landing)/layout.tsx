import { IconsSprite } from "@/components/icon/iconsSprite";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme/themeProvider";
import DataThemeElement from "@/components/theme/dataThemeElement";
import NavBar from "@/components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <DataThemeElement />
    <div className="px-4 py-2">
      <NavBar />
      {children}
      <Footer />
      <IconsSprite />
    </div>
  </ThemeProvider>
);

export default Layout;
