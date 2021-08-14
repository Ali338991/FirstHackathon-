import React from "react";
import { Navbar, Nav, Container,Button, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./UserNavigationBar.css";
import { Link } from "react-router-dom";
import Profile from '../../../assets/Profile.png'
import { useSelector, useDispatch } from "react-redux";
import { doLogout } from "../../../store/actions/AuthActions";


export default function UserNavigationBar() {
  const user = useSelector(state => state.AuthReducer.user)
  console.log("UsN",user);
  const history = useHistory();
  const dispatch = useDispatch()

  const Logout =()=>{
    dispatch(doLogout())

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
              className=""                   
              onSelect={(selectedKey) => history.push(selectedKey)}>
              <Nav.Link eventKey="/User" >Profile</Nav.Link>
              <Nav.Link eventKey="MyCourses" color="red">
              My Courses
              </Nav.Link>
              <Nav.Link eventKey="/User/ChangePassword">ChangePassword</Nav.Link>
            <Nav.Link  onClick={Logout}>Logout</Nav.Link>


            </Nav>
            

            <Nav className="ms-auto">
              {/* {(user.photoURL !== null)?
              <img src={user.photoURL} alt="UserProfile"  className="U_P_I"/>
              :
              <img src={Profile} alt="UserProfile"  className="U_P_I"/>
              
            } */}
              
            </Nav>
           
            
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
