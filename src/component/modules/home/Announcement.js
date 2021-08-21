import React from "react";
import { Card, Row, Nav, Col, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ReactTimeAgo from 'react-time-ago'


export default function Announcement() {
  const Announcement = useSelector(
    (state) => state.AdminControlReducer?.Announcement
  );

  return (
    <div className="Announcement_Section  sec1 " style={{minHeight:400}}>
      <h3 className="text-center fs-1 fw-bold heaC1">Announcement</h3>

      <Container>
        <Row>
          {Announcement?.length === 0 ?
          <h5> Currently there are no Announcement</h5>
        :
        Announcement?.map((item) => {
          return (
            <Col lg={4} md={4} sm={6} className="mt-4 Course_Card">
              <Card style={{}} className="Announcement">
                <Card.Body>
                  <Card.Title className="text-center pb-3">
                   {item.AnnouncementTitle}
                  </Card.Title>
                  <Card.Text style={{ minHeight: 150}}>
                   
                   {item.AnnouncementDescription}
                  </Card.Text>
                  <Card.Text className="text-muted pt-3">
                  <ReactTimeAgo date={item.Date} locale="en-US" timeStyle="round" />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
        }
        </Row>
      </Container>
    </div>
  );
}
