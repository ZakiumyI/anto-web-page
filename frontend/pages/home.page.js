import { HeaderSection } from "../sections/header/header.js";
import { FooterSection } from "../sections/footer/footer.js";
import { HeroSection } from "../sections/hero/hero.js";
import { FeaturesSection } from "../sections/features/features.js";

export async function HomePage() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  // Header
  const header = await HeaderSection();
  document.getElementById("header").innerHTML = "";
  document.getElementById("header").appendChild(header);

  // Sections
  app.appendChild(await HeroSection());
  app.appendChild(await FeaturesSection());

  // Footer
  app.appendChild(await FooterSection());
}
