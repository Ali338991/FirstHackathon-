import React from "react";
import { Navbar, Nav, Container,Button, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./UserNavigationBar.css";
import { Link } from "react-router-dom";
import Profile from '../../../assets/Profile.png'
import { doLogout } from "../../../store/actions/AuthActions";


export default function UserNavigationBar() {
  const photoURL = useSelector(state => state.AuthReducer.user?.photoURL)
  console.log("C_photoURL",photoURL);
  const history = useHistory();
  const dispatch = useDispatch()

  const Logout =()=>{
    dispatch(doLogout(history))
   

  }
  return (
    <div  className="">
      <Navbar collapseOnSelect expand="lg"  variant="dark"  className="bg-success" style={{fontWeight:"500"}}>
        <Container>
          <Navbar.Brand href="/" className="fw-bold heaC">
           AFTC
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="ms-5">
            <Nav                               
              onSelect={(selectedKey) => history.push(selectedKey)}>
              <Nav.Link eventKey="/User" >Profile</Nav.Link>
            
            <Nav.Link  onClick={Logout}>Logout</Nav.Link>


            </Nav>
         
           
            
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
