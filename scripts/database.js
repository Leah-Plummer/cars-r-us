const database = {

    orderBuilder: {},

    paintColors: [
        {id: 1, color: "Silver", price: 1.99},
        {id: 2, color: "Midnight Blue", price: 2.99},
        {id: 3, color: "Firebrick Red", price: 3.99},
        {id: 4, color: "Spring Green", price: 4.99}
    ],

    interiors: [
        {id: 1, type: "Beige Fabric", price: 1.99},
        {id: 2, type: "Charcoal Fabric", price: 2.99},
        {id: 3, type: "White Leather", price: 3.99}, 
        {id: 4, type: "Black Leather", price: 4.99}
    ],

    technologies: [
        {id: 1, package: "Basic", price: 1.99},
        {id: 2, package: "Navigation", price: 2.99},
        {id: 3, package: "Visibility", price: 3.99},
        {id: 4, package: "Ultra", price: 4.99}
    ],

    wheels: [
        {id: 1, set: "17-inch Pair Radial", price: 1.99},
        {id: 2, set: "17-inch Pair Radial Black", price: 2.99},
        {id: 3, set: "18-inch Pair Spoke Silver", price: 3.99},
        {id: 4, set: "18-inch Pair Spoke Black", price: 4.99}
    ], 

    customOrders: [
        {id: 1, 
        colorId: 1, 
        interiorId: 1,
        techId: 1, 
        wheelsId: 1, 
        timestamp: 43890579}
    ]
}

/* These functions create a copy of each array in the database object, and 
are exported to be used in their respective modules*/

export const getColors = () => {
    return database.paintColors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel})) 
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
/*These functions set the user's selections by setting them as temporary properties
in an orderBuilder object.*/

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

/* This function adds a custom order as an object to the customOrders array */

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1      // adds primary key to order object
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}