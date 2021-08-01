import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Col, Container, Row } from 'react-bootstrap'
import BackEnd from '../img/BackEnd.png';
import FontEnd from '../img/FrontEnd.png';
import ux from '../img/ux.jpg';
import web from '../img/web-dev.png';
import Trello from '../img/Trello-Logo.png';
import Slack from '../img/Slack-Logo.png';
import Scrum from '../img/Scrum.png';

class Projects extends React.Component {
    render() {
        return (
            <Container className="spacing">
                <h2>Areas de desempeño</h2>
                <Row xs={1} md={4} className="g-4">
                        <Col>
                            <Card className="hover border-0">
                                <Card.Img variant="top" src={ux} className="p-4 img-fluid" alt="Responsive image"/>
                                <Card.Body>
                                    <Card.Title>UX/UI</Card.Title>
                                    <Card.Text>
                                        Realizando prototipos de baja y alta calidad hasta llegar al producto final.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="hover border-0">
                                <Card.Img variant="top" src={web} className="p-4 img-fluid" alt="Responsive image" />
                                <Card.Body>
                                    <Card.Title>Programador Web/Mobile</Card.Title>
                                    <Card.Text>
                                        Participando en diversos proyectos pensados para ser visualizados en diversos dispositivos.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="hover border-0">
                                <Card.Img variant="top" src={BackEnd} className="p-4 img-fluid" alt="Responsive image" />
                                <Card.Body>
                                    <Card.Title>BackEnd</Card.Title>
                                    <Card.Text>
                                        Utilizando técnologias emergentes como Node Js y usando arquitecturas compactas como ser MVC.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="hover border-0">
                                <Card.Img variant="top" src={FontEnd} className="p-4 img-fluid" alt="Responsive image" />
                                <Card.Body>
                                    <Card.Title>FrontEnd</Card.Title>
                                    <Card.Text>
                                        Realizando prototipos y plasmandolos en código utilizando estrategías para lograr un UI adaptable y amigable para el usuario final.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
                <h2>Para gestión de proyectos</h2>
                <Row xs={1} md={4} className="g-4 justify-content-center">
                        <Col>
                            <Card className="hover border-0">
                                <Card.Img variant="top" src={Trello} className="p-4"/>
                                <Card.Body>
                                    <Card.Title>Trello</Card.Title>
                                    <Card.Text>
                                        Desempeño total en trello, utilizandolo para un mejor seguimientos de asignaciones.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="hover border-0">
                                <Card.Img variant="top" src={Scrum} className="p-4" />
                                <Card.Body>
                                    <Card.Title>Scrum</Card.Title>
                                    <Card.Text>
                                        Acostumbrado a esta metodología agíl la cual permite gestionar mejor a un grupo de trabajo.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="hover border-0">
                                <Card.Img variant="top" src={Slack} className="p-4" />
                                <Card.Body>
                                    <Card.Title>Slack</Card.Title>
                                    <Card.Text>
                                        Para la comunicación entre compañeros de trabajo y realizar seguimientos a las actualizaciones de los repositorios.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
            </Container>
        )
    }
}
export default Projects;