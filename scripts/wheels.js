import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener("change", (event) => {
    if(event.target.id === "wheels"){
    setWheels(parseInt(event.target.value))

    for(const wheel of wheels){
        if(wheel.id === parseInt(event.target.value)){
            //window.alert(`You have selected ${wheel.set} ${event.target.id}`)
            
        }
    }
        }
    }
)



export const htmlWheels = () => {
    return `<h2>Wheels</h2>
        <select id="wheels">
            <option value="0">Select a Wheel Set</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.set}</option>`
                    }
                ).join("")
            }
        </select>
    `
}