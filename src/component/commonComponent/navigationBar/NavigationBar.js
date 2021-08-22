import React,{useState} from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const history = useHistory();
  const [show, setShow] = useState(false);

  return (
    <div  className="mar">
      <Navbar collapseOnSelect expand="lg"  variant="dark" fixed="top" className="bgC" style={{fontWeight:"500"}}>
        <Container>
          <Navbar.Brand href="/" className="fw-bold heaC">
           Resturant
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav
              className="ms-auto"                   
              onSelect={(selectedKey) => history.push(selectedKey)}>
              <Nav.Link eventKey="/" >Home</Nav.Link>
              <Nav.Link eventKey="AboutUs" color="red">
              About Us
              </Nav.Link>
              <Nav.Link eventKey="News">News</Nav.Link>

           
            </Nav>
            <Nav className="ms-3">
            <Nav.Link as={Link} to="/Login" style={{backgroundColor:"#030301", color:"white",borderRadius:10,textAlign:"center"}}>Join</Nav.Link>

            </Nav>
            
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
