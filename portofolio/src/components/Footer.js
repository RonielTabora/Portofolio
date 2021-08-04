import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Linkedin, Facebook, Github, TelephoneFill, EnvelopeFill, HouseFill, GeoAltFill } from 'react-bootstrap-icons';

class Footer extends React.Component {
    render() {
        return (
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 footer-column">
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <span class="footer-title">Deyvi Tabora</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4 box">
                            <div className="row d-flex justify-content-center">
                                <row>
                                <a href="https://www.facebook.com/grintsys/" className="p-2"><Linkedin color="White" size={30} /></a>
                                <a href="https://www.youtube.com/channel/UCCr2Se-J173l36beanfXm0w"  className="p-2"><Github color="White" size={30} /></a>
                                <a href="https://github.com/orgs/Grintsys"  className="p-2"><Facebook color="White" size={30} /></a>
                                </row>  
                            </div>
                            </div>
                            <div class="col-md-4 footer-column">
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <span class="footer-title">Contactame</span>
                                    </li>
                                    <li class="nav-item">
                                        <span class="copyright"><TelephoneFill color="white" size={15} /> +504 9849-2849</span>
                                    </li>
                                    <li class="nav-item">
                                        <span class="copyright"><EnvelopeFill color="white" size={15} /> taborapaz@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>            
                    </div>
                </footer>
        )
    }
}
export default Footer;