import { createStore, combineReducers } from 'redux'
import { vehiclesReducer, equipmentsReducer } from './reducer'

const reducer = combineReducers({
    vehicles: vehiclesReducer,  
    equipments: equipmentsReducer
  })

const store = createStore(reducer)

export default store