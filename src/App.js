import React from 'react'
import CollectionPage from './pages/CollectionPage'
import { Divider, Container } from "semantic-ui-react";

const App = () => (
  <div>           
    <Divider hidden />
    <Container>
      <CollectionPage />
    </Container>
  </div>
)
export default App