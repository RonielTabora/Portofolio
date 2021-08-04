import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Navbar.Brand className="mx-4 teme-color text-bold" >Portafolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav className="teme-color">
                        <Nav.Link className="text-decoration-none text-bold">Inicio</Nav.Link>
                        <Nav.Link className="text-decoration-none text-bold">Desempeño</Nav.Link>
                        <Nav.Link className="text-decoration-none text-bold">Skills</Nav.Link>
                        <Nav.Link className="text-decoration-none text-bold">Experiencia</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default NavBar;