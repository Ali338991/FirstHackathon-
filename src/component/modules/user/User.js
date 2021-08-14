import React, { useEffect, useState } from "react";
import { loadUserData } from "../../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Loader from "../../commonComponent/Loader";
import { Link, useHistory } from "react-router-dom";
import { doUpdateProfile } from "../../store/actions/ProfileAction";
import Profile from '../../assets/Profile.png'
import { storage } from "../../config/Firebase";
export default function User() {
  const userData = useSelector((state) => state.AuthReducer.userData);
  const docId = userData.docId;

 
  
  const [Email, setEmail] = useState(userData.Email);
  const [Name, setName] = useState(userData.Name);
  const [Phone, setPhone] = useState(userData.Phone);
  const [RegNo, setRegNo] = useState(userData.RegNo);
  const [MyCourse, setMyCourse] = useState(userData.MyCourse);
  const [Spin, setSpin] = useState(false);
  const [IMG, setIMG] = useState();
  const [FileUrl, setFileUrl] = useState();
  const [File, setFile] = useState()

  const dispatch = useDispatch();
  const history = useHistory();

  const handleImageChange = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const file = e.target.files[0];
    setIMG(URL.createObjectURL(file));
    const storageRef = storage.ref("/");
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    console.log("PicURL",FileUrl);

   
  };


  const onSubmit = async (e) => {
    e.preventDefault();
 


    if (Name === "" || Phone === "") {
      return alert("All Fields Required");
    }
    

    const obj = {
      Name: Name,
      Phone: Phone,
     
    };
    // console.log("Check obj in USERUPDAATE form", obj.photoURL);

    dispatch(doUpdateProfile(obj, history, setSpin, docId));

    // console.log("Check obj in USERUPDAATE form", obj);
  };
  if (Spin) {
    return (
    <Loader/>

    )
}
  return (
    <div className="mt-5 ">
      <Container>
        {/* <div className="text-center mb-3">
          <img src={IMG} alt="Profile"  style={{width:100,height:100,borderRadius:50}} />
          <input type="file" style={{}} onChange={(e) => handleImageChange(e)} />
        </div> */}
        <Form onSubmit={onSubmit}>
          <Row>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: 20 }}>Email address</Form.Label>
                <Form.Control type="email" value={Email} readOnly />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={Name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>My Course</Form.Label>
                <Form.Control type="Text" value={MyCourse} readOnly />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label style={{ fontSize: 20 }}>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  value={Phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label style={{ fontSize: 20 }}>
                  Registration Number
                </Form.Label>
                <Form.Control type="text" value={RegNo} readOnly />
              </Form.Group>
            </Col>

            <Button variant="outline-info" type="submit">
              Update
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
