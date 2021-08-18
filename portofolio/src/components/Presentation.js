import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import profile from '../img/bg.png';
import { Linkedin, Facebook, Github, TelephoneFill, EnvelopeFill, HouseFill, GeoAltFill } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image'
import { Container, Row } from 'react-bootstrap';

class Presentation extends React.Component {
    render() {
        return (
            // <div id="home" className="card border-0 px-5 bg-transparent">
            <Container>
                <Row className="no-gutters align-items-center">
                    <div className="col-md-6 h-100 borders">
                        <Image src={profile} className="card-img" fluid />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body teme-color">
                            <h1 className="card-title pt-1">Hola, mi nombre es Deyvi Tabora</h1>
                            <p className="card-text pt-2">Programador web, amante de las animaciones digitales y la tecnología.</p>
                            <div className="Container">
                                <div class="row">
                                    <div class="col-4 text-end">
                                        <TelephoneFill size={20} />
                                    </div>
                                    <div class="col-8 text-start">+504 9849-2849</div>
                                </div>
                                <div class="row">
                                    <div class="col-4 text-end">
                                        <EnvelopeFill size={20} />
                                    </div>
                                    <div class="col-8 text-start">taborapaz@gmail.com</div>
                                </div>
                                <div class="row">
                                    <div class="col-4 text-end">
                                        <HouseFill size={20} />
                                    </div>
                                    <div class="col-8 text-start">El Zapotal Del Norte</div>
                                </div>
                                <div class="row">
                                    <div class="col-4 text-end">
                                        <GeoAltFill size={20} />
                                    </div>
                                    <div class="col-8 text-start">San Pedro Sula, Cortés, Honduras</div>
                                </div>
                            </div>
                            <h5 className="text-center pt-5">Más sobre mí</h5>
                            <div className="row d-flex justify-content-center">
                                <row>
                                    <a href="https://www.linkedin.com/in/deyvi-roniel-tabora-paz-29191b191/" className="p-2"><Linkedin color="royalblue" size={30} /></a>
                                    <a href="https://github.com/RonielTabora" className="p-2"><Github color="Black" size={30} /></a>
                                    <a href="https://www.facebook.com/profile.php?id=100007589806347" className="p-2"><Facebook color="royalblue" size={30} /></a>
                                </row>
                            </div>
                        </div>
                    </div>
                </Row>
                </Container>
            // </div>
        )
    }
}
export default Presentation;