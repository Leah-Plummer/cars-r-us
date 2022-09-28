import { htmlInteriors } from "./interiors.js"
import { htmlColors } from "./paintColors.js"
import { htmlTechs } from "./technologies.js"
import { htmlWheels } from "./wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"
document.addEventListener(
    "click",
    (event) => {

         const itemClicked = event.target

         if (itemClicked.id === "orderButton") {
           addCustomOrder() 
         }
    }
)

export const carsRUs = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__colors options">
               
                 ${htmlColors()}
            </section>

            <section class="choices__interiors options">
                
                 ${htmlInteriors()}
            </section>

            <section class="choices__techs options">
                
                 ${htmlTechs()}
            </section>

            <section class="choices__wheels options">
               
                 ${htmlWheels()}
            </section>
        </article>
        
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        
        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>` 
            }
                // <select id="resource">
                //     <option value="0">Prompt to select resource...</option>
                //     <option value="1">First option</option>
                //     <option value="2">Second option</option>
                // </select>