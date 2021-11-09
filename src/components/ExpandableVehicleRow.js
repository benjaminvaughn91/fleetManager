import React, { useState } from 'react'
import { Table, Button, Icon, Label, Popup } from "semantic-ui-react";
import UpdateVehicleModal from './UpdateVehicleModal'

const ExpandableVehicleRow = ({vehicle, equipments}) => {

    const [expanded, setExpanded] = useState(false);
  
    const expandableStyle = {
      display: expanded ? "table-row" : "none"
    };

    let myEquipments = []
    if (vehicle.equipments) {
        myEquipments = vehicle.equipments.map(id => {
            const equipment = equipments.find(equipment => equipment.id === id)
            if (equipment) return equipment
            else return { 
                id,
                name: "undefined"
            }
        })
    }
  
    return (
      <>
        <Table.Row>
            <Table.Cell>{vehicle.id}</Table.Cell>
            <Table.Cell>{vehicle.name}</Table.Cell>
            <Table.Cell>{vehicle.driver}</Table.Cell>
            <Table.Cell><Popup content={vehicle.status} 
            trigger={vehicle.status === 'active' ? 
                <Icon color='green' name='certificate' size='large' loading ></Icon> 
                :
                <Icon color='red' name='pause' size='large'></Icon> 
                }>
                </Popup>
            </Table.Cell>
            <Table.Cell>{vehicle.fuelType}</Table.Cell>
            <Table.Cell>
                <Button size="mini" fluid icon onClick={() => setExpanded(!expanded)}>
                    {expanded?  <Icon name='angle up' />:
                     <Icon name='angle down' />}
                </Button>
            </Table.Cell>
            <Table.Cell>
                <UpdateVehicleModal vehicle={vehicle} myEquipments={myEquipments}/>
            </Table.Cell>
        </Table.Row> 

        <Table.Row style={expandableStyle}>
          <Table.Cell colSpan={7}>
            <span style={{fontWeight: 'bold'}}>Equipment: </span>
            {(myEquipments.length > 0) ?
            Object.values(myEquipments).map(equipment => (
                <Label size="large" key={equipment.id}>{equipment.name} </Label>
            ))
            :   <span> None </span>}
          </Table.Cell>
        </Table.Row>
      </>
    )
  }

  export default ExpandableVehicleRow