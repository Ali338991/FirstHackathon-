import React from "react";
import { Card, Row, Nav, Col, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import './Home.css'
import ReactTimeAgo from 'react-time-ago'
import { Link } from "react-router-dom";
import { right } from "@popperjs/core";
import Color from "color";

export default function News() {
  const news = useSelector((state) => state.AdminControlReducer?.news);
const date = new Date()
  return (
    <div className=" mt-1 " style={{minHeight:400}}>
      <h3 className="text-center fs-1 fw-bold heaC2" id="L_News">
        Latest News
      </h3>

      <Container>
        <Row>
        {news?.length === 0 ?
          <h5> Currently there are no Latest News</h5>
        :
        news?.map((item) => {
          return (
            <Col lg={4} md={4} sm={6} className="mt-4 Course_Card">
              <Card style={{}} className="News">
                <Card.Body>
                  <Card.Title className="text-center pb-3" style={{borderBottom:  '1px solid rgba(0, 0, 0, 0.05)'}}>
                    {item.NewsTitle}
                  </Card.Title>
                  <Card.Text style={{ minHeight: 150, }}>
                  {item.NewsDescription} 
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
        {/* <Link to="/AllNews" style={{float:"right", textDecoration:"none",backgroundColor:"#25254b",color:"white",padding:10}}>All News</Link> */}
      </Container>
    </div>
  );
}
