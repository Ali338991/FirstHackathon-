import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const history = useHistory();
  return (
    <div  className="mar">
      <Navbar collapseOnSelect expand="lg"  variant="dark" fixed="top" className="bgC" style={{fontWeight:"500"}}>
        <Container>
          <Navbar.Brand href="/" className="fw-bold heaC">
           AFTC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
            <Nav
              className=""                   
              onSelect={(selectedKey) => history.push(selectedKey)}>
              <Nav.Link eventKey="/" >Home</Nav.Link>
              <Nav.Link eventKey="AboutUs" color="red">
              About Us
              </Nav.Link>
              <Nav.Link eventKey="News">News</Nav.Link>

              {/* ICAEW */}
           

              <NavDropdown title="ICAEW" id="collasible-nav-dropdown">
                <NavDropdown.Item eventKey="ICAEWLevel1" >ICAEW-Level-1</NavDropdown.Item>              
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="ICAEWLevel2">ICAEW-Level-2</NavDropdown.Item>             
              </NavDropdown>

              {/* ACCA */}

              <NavDropdown title="ACCA" id="collasible-nav-dropdown">
                <NavDropdown.Item eventKey="ACCALevel1" >ACCA-Level-1</NavDropdown.Item>              
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="ACCALevel2">ACCA-Level-2</NavDropdown.Item>             
              </NavDropdown>

              {/* OBU */}

              <NavDropdown title="OBU" id="collasible-nav-dropdown">
                <NavDropdown.Item eventKey="OBULevel1" >OBU-Level-1</NavDropdown.Item>              
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="OBULevel2">OBU-Level-2</NavDropdown.Item>             
              </NavDropdown>
              
              {/* CMA */}

              <NavDropdown title="CMA" id="collasible-nav-dropdown">
                <NavDropdown.Item eventKey="CMALevel1" >CMA-Level-1</NavDropdown.Item>              
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="CMALevel2">CMA-Level-2</NavDropdown.Item>             
              </NavDropdown>

              {/* CFA  */}

              <NavDropdown title="CFA" id="collasible-nav-dropdown">
                <NavDropdown.Item eventKey="CFALevel1" >CFA-Level-1</NavDropdown.Item>              
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="CFALevel2">CFA-Level-2</NavDropdown.Item>             
              </NavDropdown>
              <Nav.Link eventKey="OurTeam">Our Team</Nav.Link>
              <Nav.Link eventKey="ContactUs">Contact Us</Nav.Link>
            </Nav>
            <Nav className="ms-3">
            <Nav.Link as={Link} to="/Login" style={{backgroundColor:"#D5AC4E", color:"white",borderRadius:10,textAlign:"center"}}>Join</Nav.Link>

            </Nav>
            
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
