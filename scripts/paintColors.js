import { getColors, setColor } from "./database.js";

const colors = getColors()


/* Event listener for user to select color option. 
Sets color selection as colorId property in customOrder object*/

document.addEventListener("change", (event) => {
    if(event.target.id === "colors") { 
        setColor(parseInt(event.target.value))

        for(const color of colors){
            if(color.id === parseInt(event.target.value)){
               // window.alert(`You have selected ${color.color}`)
                
            }
        }  
     }
    }
)



/* This function will generate html elements from the 
paintColors objects. */
export const htmlColors = () => {
    return `<h2>Paint Colors</h2>
        <select id="colors">
            <option value="0">Select a Paint Color</option>
            ${
                colors.map(
                    (color) => {
                        return `<option value="${color.id}">${color.color}</option>`
                    }
                ).join("")
            }
        </select>
    `
}
