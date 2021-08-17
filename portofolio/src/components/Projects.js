import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Fade, Slide } from 'react-reveal';
import { CodeSquare, Server, Laptop, Pencil } from 'react-bootstrap-icons';

class Projects extends React.Component {
    render() {
        return (
            <Container id="desem" className="spacing teme-color">
                <h2 className="pb-2">Areas de desempeño</h2>
                <Row xs={1} md={4} className="g-4">
                <Slide bottom>
                        <Col>
                            <Card className="hover border-0">
                            <div className="pt-3">
                            <Pencil size={50} />
                            </div>
                                <Card.Body>
                                    <Card.Title className="text-bold">UX/UI</Card.Title>
                                    <Card.Text>
                                        Realizando prototipos de baja y alta calidad hasta llegar al producto final.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                </Slide>
                <Slide bottom>
                <Col>
                            <Card className="hover border-0">
                            <div className="pt-3">
                            <Laptop size={50} />
                            </div>
                            <Card.Body>
                                    <Card.Title className="text-bold">Programador Web/Mobile</Card.Title>
                                    <Card.Text>
                                        Participando en diversos proyectos pensados para ser visualizados en diversos dispositivos.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                </Slide>
                <Slide bottom>  
                        <Col>
                            <Card className="hover border-0">
                            <div className="pt-3">
                            <Server size={50} />
                            </div>                                <Card.Body>
                                    <Card.Title className="text-bold">BackEnd</Card.Title>
                                    <Card.Text>
                                        Utilizando técnologias emergentes como Node Js y usando arquitecturas compactas como ser MVC.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Slide>
                    <Slide bottom>
                        <Col>
                            <Card className="hover border-0">
                            <div className="pt-3">
                            <CodeSquare size={50} />
                            </div>
                            <Card.Body>
                                    <Card.Title className="text-bold">FrontEnd</Card.Title>
                                    <Card.Text>
                                        Realizando prototipos y plasmandolos en código utilizando estrategías para lograr un UI adaptable y amigable para el usuario final.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                </Slide>
                </Row>
                <Container className="spacing">
                    <h2>Para gestión de proyectos</h2>
                </Container>
                <Row xs={1} md={4} className="g-4 justify-content-center">
                <Slide bottom>
                        <Col>
                            <Card className="hover border-0">
                                <Card.Body>
                                    <Card.Title className="text-bold">Trello</Card.Title>
                                    <Card.Text>
                                        Desempeño total en trello, utilizandolo para un mejor seguimientos de asignaciones.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Slide>
                    <Slide bottom>

                        <Col>
                            <Card className="hover border-0">
                                <Card.Body>
                                    <Card.Title className="text-bold">Scrum</Card.Title>
                                    <Card.Text>
                                        Acostumbrado a esta metodología agíl la cual permite gestionar mejor a un grupo de trabajo.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Slide>
                    <Slide bottom>
                        <Col>
                            <Card className="hover border-0">
                                <Card.Body>
                                    <Card.Title className="text-bold">Slack</Card.Title>
                                    <Card.Text>
                                        Para la comunicación entre compañeros de trabajo y realizar seguimientos a las actualizaciones de los repositorios.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Slide>
                </Row>
            </Container>
        )
    }
}
export default Projects;