import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap'
import t1 from '../img/t1.jpeg';

class Testimonials extends React.Component {
  render() {
    return (
      <Container>
        <div className="testimonials-clean teme-color">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Testimonios</h2>
            </div>
            <div className="row people">
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                    <img className="rounded" src={t1}></img>
                    <h5 className="name">Samira Barahona</h5>
                        <p className="title">Call Center Support.</p>
                        <p className="description">es una persona de carácter,serio. Es una persona servicial, siempre disponible al servicio de otros cuando necesitan de su ayuda. Es amable, bondadoso y honesto. Dedicado y responsable con su trabajo. Sin duda es a alguien que quieran en su equipo.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                    <img className="rounded" src={t1}></img>
                    <h5 className="name">Samira Barahona</h5>
                        <p className="title">Call Center Support.</p>
                        <p className="description">es una persona de carácter,serio. Es una persona servicial, siempre disponible al servicio de otros cuando necesitan de su ayuda. Es amable, bondadoso y honesto. Dedicado y responsable con su trabajo. Sin duda es a alguien que quieran en su equipo.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                    <img className="rounded" src={t1}></img>
                    <h5 className="name">Samira Barahona</h5>
                        <p className="title">Call Center Support.</p>
                        <p className="description">es una persona de carácter,serio. Es una persona servicial, siempre disponible al servicio de otros cuando necesitan de su ayuda. Es amable, bondadoso y honesto. Dedicado y responsable con su trabajo. Sin duda es a alguien que quieran en su equipo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Container>
    )
  }
}
export default Testimonials;