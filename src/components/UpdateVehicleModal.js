import React, { useState } from 'react'
import { Modal, Button, Icon } from "semantic-ui-react";
import UpdateVehicleForm from './UpdateVehicleForm'

const UpdateVehicleModal = ({vehicle, myEquipments}) => {

    const [open, setOpen] = useState(false)

    return(
    <div>
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button size="mini" fluid icon > <Icon name='cog' /></Button>}>
        <Modal.Header>Update {vehicle.name}</Modal.Header>
        <Modal.Content>
            <UpdateVehicleForm 
            vehicle={vehicle}        
            closeModal={() => setOpen(false)}
            myEquipments={myEquipments}/>
        </Modal.Content>
        </Modal>
    </div>
)}

export default UpdateVehicleModal

