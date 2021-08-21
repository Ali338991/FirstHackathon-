import React from "react";
import { Navbar, Nav, Container,Button, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



import "./AdminNavigationBar.css";
import { Link } from "react-router-dom";
import { doAdminLogout } from "../../../store/actions/adminAction/AdminLoginAction";

export default function AdminNavigationBar() {
  const history = useHistory();
  const dispatch = useDispatch()

  const Logout =()=>{
    dispatch(doAdminLogout())
   

  }
  const GetCourseList = useSelector((state) => state.AdminControlReducer?.GetCourseList);

  return (
    
    <div  className="">
    <Navbar collapseOnSelect expand="lg"  variant="dark"  className="bg-dark" style={{fontWeight:"500"}}>
      <Container>
        <Navbar.Brand href="/" className="fw-bold heaC">
         AFTC
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="ms-5">
          <Nav
            className=""                   
            onSelect={(selectedKey) => history.push(selectedKey)}>
            <Nav.Link eventKey="/Admin">Home</Nav.Link>
            <Nav.Link eventKey="/Admin/News" color="red">
            News
            </Nav.Link>
            <Nav.Link eventKey="/Admin/Announcement" color="red">
            Announcement
            </Nav.Link>
            <Nav.Link eventKey="/Admin/CourseList" color="red">
            CourseList
            </Nav.Link>
            <Nav.Link eventKey="/Admin/UpComingCourse" color="red">
            UpComing Course
            </Nav.Link>
            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              {GetCourseList?.map((item)=>{
                return(
                <>
                  <NavDropdown.Item eventKey={item.CourseName} >{item.CourseName}</NavDropdown.Item>              
                  <NavDropdown.Divider />
                  </>
                )
              })}
              
                      
              </NavDropdown>

            <Nav.Link  onClick={Logout}>Logout</Nav.Link>


          </Nav>
          

          <Nav className="ms-auto">
       
            
          </Nav>
         
          
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
    
  );
}
