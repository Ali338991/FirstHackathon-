import React from "react";
import { Card, Row, Nav, Col, Container, Button } from "react-bootstrap";
import ICAEW from "../../assets/Courses/ICAEW.jpg";

export default function Courses() {
  return (
    <div className="sec2">
      <h3 className="text-center fs-1 fw-bold sha heaC2">Courses</h3>

      <Container>
        <Row>
          <Col lg={4} md={4} sm={6} className="mt-4 Course_Card">
            <Card style={{}}>
              <Card.Img
                variant="top"
                src={ICAEW}
                height="200px"
                className="cc"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. quick example text to build on
                  the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Enroll</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={6} className="mt-4 Course_Card">
            <Card style={{}}>
              <Card.Img
                variant="top"
                src={ICAEW}
                height="200px"
                className="cc"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. quick example text to build on
                  the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Enroll</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={6} className="mt-4 Course_Card">
            <Card style={{}}>
              <Card.Img
                variant="top"
                src={ICAEW}
                height="200px"
                className="cc"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. quick example text to build on
                  the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Enroll</Button>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
}
