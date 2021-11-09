import React, { useEffect, useRef, useState } from 'react'
import { Table, Button } from "semantic-ui-react";
import { initializeVehicles, initializeEquipments } from '../state/reducer'
import { useSelector, useDispatch } from 'react-redux'
import defaultVechiles from '../data/vehicles.json'
import defaultEquipments from '../data/equipments.json'
import { isVehicleList, isEquipmentList } from '../utils/checkFormat'
import ExpandableVehicleRow from './ExpandableVehicleRow'

const VehicleTable = () => {

    const dispatch = useDispatch() 
    const vehicles = useSelector(state => state.vehicles)
    const equipments = useSelector(state => state.equipments)

    const vehicleInputElement = useRef(null);
    const equipmentInputElement = useRef(null);
    
    useEffect(() => {
        if (vehicles.length === 0) 
            dispatch(initializeVehicles(defaultVechiles))
        if (equipments.length === 0) 
            dispatch(initializeEquipments(defaultEquipments))
    }, [dispatch, vehicles, equipments])

    const [errorMessage, setErrorMessage] = useState('')

    const uploadVehicles = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            try {
                const result = JSON.parse(e.target.result)
                if (isVehicleList(result)){
                    dispatch(initializeVehicles(result))
                    setErrorMessage('')
                }
                else setErrorMessage('Wrong format for vehicles!   ')
            } catch { setErrorMessage('Not a json file!   ')}
        }
    }

    const uploadEquipments = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            try {
                const result = JSON.parse(e.target.result)
                if (isEquipmentList(result)){
                    dispatch(initializeEquipments(result))
                    setErrorMessage('')
                }
                else setErrorMessage('Wrong format for equipment!   ')
            } catch { setErrorMessage('Not a json file!   ')}
        }
    }
    
    return(
    <div>
    <Table fixed striped textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Driver</Table.HeaderCell>
          <Table.HeaderCell width={2}>Status</Table.HeaderCell>
          <Table.HeaderCell> Fuel Type</Table.HeaderCell>
          <Table.HeaderCell width={1}>Equipment</Table.HeaderCell>
          <Table.HeaderCell width={1}>Update</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.values(vehicles).map(vehicle => (
            <ExpandableVehicleRow key={vehicle.id} vehicle={vehicle} equipments={equipments} />
        ))}
      </Table.Body>
    </Table>
    <Button
        content={"Upload vehicle data (.json)"}
        labelPosition="right"
        icon="file"
        onClick={() => vehicleInputElement.current.click()}
    />
    <input
        ref={vehicleInputElement}
        type="file"
        accept=".json"
        hidden
        onChange={uploadVehicles}
    />
     <Button
        content="Upload equipment data (.json)"
        labelPosition="right"
        icon="file"
        onClick={() => equipmentInputElement.current.click()}
    />
    <input
        ref={equipmentInputElement}
        type="file"
        accept=".json"
        hidden
        onChange={uploadEquipments}
    />
    {errorMessage? 
    <span style={{color:"red"}}>{errorMessage}</span> : <span></span>
    }
    </div>
)}

export default VehicleTable
