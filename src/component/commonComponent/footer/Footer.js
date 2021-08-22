import React, { useState } from "react";
import { Card, Row, Nav, Col, Container, Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useDispatch } from "react-redux";

import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { doSubscribe } from "../../store/actions/AuthActions";

export default function Footer() {
  const dispatch = useDispatch();
  const [Subscription, setSubscription] = useState();
  const subscribe = (e) => {
    e.preventDefault();
    if(Subscription === ""){
      return (
        alert("Email is necessary")
      )
    }
    dispatch(doSubscribe(Subscription));
    setSubscription("");
  };

  return (
    <div style={{marginTop:30}}>
      <Container fluid className="px-5 py-5 bgC ">
        <Row className="justify-content-lg-center">
          <Col lg={4} md={6} sm={12}>
            <h3 className="footer-heading heaC1">AFTC</h3>
            <Nav className="d-flex flex-column">
              <Link to="/" className="footer-link ">
                About
              </Link>
              <Link to="/" className="footer-link">
                Blog
              </Link>
              <Link to="/" className="footer-link">
                FAQ
              </Link>
              <Link to="/" className="footer-link">
                Contact
              </Link>
            </Nav>
            <div className="pt-2 d-flex ">
              <a
                target="_blank"
                href="https://www.facebook.com/ACCAvsOBUvsICAEW"
                className=""
              >
                <FaFacebook size={30} color="rgb(169, 169, 169)" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/accountancy-finance-training-centre"
                className="ms-3"
              >
                <FaLinkedin size={30} color="rgb(169, 169, 169)" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCDcJTWx-3e0sfyjYY5-nxmg"
                className="ms-3"
              >
                <IoLogoYoutube size={30} color="rgb(169, 169, 169)" />
              </a>
            </div>
            <Form onSubmit={subscribe}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
             
                <Form.Control type="email"  value={Subscription} placeholder="Enter email" className="mt-3" onChange={(e) => {
                setSubscription(e.target.value);
              }}/>
                
              </Form.Group>
              <Button variant="outline-success" type="submit">
              Subscribe
            </Button>
            </Form>

          
          </Col>

          <Col lg={4} md={6} sm={12}>
            <h3 className="footer-heading  heaC1">Quick Navigation</h3>

            <Nav className="d-flex flex-column">
              <Link to="/News" className="footer-link ">
                News
              </Link>
              <Link to="/ICAEW" className="footer-link">
                ICAEW
              </Link>
              <Link to="/ACCA" className="footer-link">
                ACCA
              </Link>
              <Link to="/OBU" className="footer-link">
                OBU
              </Link>
              <Link to="/CMA" className="footer-link">
                CMA
              </Link>
              <Link to="/CFA" className="footer-link ">
                CFA
              </Link>
            </Nav>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <h3 className="footer-heading heaC1">Our Introduction</h3>
            <p className="text-white">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>{" "}
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: "gray" }}>
        <h5 className="text-center py-3 text-white">
          COPYRIGHT © 2021 AFTC. ALL RIGHTS RESERVED.
          <Link to="/AdminLogin" className="Admin ms-1 fs-12">
            Admin
          </Link>
        </h5>
      </div>
    </div>
  );
}
