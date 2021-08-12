import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./UserNavigationBar.css";
import { Link } from "react-router-dom";
import Test1 from '../../../assets/Testimonial/Tes1.jpg'
import { useSelector } from "react-redux";

export default function UserNavigationBar() {
  const user = useSelector(state => state.AuthReducer.user)
  const history = useHistory();
  return (
    <div  className="mar">
      <Navbar collapseOnSelect expand="lg"  variant="dark" fixed="top" className="bg-success" style={{fontWeight:"500"}}>
        <Container>
          <Navbar.Brand href="/" className="fw-bold heaC">
           AFTC
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="ms-5">
            <Nav
              className=""                   
              onSelect={(selectedKey) => history.push(selectedKey)}>
              <Nav.Link eventKey="/User" >Home</Nav.Link>
              <Nav.Link eventKey="MyCourses" color="red">
              My Courses
              </Nav.Link>
              <Nav.Link eventKey="News">News</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <img src={Test1} alt="UserProfile"  className="U_P_I"/>
              <p>Reg</p>
            </Nav>
           
            
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
