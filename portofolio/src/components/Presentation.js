import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import profile from '../img/Profile.jpeg';
import { Linkedin, Facebook, Github, TelephoneFill, EnvelopeFill, HouseFill, GeoAltFill } from 'react-bootstrap-icons';

class Presentation extends React.Component {
    render() {
        return (
            <div className="card border-0 px-5 bg-transparent">
                <div className="row no-gutters align-items-center">
                <div className="col-md-7 h-100 p-4">
                        <img  src={profile} className="card-img"></img>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h1 className="card-title pt-1">Hola, mi nombre es Deyvi Tabora</h1>
                            <p className="card-text pt-2">Programador web, amante de las animaciones digitales y la tecnología.</p>
                            <div className="Container">
                            <div class="row">
                                <div class="col-4 text-end">
                                <TelephoneFill color="Black" size={20} />
                                </div>
                                <div class="col-8 text-start">+504 9849-2849</div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-end">
                                <EnvelopeFill color="Black" size={20} />
                                </div>
                                <div class="col-8 text-start">taborapaz@gmail.com</div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-end">
                                <HouseFill color="Black" size={20} />
                                </div>
                                <div class="col-8 text-start">El Zapotal Del Norte</div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-end">
                                <GeoAltFill color="Black" size={20} />
                                </div>
                                <div class="col-8 text-start">San Pedro Sula, Cortés, Honduras</div>
                            </div>
                            </div>
                            <h5 className="text-center pt-5">Más sobre mí</h5>
                            <div className="row d-flex justify-content-center">
                                <row>
                                <a href="https://www.facebook.com/grintsys/" className="p-2"><Linkedin color="royalblue" size={30} /></a>
                                <a href="https://www.youtube.com/channel/UCCr2Se-J173l36beanfXm0w"  className="p-2"><Github color="Black" size={30} /></a>
                                <a href="https://github.com/orgs/Grintsys"  className="p-2"><Facebook color="royalblue" size={30} /></a>
                                </row>  
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Presentation;