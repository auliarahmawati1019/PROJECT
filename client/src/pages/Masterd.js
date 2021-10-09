import Data from "../component/header/Navigations";
import { Card, Container } from 'react-bootstrap'

const  Masterd = () => {

  return (
    <>
      <Data />
      <Container className="App">
        <Card>
          <Card.Title> Profil </Card.Title>
          <hr/>
          <Card.Body>
            Text...
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Masterd
