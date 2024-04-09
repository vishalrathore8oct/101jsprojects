const projectContainer = document.querySelector("#projects-container")
const projectTemplate = document.querySelector("#projects-template")

export const showProjectsContainer = (projects) => {

    if(!projects) {
        return false
    }

    projects.forEach((element) => {
        const {id, title, image, github, vercel} = element

        const projectClone = document.importNode(projectTemplate.content, true)

        projectClone.querySelector(".project-title").textContent = title
        projectClone.querySelector(".project-image").src = image
        projectClone.querySelector(".project-button-github").href = github
        projectClone.querySelector(".project-button-vercel").href = vercel

        projectContainer.append(projectClone)

    })
}