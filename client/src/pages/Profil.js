import Navigation from "../component/header/Navigations";
import { Card, Container } from 'react-bootstrap'

const  Profil = () => {

  return (
    <>
      <Navigation />
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

export default Profil
