export async function HomeSection() {
  const html = await fetch("/sections/home/home.html").then(r => r.text())

  const container = document.createElement("div")
  container.innerHTML = html

  container.querySelector("#go-profile")
    .addEventListener("click", () => {
      window.appRouter.navigate("profile")
    })

  return container
}
