import { HomeSection } from "../sections/home/home.section.js"
import { ProfileSection } from "../sections/profile/profile.section.js"

const app = document.getElementById("app")

const routes = {
  home: HomeSection,
  profile: ProfileSection
}

async function navigate(route) {
  app.innerHTML = ""

  const section = await routes[route]()
  app.appendChild(section)
}

window.appRouter = { navigate }

// primera carga
navigate("home")
