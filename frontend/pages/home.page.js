import { HeaderSection } from "../sections/header/header.js";
import { FooterSection } from "../sections/footer/footer.js";
import { HeroSection } from "../sections/hero/hero.js";
import { FeaturesSection } from "../sections/features/features.js";
import { ExtrasHomeSection } from "../sections/extras-home/extras-home.js";
import { AboutSection } from "../sections/about/about.js";
import { ProfilePage } from "./profile.page.js";

export async function HomePage() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  // Header
  const header = await HeaderSection();
  document.getElementById("header").innerHTML = "";
  document.getElementById("header").appendChild(header);

  // Sections
  app.appendChild(await HeroSection());
  app.appendChild(await ProfilePage());
  // app.appendChild(await AboutSection());
  app.appendChild(await FeaturesSection());
  app.appendChild(await ExtrasHomeSection());

  // Footer
  app.appendChild(await FooterSection());
}
