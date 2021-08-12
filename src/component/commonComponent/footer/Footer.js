import React from 'react'
import { Card, Row, Nav, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  IoLogoYoutube
} from "react-icons/io";

export default function Footer() {
    return (
        <div style={{}}>
        <Container fluid className="px-5 py-5 bgC mt-5"> 
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
                <a  target="_blank" href="https://www.facebook.com/ACCAvsOBUvsICAEW" className="">
                  <FaFacebook size={30} color="rgb(169, 169, 169)" />
                </a>
                <a  target="_blank" href="https://www.linkedin.com/company/accountancy-finance-training-centre" className="ms-3">
                  <FaLinkedin size={30} color="rgb(169, 169, 169)" />
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCDcJTWx-3e0sfyjYY5-nxmg" className="ms-3">
                  <IoLogoYoutube size={30} color="rgb(169, 169, 169)" />
                </a>
              
              </div>
            </Col>
            
            <Col lg={4} md={6} sm={12}>
              <h3 className="footer-heading  heaC1">Quick Navigation</h3>              
                
                  <Nav className="d-flex flex-column" >
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
             <p className="text-white"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> </Col>

          </Row>
        </Container>
        <div style={{ backgroundColor: "gray"}}>
          <h5 className="text-center py-3 text-white">
          COPYRIGHT © 2021 AFTC. ALL RIGHTS RESERVED.     
              
          <Link to="/Admin" className="Admin ms-1" >
               Admin
            </Link>
          </h5>
        
        </div>
      </div>
   
    )
}
