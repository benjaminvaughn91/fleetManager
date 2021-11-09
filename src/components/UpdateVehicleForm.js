import React, { useState } from 'react'
import { Form, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux'
import { updateVehicle } from '../state/reducer'

const UpdateVehicleForm = ({vehicle, closeModal, myEquipments}) => {

    const equipments = useSelector(state => state.equipments)
    const dispatch = useDispatch() 

    const defaultActive = vehicle.status === 'active' ? true : false
    const defaultEquipmentIds = myEquipments.map(equipment => equipment.id)

    const [name, setName] = useState(vehicle.name)
    const [driver, setDriver] = useState(vehicle.driver)
    const [fuelType, setfuelType] = useState(vehicle.fuelType)
    const [active, setActive] = useState(defaultActive)
    const [equipmentIds, setEquipmentIds] = useState(defaultEquipmentIds)

    const handleNameChange = (event) => setName(event.target.value)  
    const handleDriverChange = (event) => setDriver(event.target.value) 
    const handleFuelTypeChange = (event) => setfuelType(event.target.value) 
    const handleStatusChange = () => setActive(!active) 

    const handleEquipmentChange = (event) => {
        const id = Number(event.target.value)
        if (!(equipmentIds.includes(id)))
            setEquipmentIds(equipmentIds.concat(id))
        else {
            const newArr = equipmentIds.filter(item => item !== id)
            setEquipmentIds(newArr)
        }
    }

    const onSubmit = () => {
        const updatedVehicle =  {
            id: vehicle.id,
            name,
            driver,
            status: active ? 'active' : 'inactive',
            fuelType,
            equipments: equipmentIds
        }
        dispatch(updateVehicle(updatedVehicle))
        closeModal()
    }

    return(
    <div>
    <Form onSubmit={onSubmit}>
        <Form.Field>
            <label>Name</label>
            <input 
                placeholder={vehicle.name}
                value={name}
                onChange={handleNameChange} />
        </Form.Field>
        <Form.Field>
            <label>Driver</label>
            <input 
                placeholder={vehicle.driver}
                value={driver}
                onChange={handleDriverChange} />
        </Form.Field>
        <Form.Group inline>
            <label>Status</label>
            <Form.Radio
                label='Active'
                value='active'
                checked={active}
                onChange={handleStatusChange} />
            <Form.Radio
                label='Inactive'
                value='inactive'
                checked={!active}
                onChange={handleStatusChange} />
        </Form.Group>
        <Form.Field>
            <label>Fuel Type</label>
            <input 
                placeholder={vehicle.fuelType}
                value={fuelType}
                onChange={handleFuelTypeChange} />
        </Form.Field>
        <Form.Field>
            <label>Equipments</label>
            {
            Object.values(equipments).map(equipment => (
                <Form.Field 
                    key={equipment.id} 
                    label={equipment.name} 
                    value={equipment.id}
                    control='input' 
                    type='checkbox' 
                    checked={equipmentIds.includes(equipment.id) ? true : false} 
                    onChange={handleEquipmentChange}/>
            ))
            }
        </Form.Field>
        <Button type='submit'>Submit</Button>
        <Button onClick={closeModal} floated='right'>Cancel</Button>
    </Form>
    </div>
)}

export default UpdateVehicleForm