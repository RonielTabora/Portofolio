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
                                <Card.Img variant="top" src={ux} className="p-4"/>
                                <Card.Body>
                                    <Card.Title>UX/UI</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="hover border-0">
                                <Card.Img variant="top" src={web} className="p-4" />
                                <Card.Body>
                                    <Card.Title>Programador Web/Mobile</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="hover border-0">
                                <Card.Img variant="top" src={BackEnd} className="p-4" />
                                <Card.Body>
                                    <Card.Title>BackEnd</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="hover border-0">
                                <Card.Img variant="top" src={FontEnd} className="p-4" />
                                <Card.Body>
                                    <Card.Title>FrontEnd</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
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
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
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
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
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
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
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