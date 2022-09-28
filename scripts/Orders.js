import { getOrders, getColors, getInteriors, getTechnologies, getWheels } from "./database.js"

const buildOrderListItem = (order) => {
/////////////////////////////////////////////////////////////
    const colors = getColors()

// Remember that the function you pass to find() must return true/false
const foundColor = colors.find(
    (color) => {
        return color.id === order.colorId
    }
)
let totalCost = foundColor.price

//////////////////////////////////////////////////////////////
const interiors = getInteriors()

// Remember that the function you pass to find() must return true/false
const foundInterior = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)
totalCost += foundInterior.price
/////////////////////////////////////////////////////////////
const techs = getTechnologies()

// Remember that the function you pass to find() must return true/false
const foundTech = techs.find(
    (tech) => {
        return tech.id === order.techId
    }
)
totalCost += foundTech.price
////////////////////////////////////////////////////////////
const wheels = getWheels()

// Remember that the function you pass to find() must return true/false
const foundWheels = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelsId
    }
)
totalCost += foundWheels.price
////////////////////////////////////////////////////////////
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

 return `<li>
    Order #${order.id} cost ${costString}
</li>`
    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`
    
}




export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

