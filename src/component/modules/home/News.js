import React from "react";
import { Card, Row, Nav, Col, Container, Button } from "react-bootstrap";

export default function News() {
  return (
    <div className="Announcement_Section mt-1 sec2">
      <h3 className="text-center fs-1 fw-bold heaC2" id="L_News">Latest News</h3>

      <Container>
        <Row>
          <Col lg={4} md={4} sm={6} className="mt-4 Course_Card">
            <Card style={{}} className="Announcement">
              <Card.Body>
                <Card.Title className="text-center pb-3">
                  ICAEW Uploaded
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. quick example text to build on
                  the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Text className="text-muted pt-3">
                  Update 3 minutes ago
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
