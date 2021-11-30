import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"

let mobileMenue = new MobileMenu()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 85)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 75)

if (module.hot) {
  module.hot.accept()
}
