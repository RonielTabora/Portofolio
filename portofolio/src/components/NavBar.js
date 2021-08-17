import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="white">
                <Navbar.Brand className="mx-4 teme-color text-bold" >Portafolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                <Nav className="mr-auto"></Nav>
                    <Nav className="teme-color">
                        <Nav.Link href="#home" className="text-decoration-none text-bold">Inicio</Nav.Link>
                        <Nav.Link href="#desem" className="text-decoration-none text-bold">Desempeño</Nav.Link>
                        <Nav.Link href="#skill" className="text-decoration-none text-bold">Skills</Nav.Link>
                        <Nav.Link href="#expe" className="text-decoration-none text-bold">Experiencia</Nav.Link>
                        <Nav.Link href="#edu" className="text-decoration-none text-bold">Educación</Nav.Link>
                        <Nav.Link href="#proj" className="text-decoration-none text-bold">Proyectos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default NavBar;