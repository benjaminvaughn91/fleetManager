
export const vehiclesReducer = (state = [], action) => {
    switch (action.type) {
      case "INIT_VEHICLE_LIST":
        {
            return action.data
        }
      case "UPDATE_VEHICLE":
        {
            const id = action.data.id
            return state.map(vehicle => 
                vehicle.id !== id ? vehicle : action.data)
        }
      default:
        return state
    }
  }

export const equipmentsReducer = (state = [], action) => {
    switch (action.type) {
      case "INIT_EQUIPMENT_LIST":
        {
            return action.data
        }
      default:
        return state
    }
  }

  export const initializeVehicles = (vehicles) => {
    return {
      type: "INIT_VEHICLE_LIST",
      data: vehicles
    }
  }

  export const updateVehicle = (vehicle) => {
    return {
      type: "UPDATE_VEHICLE",
      data: vehicle
    }
  }

  export const initializeEquipments = (equipment) => {
    return {
      type: "INIT_EQUIPMENT_LIST",
      data: equipment
    }
  }