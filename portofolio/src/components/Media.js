import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Image, Col, Container, Row } from 'react-bootstrap'
import sc1 from '../img/sc1.jpg';
import erp1 from '../img/erp1.jpg';
import hdc from '../img/hdc.png';
import erp2 from '../img/erp2.jpg';

class Media extends React.Component {
    render() {
        return (
            <Container>
                <div className="row">
                    <div class="col-md-5 p-4">
                        <Image src={hdc} fluid />
                    </div>
                    <div class="col-md-7 p-4">
                        <Image src={erp2} fluid />
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-5 p-4">
                        <Image src={sc1} fluid className="img-m"/>
                    </div>
                    <div class="col-md-7 p-4">
                        <Image src={erp1} fluid />
                    </div>
                </div>
            </Container>
        )
    }
}
export default Media;