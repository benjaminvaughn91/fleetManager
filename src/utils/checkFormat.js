
export const isVehicleList = (vehicles) => {
    let isCorrectFormat = true
    vehicles.forEach((vehicle) => {
        if (!(vehicle.id 
            && (vehicle.name || vehicle.name === "")
            && (vehicle.driver || vehicle.driver === "")
            && (vehicle.status || vehicle.status === "")
            && (vehicle.fuelType || vehicle.fuelType === "")))
            isCorrectFormat =  false
        }
    )
    return isCorrectFormat
}

export const isEquipmentList = (equipments) => {
    let isCorrectFormat = true
    equipments.forEach((equipment) => {
        if (!(equipment.id 
            && (equipment.name || equipment.name === "")
            && Object.keys(equipment).length === 2
            ))
            isCorrectFormat = false
        }
    )
    return isCorrectFormat
}
