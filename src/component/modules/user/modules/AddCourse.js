import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Loader from "../../../commonComponent/Loader";
import { Link, useHistory } from "react-router-dom";
import { doS_addCourse } from "../../../store/actions/CoursesAction";
export default function AddCourse() {
    const uid = useSelector(state => state.AuthReducer.user?.uid)
    const course = useSelector(state => state.CoursesReducer.course)
  const userData = useSelector((state) => state.AuthReducer.userData);

    console.log("course",course);
    console.log("userData",userData);


    const [RegNo, setRegNo] = useState();
    const [MyCourse, setMyCourse] = useState();
    const [Spin, setSpin] = useState(false);
  const courseList = ["ICAEW", "CFA","asd"];

  
    const dispatch = useDispatch();
    const history = useHistory();


  
    const onSubmit = (e) => {
      e.preventDefault();     
      const obj = {
        RegNo: RegNo,
        Course: MyCourse,
        uid: uid,
       
      };
      if (RegNo === "" || MyCourse === "Select") {
        return alert("All Fields Required");
      }

      if (course.length != 0) {       
        const result = course.find( ({ Course }) => Course === MyCourse );
        console.log("result",result?.Course);
        if (result?.Course === MyCourse) {    
            return(
            alert("You already sent request of this Course")
            )        
        }
          
      }
      setTimeout(() => {
       dispatch(doS_addCourse(obj,history,setSpin,userData))

        
      }, 500);

     
    };
    if (Spin) {
      return <Loader />;
    }
    return (
        <div className="mt-5 mb-5 ">
            <h2 className="text-center py-5">Add Course</h2>
      <Container>
        <Form onSubmit={onSubmit} className="shadow p-5 ">
          <Row>
            <Col  xs={12} md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>
                  Registration Number
                </Form.Label>
                <Form.Control
                  type="text"
                  value={RegNo}
                  placeholder="Enter University Registration Number"
                  onChange={(e) => {
                    setRegNo(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col  xs={12} md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>Select Course</Form.Label>

                <Form.Select
                  onChange={(e) => {
                    setMyCourse(e.target.value);
                  }}
                >
                  <option>Select</option>
                  {courseList.map((item) => {
                    return <option>{item}</option>;
                  })}
                </Form.Select>
              </Form.Group>
            </Col>

         
            <Col  xs={12} md={{ span: 6, offset: 3 }}>
              <Button variant="outline-success" type="submit">
                Send Request to Admin
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
    )
}
