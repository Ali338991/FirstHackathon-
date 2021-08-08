import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  Card,
  Row,
  Col,
  FloatingLabel,
  Container,
  Button,
} from "react-bootstrap";
// import Pic2 from "../../../assets/HomePhotos/Pic3.jpeg";
import { AiOutlineDownload, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./AddPic.css";
import { storage } from "../../../config/Firebase";
import { addPost } from "../../../store/actions/AddPicAction";

export default function AddPic() {
  const dispatch = useDispatch();
  const [Trending, setTrending] = useState(true);
  const [IMG, setIMG] = useState();
  const [FileUrl, setFileUrl] = useState();
  const [Category, setCategory] = useState("");
  const [Line1, setLine1] = useState("");
  const [Line2, setLine2] = useState("");

  const handleImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setIMG(URL.createObjectURL(file));
    const storageRef = storage.ref(`${Category}/`);
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      ImageUrl: FileUrl,
      Category: Category,
      Line1: Line1,
      Line2: Line2,
    };
    dispatch(addPost(obj, Category));
    setIMG();
    setCategory("");
    setLine1("");
    setLine2("");
    console.log("ChekObj", obj);
  };
  return (
    <div className="AddPicMain">
      <Row>
        <Col
          lg={{ span: 3, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          sm={{ span: 5, offset: 3 }}
          xs={{ span: 12, offset: 0 }}
        >
          <Card>
            <Card.Img variant="top" src={IMG} height="350px" />
          </Card>
        </Col>

        <Col lg={7}>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => handleImageChange(e)}
              />
            </Form.Group>{" "}
            <Form.Select
              aria-label="Default select example"
              value={Category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option>Choose Category</option>
              <option>RomanticPic</option>
              <option>HotPic</option>
              <option>Three</option>
            </Form.Select>
            <br />
            <FloatingLabel
              controlId="floatingTextarea"
              label="Poetry Line One"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                value={Line1}
                onChange={(e) => {
                  setLine1(e.target.value);
                }}
              />
            </FloatingLabel>
         
            <br />
            <FloatingLabel
              controlId="floatingTextarea"
              label="Poetry Line Two"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                value={Line2}
                onChange={(e) => {
                  setLine2(e.target.value);
                }}
              />
            </FloatingLabel>
            <br />
            <div className="d-grid">
              <Button variant="primary" size="lg" type="submit">
                Upload
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <br />
    </div>
  );
}
