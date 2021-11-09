import React from 'react'
import VehicleTable from '../components/VehicleTable'
import { Divider, Container } from "semantic-ui-react";

const CollectionPage = () => (
  <div>
    <Divider hidden />
      <Container textAlign="center" >
        <h1>Vehicles</h1>
      </Container>
    <Divider hidden />
      <VehicleTable />
    <Divider hidden />
  </div>
)
export default CollectionPage