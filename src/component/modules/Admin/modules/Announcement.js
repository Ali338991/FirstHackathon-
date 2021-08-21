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


import { useSelector, useDispatch } from "react-redux";
import { doAddAnnouncement, doDelAnnouncement } from "../../../store/actions/adminAction/AdminControlAction";
import Loader from "../../../commonComponent/Loader";

export default function Announcement() {
  const dispatch = useDispatch();

  const Announcement = useSelector((state) => state.AdminControlReducer?.Announcement);
  console.log("Announcementaaaaaaaaaaaaaaaaaa", Announcement);
  const [AnnouncementTitle, setAnnouncementTitle] = useState("");
  const [AnnouncementDescription, setAnnouncementDescription] = useState("");
  const [Spin, setSpin] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      AnnouncementTitle: AnnouncementTitle,
      AnnouncementDescription: AnnouncementDescription,
      Date: new Date().toLocaleString(),
      
    };
    console.log("Asd",obj);

    dispatch(doAddAnnouncement(obj, setSpin));

    setAnnouncementTitle("");
    setAnnouncementDescription("");
  };

  const Delete = (docId) => {
    dispatch(doDelAnnouncement(docId, setSpin));
  };

  if (Spin) {
    return <Loader />;
  }

  return (
    <div>
      <Container>
        <Form onSubmit={onSubmit}>
          <Row>
            <h3 className="pt-5 fw-bold text-center">Add Announcement</h3>

            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>Announcement Title</Form.Label>
                <Form.Control
                  type="text"
                  value={AnnouncementTitle}
                  onChange={(e) => {
                    setAnnouncementTitle(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>
                  Announcement Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  type="Text"
                  value={AnnouncementDescription}
                  style={{ height: "100px" }}
                  onChange={(e) => {
                    setAnnouncementDescription(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Button variant="outline-info" type="submit">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="text-center mt-5 mx-5">
          <p className="p-2 bg-dark text-white fs-4">List of Announcement</p>

          <Table responsive className="border">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Update Date</th>
                <th>Update Time</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Announcement?.map((item, index) => {
                
                return (
                  <tr>
                    <td>{index + 1} </td>
                    <td>{item.AnnouncementTitle} </td>
                    <td>{item.AnnouncementDescription} </td>
                    <td>{ new Date(item.Date).toLocaleDateString()}</td>
                    <td>{ new Date(item.Date).toLocaleTimeString()}</td>
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
