import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Card, Col, Row } from 'react-bootstrap';
import erp1 from '../img/erp1.jpg';
import erp2 from '../img/erp2.jpg';
import hdc from '../img/hdc.png';
import sc1 from '../img/sc1.jpg';
import sc3 from '../img/sc3.jpeg';
import sc4 from '../img/sc4.jpeg';

class Media extends React.Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      variableWidth: false
    };

    return (
      <Container className="pb-4 mb-2">
        <h2 className="teme-color"> Proyectos</h2>
        {/* <Slider {...settings}>
          <div>
          </div>
          <div>
          <Image src={erp2} fluid />
          </div>
          <div>
          <Image src={hdc} fluid />
          </div>
          <div className="text-center">
          <Image src={sc1}  className="img-w" />
          </div>
          <div>
          <Image src={sc3} className="img-w" />
          </div>
          <div>
          <Image src={sc4} className="img-w" />
          </div>
        </Slider> */}
        <Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <div style={{ height: '18rem' }}>
        <Card.Img variant="top" src={erp1} />
        </div>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
      <Card.Img variant="top" src={hdc}  />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
      <Card.Img variant="top" src={sc4} />
        <Card.Body>
        <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={erp1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
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
export default Media;