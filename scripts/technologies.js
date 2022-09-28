import { getTechnologies, setTechnology } from "./database.js";

const techs = getTechnologies()

document.addEventListener("change", (event) => {
    if(event.target.id === "package") {
        setTechnology(parseInt(event.target.value))

        for(const tech of techs){
            if(tech.id === parseInt(event.target.value)){
                //window.alert(`You have selected the ${tech.package} ${event.target.id}`)
                
            }
        }
        }
    }
)


export const htmlTechs = () => {
    return `<h2>Technologies</h2>
        <select id="package">
            <option value="0">Select a technology package</option>
            ${
                techs.map(
                    (tech) => {
                        return `<option value="${tech.id}">${tech.package}</option>`
                    }
                ).join("")
            }
        </select>
    `
}