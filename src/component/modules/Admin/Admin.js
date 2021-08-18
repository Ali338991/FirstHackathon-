import React, { useEffect } from "react";
import AdminNavigationBar from "./adminNavigationBar/AdminNavigationBar";
import { Form } from "react-bootstrap";
import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../commonComponent/Loader";
// import Marquee from "";

import { Card, Table, Row, Col, Container, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  doAcceptRequest,
  doDeleteRequest,
  doGetCourseByAdmin,
  doGetSubscriber,
  doGetUserByAdmin,
} from "../../store/actions/adminAction/GetDataAction";
export default function Admin() {
  useEffect(() => {
    dispatch(doGetCourseByAdmin(setSpin));
    dispatch(doGetSubscriber(setSpin));
    dispatch(doGetUserByAdmin(setSpin));
  }, []);
  const userCourse = useSelector((state) => state.GetDataReducer.userCourse);
  const OurSubscriber = useSelector(
    (state) => state.GetDataReducer.OurSubscriber
  );
  const User = useSelector((state) => state.GetDataReducer.User);
  console.log("userCourse", userCourse);
  // get request about to be Assigned
  const filterUserCourse = userCourse?.filter((item) => {
    if (item.request === false) {
      return item;
    }
  });
  // get Data of course Assigned User

  const filterAcceptUser = userCourse?.filter((item) => {
    if (item.request === true) {
      return item;
    }
  });


  const dispatch = useDispatch();
  const [Trending, setTrending] = useState(true);
  const [Spin, setSpin] = useState(false);

  if (Spin) {
    return <Loader />;
  }
  // For Accept request
  const Accept = (docId) => {
    dispatch(doAcceptRequest(docId, setSpin));
  };
  // For Delete request
  const Delete = (docId) => {
    dispatch(doDeleteRequest(docId, setSpin));
  };

  return (
    <div className="py-3">
      <Container>
      <Row>
          <Col xs={12} sm={4}>
            <Card
              className="bg-dark mt-3"
              style={{ height: 200, borderRadius: 10 }}
            >
              <Card.Header className="text-center py-3 text-white">
                Our Subscriber
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center text-white">
                  {OurSubscriber?.length}
                </Card.Title>
                <div className="text-center">
                  <Link class="btn text-white ">View</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card
              className="bg-info mt-3"
              style={{ height: 200, borderRadius: 10 }}
            >
              <Card.Header className="text-center py-3 text-white">
                User List
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center text-white">
                  {" "}
                  {User?.length}
                </Card.Title>
                <div className="text-center">
                  <Link class="btn text-white ">View</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card
              className="bg-success mt-3"
              style={{ height: 200, borderRadius: 10 }}
            >
              <Card.Header className="text-center py-3 text-white">
                Course Assigned
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center text-white">
                  {filterAcceptUser?.length}
                </Card.Title>
                <div className="text-center">
                  <Link class="btn text-white ">View</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5 mx-5">
          <p className="p-2 bg-dark text-white">List of User Request</p>

          <Table responsive>
            <thead>
              <tr>
                <th>uid</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Reg-No</th>
                <th>Course</th>
                <th>Accept</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filterUserCourse?.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1} </td>
                    <td>{item.Name} </td>
                    <td>{item.Email} </td>
                    <td>{item.Phone} </td>
                    <td>{item.RegNo} </td>
                    <td>{item.Course} </td>
                    <td>
                      <FiCheckCircle
                        size={35}
                        className="ABC"
                        onClick={() => Accept(item.docId)}
                      />
                    </td>
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
