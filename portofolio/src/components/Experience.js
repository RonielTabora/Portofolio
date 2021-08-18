import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardGroup, Container } from 'react-bootstrap'

class Experience extends React.Component {
    render() {
        return (
            <Container id="expe" className="spacing teme-color">
                <h1>Experiencia Laboral</h1>
                <div className="heading-line"></div>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-bold">Grintsys</Card.Title>
                            <Card.Text>
                                Durante mi tiempo en esta empresa me desempeñe como Programador Web y Movil, participando en proyectos tanto como en Backend y Frontend utilizando Trello para el control de asignaciones y la metodología de Scrum para el coordinamiento del equipo.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">1 Año y 8 Meses</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-bold">Grupo Leitz</Card.Title>
                            <Card.Text>
                                Durante mi corto tiempo en esta empresa me desempeñe como Programador Web, participando en un proyecto elaborado en .Net MVC ejecutando tareas de Backend y Frontend, utilizando la metodología de Scrum.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">6 Meses</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-bold">IHSS (Práctica Profesional)</Card.Title>
                            <Card.Text>
                                En mi práctica profesional fui asigando al area de IT especificamente para realizar mantenimiento preventivo y correctivo a los euipos computacionales de la institución.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">3 Meses</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        )
    }
}
export default Experience;