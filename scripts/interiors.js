import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

/* Event listener for user to select interior option. 
Sets interior selection as interiorId property in customOrder object*/

document.addEventListener("change", (event) => {
    if(event.target.id === "interior"){
        setInterior(parseInt(event.target.value))
       
        for(const interior of interiors){
            if(interior.id === parseInt(event.target.value)){
               // window.alert(`You have selected ${interior.type} ${event.target.id}`)
                
            }
        }
        
        
       
        }
    }
)

/* This function will generate html elements from the 
interiors objects. */

export const htmlInteriors = () => {
    return `<h2>Interiors</h2>
        <select id="interior">
            <option value="0">Select a technology package</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.type}</option>`
                    }
                ).join("")
            }
        </select>
    `
}