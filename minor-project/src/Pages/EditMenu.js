import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function EditMenu() {
  return (
    <>

<Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Dish Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Dish Rate</Form.Label>
        <Form.Control type="text" placeholder="Enter Rate" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Dish Rating</Form.Label>
        <Form.Control type="number" placeholder="Enter Rating" />
      </Form.Group>
    </Form>
    </>
  )
}

export default EditMenu