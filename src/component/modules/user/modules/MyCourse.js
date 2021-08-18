import React, { useState } from "react";
import {
  Navbar,
  Modal,
  Form,
  Nav,
  Row,
  Col,
  Card,
  Container,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import ICAEW from "../../../assets/Courses/CFA.png";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Marquee from "../../../commonComponent/Marquee";

export default function MyCourse() {
  const history = useHistory();
  const course = useSelector((state) => state.CoursesReducer.course);
  console.log("course", course);

  // Check Admin Permission Granted Or Not
  const filterUserCourse = course?.filter((item) => {
    if (item.request === true) {
      return item;
    }
  });

  return (
    <div style={{ minHeight: 450 }}>
      <Container>
        {course.length != 0 ? (
          <>
            <div className="mt-2">
              <Button
                variant="success"
                onClick={() => history.push("/User/AddCourse")}
              >
                <BsPlus size={25} style={{ marginBottom: 3 }} />
                Add Course
              </Button>
              <span
                style={{ float: "right", fontFamily: "cursive", fontSize: 25 }}
              >
                {" "}
                Total Course <span className="fw-bold">
                  {course.length}
                </span>{" "}
              </span>
            </div>
            {filterUserCourse.length < course.length ? (
              <Marquee title="Your request is pending" />
            ) : (
              <></>
            )}

            <Row>
              {filterUserCourse.map((item) => {
                return (
                  <Col lg={4} md={4} sm={6} className="mt-4 Course_Card">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={ICAEW}
                        height="200px"
                        className="cc"
                      />
                      <Card.Body>
                        <Card.Title>Course Description</Card.Title>
                        <Card.Text>{item.Course}</Card.Text>

                        <Link
                          to={`/detail/${item.docId}`}
                          class="btn btn-block btn-outline-success"
                        >
                          Open
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </>
        ) : (
          <div
            style={{ textAlign: "center", marginTop: 200 }}
            class="shadow p-5"
          >
            <h2 style={{ fontFamily: "cursive" }}>
              Currently, You are not enroll in any course.
            </h2>
            <Button
              variant="success"
              onClick={() => history.push("/User/AddCourse")}
            >
              <BsPlus size={25} style={{ marginBottom: 3 }} />
              Add Course
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
