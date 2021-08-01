import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, ProgressBar, Container, Row } from 'react-bootstrap'

class Skills extends React.Component {
    render() {
        return (
            <Container className="mt-4">
                <div className="container">
                    <div className="row">
                    <h1>Skills</h1>
                        <div className="col">
                        <Card className="border-0">
                            <Row>
                                <div className="p-4">
                                    <h4>Html</h4>
                                    <ProgressBar now={100} label="100%" />
                                </div>
                            </Row>
                            <Row>
                                <div className="p-4">
                                    <h4>Css</h4>
                                    <ProgressBar now={90} label="90%" />
                                </div>
                            </Row>
                            <Row>
                                <div className="p-4">
                                    <h4>JavaScript</h4>
                                    <ProgressBar now={70} label="70%" />
                                </div>
                            </Row>
                            <Row>
                                <div className="p-4">
                                    <h4>Angular</h4>
                                    <ProgressBar now={60} label="60%" />
                                </div>
                            </Row>
                            <Row>
                                <div className="p-4">
                                    <h4>React Js</h4>
                                    <ProgressBar now={90} label="90%" />
                                </div>
                            </Row>
                            <Row>
                                <div className="p-4">
                                    <h4>.Net MVC</h4>
                                    <ProgressBar now={80} label="80%" />
                                </div>
                            </Row>
                        </Card>
                        </div>
                        <div className="col">
                        <Card className="border-0">
                        <Row>
                                <div className="p-4">
                                    <h4>Flutter</h4>
                                    <ProgressBar now={85} label="85%" />
                                </div>
                            </Row>
                            <Row>
                                <div className="p-4">
                                    <h4>SQL</h4>
                                    <ProgressBar now={70} label="70%" />
                                </div>
                            </Row>
                            <Row>
                                <div className="p-4">
                                    <h4>Python</h4>
                                    <ProgressBar now={65} label="65%" />
                                </div>
                            </Row>
                            <Row>
                                <div className="p-4">
                                    <h4>TypeScript</h4>
                                    <ProgressBar now={75} label="75%" />
                                </div>
                            </Row>
                            <Row>
                                <div className="p-4">
                                    <h4>Illustrator/Photoshop</h4>
                                    <ProgressBar now={60} label="60%" />
                                </div>
                            </Row>
                            <Row>
                                <div className="p-4">
                                    <h4>Wondershare Filmora</h4>
                                    <ProgressBar now={90} label="90%" />
                                </div>
                            </Row>
                        </Card>
                    </div>
                    </div>
                </div>
            </Container>
        )
    }
}
export default Skills;