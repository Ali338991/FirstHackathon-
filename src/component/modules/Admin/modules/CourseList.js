import React, { useState, useEffect } from "react";
import {
  Card,
  Table,
  Row,
  Col,
  Container,
  Button,
  Form,
} from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import ModalAlert from "./ModalAlert";

import { useSelector, useDispatch } from "react-redux";
import {
  doAddCourseList,
  doAddNews,
  doDelCourseList,
  doDelNews,
} from "../../../store/actions/adminAction/AdminControlAction";
import Loader from "../../../commonComponent/Loader";

export default function CourseList() {
  const dispatch = useDispatch();

  const GetCourseList = useSelector((state) => state.AdminControlReducer?.GetCourseList);

  console.log("zxfgkhljbvc bxfdxdcfvhbgjhkjl",GetCourseList);

  const [CourseList, setCourseList] = useState("");
  const [Spin, setSpin] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setModalShow(false);

    const obj = {
      CourseName: CourseList,
      Date: new Date().toLocaleString(),
    };

dispatch(doAddCourseList(obj,setSpin))

    setCourseList("");
  };

  const Delete = (docId) => {
    dispatch(doDelCourseList(docId, setSpin));
  };

  if (Spin) {
    return <Loader />;
  }

  return (
    <div>
      <ModalAlert
        show={modalShow}
        submit={onSubmit}
        detail="Please Confirm Course name you cannot edit after submit."
        onHide={() => setModalShow(false)}
      />
      <Container>
        <Form>
          <Row>
            <h3 className="pt-5 fw-bold text-center">Add New Course</h3>

            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>Course Name</Form.Label>
                <Form.Control
                  type="text"
                  value={CourseList}
                  onChange={(e) => {
                    setCourseList(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Button variant="success" onClick={() => setModalShow(true)}>
                Add
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="text-center mt-5 mx-5">
          <p className="p-2 bg-dark text-white fs-4">List of Course</p>

          <Table responsive className="border">
            <thead>
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Added Date</th>
                <th>Added Time</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {GetCourseList?.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1} </td>
                    <td>{item.CourseName} </td>                   
                    <td>{new Date(item.Date).toLocaleDateString()}</td>
                    <td>{new Date(item.Date).toLocaleTimeString()}</td>
                    <td>
                      <RiDeleteBinLine
                        size={40}
                        className="ABD"
                        onClick={() => Delete(item.docId)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}
