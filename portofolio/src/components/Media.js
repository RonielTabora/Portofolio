import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card, Col, Row, Carousel } from 'react-bootstrap';
import erp1 from '../img/Captura.PNG';
import erp2 from '../img/Captura1.PNG';
import erp3 from '../img/Captura3.PNG';
import erp4 from '../img/Captura4.PNG';
import erp5 from '../img/Captura5.PNG';
import hdc from '../img/hdc.png';
import hdc2 from '../img/hdc2.png';
import hdc3 from '../img/hdc3.png';
import hdc4 from '../img/hdc4.png';
import hdc5 from '../img/hdc5.png';
import sc1 from '../img/sc1.jpeg';
import sc2 from '../img/sc2.jpeg';
import sc3 from '../img/sc7.jpeg';
import sc4 from '../img/sc8.jpeg';
import sc5 from '../img/sc5.jpeg';
import sc6 from '../img/sc6.jpeg';

class Media extends React.Component {
  render() {
    return (
      <Container id="proj" className="pb-4 spacing teme-color">
        <h1 className="teme-color">Proyectos</h1>
        <div className="heading-line"></div>
        <Row xs={1} md={2} className="g-4">
          <div className="container img-p">
            <Col>
              <Card className="teme-color border-0 shadow-grid">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <Card.Img variant="top" src={erp1} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={erp2} />
                  </Carousel.Item>
                  <Carousel.Item >
                    <Card.Img variant="top" src={erp3} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={erp4} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={erp5} />
                  </Carousel.Item>
                </Carousel>
                <Card.Body>
                  <Card.Title className="text-bold">Adaptación ERPNext</Card.Title>
                  <Card.Text>
                    Es un software de planificación de recursos empresariales integrado gratuito y de código abierto desarrollado por Frappé Technologies Pvt. Ltd. y se basa en el sistema de base de datos MariaDB utilizando Frappe, un marco del lado del servidor basado en Python.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="teme-color border-0 shadow-grid">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <Card.Img variant="top" src={hdc} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={hdc2} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={hdc3} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={hdc4} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={hdc5} />
                  </Carousel.Item>
                </Carousel>
                <Card.Body>
                  <Card.Title className="text-bold">Módulo Contable</Card.Title>
                  <Card.Text>
                    Módulo de asientos contables integrado a una aplicación web escrita en .Net Entity Framework (MVC) y almacena la información en una base de datos SQL.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>

          <Col>
            <Card className="teme-color border-0 shadow-grid">
              <Carousel variant="dark">
                <Carousel.Item>
                  <Card.Img variant="top" src={sc1} />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={sc2} />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={sc3} />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={sc4} />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={sc5} />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={sc6} />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title className="text-bold">Super Compra</Card.Title>
                <Card.Text>
                  Es un proyecto que cuenta con dos aplicaciones móvil escritas en Flutter y usando .Net Core como servidor que almacena la información en una base de datos SQL.
                  Esta misma cuenta con una app web administrativa escrita en Angular Js.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Media;