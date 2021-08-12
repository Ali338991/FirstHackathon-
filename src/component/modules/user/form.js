// import React, { useState } from "react";
// import { FiUserPlus, FaVideo } from "react-icons/fi";
// import { GiBookStorm } from "react-icons/gi";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function SignUp() {
//   const [FName, setFName] = useState("");
//   const [LName, setLName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Phone, setPhone] = useState();
//   const [RegNo, setRegNo] = useState("");
//   const [MyCourse, setMyCourse] = useState("");
//   const [Password, setPassword] = useState();


//   const onSubmit = (e) => {
//     e.preventDefault();
//     const obj = {
//       FName: FName,
//       LName: LName,
//       Email: Email,
//       Phone: Phone,
//       RegNo: RegNo,
//       MyCourse: MyCourse,
//       Password: Password,
//     };
//     // dispatch(addPost(obj, Category));
    
//     console.log("ChekObj", obj);
//   };

//   return (
//     <div>
//       <div class="text-center mt-5 mb-2" style={{ fontSize: 30 }}>
//         <GiBookStorm size={40} color="" style={{ marginRight: 10 }} />

//         <span>Online Learning Management System</span>
//       </div>
//       <p class="text-center">
//         <FiUserPlus
//           size={25}
//           color=""
//           style={{ alignSelf: "center", marginBottom: 12 }}
//         />
//         <span style={{ fontSize: 25, marginLeft: 10 }}>User Area</span>
//       </p>
//       <Container fluid ClassName="justify-content-center">
//         <div class="row justify-content-center mt-5">
//           <Col lg={6} md={8} sm={10}>
//             <Form
//             onSubmit={onSubmit}
//               style={{ padding: 30, boxShadow: "0 1rem 3rem rgba(0,0,0,.175)" }}
//             >
//               <Row>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicText">
//                     <Form.Label style={{ fontSize: 20 }}>First Name</Form.Label>
//                     <Form.Control
//                       value={FName}
//                       onChange={(e) => {
//                         setFName(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Enter First Name"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicText">
//                     <Form.Label style={{ fontSize: 20 }}>Last Name</Form.Label>
//                     <Form.Control
//                       value={LName}
//                       onChange={(e) => {
//                         setLName(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Enter Last Name"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label style={{ fontSize: 20 }}>
//                       Email address
//                     </Form.Label>
//                     <Form.Control
//                       value={Email}
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                       }}
//                       type="email"
//                       placeholder="Enter email"
//                     />
//                     <Form.Text className="text-muted">
//                       We'll never share your email with anyone.
//                     </Form.Text>
//                   </Form.Group>
//                 </Col>

//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicNumber">
//                     <Form.Label style={{ fontSize: 20 }}>
//                       Phone Number
//                     </Form.Label>
//                     <Form.Control
//                       value={Phone}
//                       onChange={(e) => {
//                         setPhone(e.target.value);
//                       }}
//                       type="number"
//                       placeholder="Enter Phone Number"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicText">
//                     <Form.Label style={{ fontSize: 20 }}>
//                       Choose Course
//                     </Form.Label>
//                     <Form.Select
//                       value={MyCourse}
//                       onChange={(e) => {
//                         setMyCourse(e.target.value);
//                       }}
//                       aria-label="Default select example"
//                     >
//                       <option>Choose Course</option>
//                       <option>ICAEW</option>
//                       <option>ACCA</option>
//                       <option>OBU</option>
//                       <option>CMA</option>
//                       <option>CFA</option>
//                     </Form.Select>
//                   </Form.Group>
//                 </Col>

//                 <Col>
//                   <Form.Group className="mb-3" controlId="formBasicText">
//                     <Form.Label style={{ fontSize: 20 }}>
//                       Registration Number
//                     </Form.Label>
//                     <Form.Control
//                       value={RegNo}
//                       onChange={(e) => {
//                         setRegNo(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Enter Registration Number"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label style={{ fontSize: 20 }}>Password</Form.Label>
//                 <Form.Control
//                   value={Password}
//                   onChange={(e) => {
//                     setPassword(e.target.value);
//                   }}
//                   type="password"
//                   placeholder="Password"
//                 />
//                 <Form.Text
//                   className="text-muted text-decoration-none"
//                   as={Link}
//                   to="/forgetPassword"
//                 >
//                   ?forget Password
//                 </Form.Text>
//               </Form.Group>

//               <Button variant="outline-info" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </Col>
//         </div>
//       </Container>
//     </div>
//   );
// }
