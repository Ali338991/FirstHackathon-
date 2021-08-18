import React,{useState} from "react";
import { FiUserPlus, FaVideo } from "react-icons/fi";
import { GiBookStorm } from "react-icons/gi";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../commonComponent/Loader";
import { doAdminLogin } from "../../../store/actions/adminAction/AdminLoginAction";


export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState();
  const [Spin, setSpin] = useState(false)


  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = { 
      Email: Email,
      Password: Password,
    };

    if (Email === "" || Password === "") {
      return(
        alert("All Fields Required")
      )
      
    }

    if (Email != "Noman@gmail.com") {
      return(
        alert("Email Invalid")
      )
      
    }
   

    dispatch(doAdminLogin(obj,history,setSpin));

    setEmail("");   
    setPassword("");   
  };

  if (Spin) {
    return (
    <Loader/>

    )
}

  return (
    <div >
      <div class="text-center mt-5 mb-2 " style={{ fontSize: 30 }}>
        <GiBookStorm size={40} color="" style={{ marginRight: 10 }} />

        <span>Online Learning Management System</span>
      </div>
      <p class="text-center">
        <FiUserPlus
          size={25}
          color=""
          style={{ alignSelf: "center", marginBottom: 12 }}
        />
        <span style={{ fontSize: 25, marginLeft: 10 }}>Admin Login</span>
      </p>
      <Container fluid ClassName="justify-content-center">
        <div class="row justify-content-center mt-5">
          <Col lg={4} md={6} sm={8}>
           
            <Form
             onSubmit={onSubmit}
              style={{ padding: 30, boxShadow: "0 1rem 3rem rgba(0,0,0,.175)" }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: 20 }}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontSize: 20 }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                 onChange={(e) => {
                    setPassword(e.target.value);
                  }}/>
               
              </Form.Group>

              <Button variant="outline-info" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </div>
      </Container>
    </div>
  );
}
