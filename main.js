import projects from "./api/projects.json"
import { showProjectsContainer } from "./projectCards"


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach((element) => {
    element.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    })
})

showProjectsContainer(projects)
