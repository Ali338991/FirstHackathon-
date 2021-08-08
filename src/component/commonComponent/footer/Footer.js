import React from 'react'
import { Card, Row, Nav, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
    return (
        <div style={{}}>
        <Container fluid className="px-5 py-5 bg-dark mt-5"> 
          <Row className="justify-content-lg-center">
            <Col lg={3} md={6} sm={12}>
              <h3 className="footer-heading">Private</h3>
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
                <Link to="/Login" className="">
                  <FaFacebook size={30} color="rgb(169, 169, 169)" />
                </Link>
                <Link to="/Login" className="ms-3">
                  <FaTwitter size={30} color="rgb(169, 169, 169)" />
                </Link>
                <Link to="/Login" className="ms-3">
                  <FaInstagramSquare size={30} color="rgb(169, 169, 169)" />
                </Link>
                <Link to="/Login" className="ms-3">
                  <FaPinterest size={30} color="rgb(169, 169, 169)" />
                </Link>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <h3 className="footer-heading">Apps</h3>
              <Nav className="d-flex flex-column">
                <Link to="/" className="footer-link ">
                  Android App
                </Link>
              </Nav>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <h3 className="footer-heading text-center">Free Photos</h3>
              <Row>
                <Col className="">
                  <Nav className="d-flex flex-column">
                    <Link to="/DpStock" className="footer-link ">
                      DpStock
                    </Link>
                    <Link to="/G-RomanticPicture" className="footer-link">
                      Gallery Picture
                    </Link>
                    <Link to="/G-RomanticVideo" className="footer-link">
                      Gallery Video
                    </Link>
                    <Link to="/G-HotPic" className="footer-link">
                      Gallery HotPic
                    </Link>
                    <Link to="/G-HotVideo" className="footer-link">
                      Gallery HotVideo
                    </Link>
                  </Nav>
                </Col>
                <Col className="">
                  <Nav className="d-flex flex-column">
                    <Link to="/Poetry" className="footer-link ">
                      Poetry
                    </Link>
                    <Link to="/RomanticPic" className="footer-link">
                      RomanticPic
                    </Link>
                    <Link to="/RomanticVideos" className="footer-link">
                      Romantic Videos
                    </Link>
                    <Link to="/HotPic" className="footer-link">
                      HotPic
                    </Link>
                    <Link to="/HotVideo" className="footer-link">
                      HotVideo{" "}
                    </Link>
                  </Nav>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div style={{ backgroundColor: "gray" }}>
          <h5 className="text-center py-3 text-white">
            All right reserved
            <Link to="/Admin" className="Admin ms-1">
               Admin
            </Link>
          </h5>
        </div>
      </div>
   
    )
}
