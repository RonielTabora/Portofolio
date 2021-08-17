import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card, Col, Row, Carousel } from 'react-bootstrap';
import erp1 from '../img/erp1.jpg';
import erp2 from '../img/erp2.jpg';
import hdc from '../img/hdc.png';
import hdc2 from '../img/hdc2.png';
import hdc3 from '../img/hdc3.png';
import sc1 from '../img/sc1.jpg';
import sc3 from '../img/sc3.jpeg';
import sc4 from '../img/sc4.jpeg';

class Media extends React.Component {
  render() {
    return (
      <Container id="proj" className="pb-4 teme-color">
        <h2 className="teme-color spacing"> Proyectos</h2>
        <Row xs={1} md={2} className="g-4">
          <div className="container img-p">
            <Col>
              <Card className="teme-color">
                <Carousel variant="dark">
                  <Carousel.Item interval={500}>
                    <Card.Img variant="top" src={erp1} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={erp2} />
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
              <Card className="teme-color">
                <Carousel variant="dark">
                  <Carousel.Item interval={500}>
                    <Card.Img variant="top" src={hdc} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={hdc2} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={hdc3} />
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
            <Card className="teme-color">
              <Carousel variant="dark">
                <Carousel.Item interval={500}>
                  <Card.Img variant="top" src={sc3} />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <Card.Img variant="top" src={sc1} />
                </Carousel.Item>
                <Carousel.Item>
                  <Card.Img variant="top" src={sc4} />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title className="text-bold">Super Compra</Card.Title>
                <Card.Text>
                  Es un proyecto que cuenta con dos aplicaciones movil escritas en Flutter y usando .Net Core como servidor que almacena la información en una base de datos SQL.
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