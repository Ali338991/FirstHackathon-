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
import { doAddNews, doDelNews } from "../../../store/actions/adminAction/AdminControlAction";
import Loader from "../../../commonComponent/Loader";

export default function News() {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.AdminControlReducer?.news);
  console.log("Newsaaaaaaaaaaaaaaaaaa", news);
  const [NewsTitle, setNewsTitle] = useState("");
  const [NewsDescription, setNewsDescription] = useState("");
  const [Spin, setSpin] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      NewsTitle: NewsTitle,
      NewsDescription: NewsDescription,
      Date: new Date().toLocaleString(),
      
    };
    console.log("Asd",obj);

    dispatch(doAddNews(obj, setSpin));

    setNewsTitle("");
    setNewsDescription("");
  };

  const Delete = (docId) => {
    dispatch(doDelNews(docId, setSpin));
  };

  if (Spin) {
    return <Loader />;
  }

  return (
    <div>
      <Container>
        <Form onSubmit={onSubmit}>
          <Row>
            <h3 className="pt-5 fw-bold text-center">Add Latest News</h3>

            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>News Title</Form.Label>
                <Form.Control
                  type="text"
                  value={NewsTitle}
                  onChange={(e) => {
                    setNewsTitle(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>
                  News Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  type="Text"
                  value={NewsDescription}
                  style={{ height: "100px" }}
                  onChange={(e) => {
                    setNewsDescription(e.target.value);
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
          <p className="p-2 bg-dark text-white fs-4">List of News</p>

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
              {news?.map((item, index) => {
                
                return (
                  <tr>
                    <td>{index + 1} </td>
                    <td>{item.NewsTitle} </td>
                    <td>{item.NewsDescription} </td>
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
