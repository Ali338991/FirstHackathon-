import React,{useState} from "react";
import { FiUserPlus, FaVideo } from "react-icons/fi";
import { GiBookStorm } from "react-icons/gi";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../commonComponent/Loader";
import { doLogin } from "../../../store/actions/AuthActions";


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
    dispatch(doLogin(obj,history,setSpin));

    setEmail("");   
    setPassword("");   
    console.log("Check obj in Login form", obj);
  };

  if (Spin) {
    return (
    <Loader/>

    )
}

  return (
    <div>
      <div class="text-center mt-5 mb-2" style={{ fontSize: 30 }}>
        <GiBookStorm size={40} color="" style={{ marginRight: 10 }} />

        <span>Online Learning Management System</span>
      </div>
      <p class="text-center">
        <FiUserPlus
          size={25}
          color=""
          style={{ alignSelf: "center", marginBottom: 12 }}
        />
        <span style={{ fontSize: 25, marginLeft: 10 }}>User Area</span>
      </p>
      <Container fluid ClassName="justify-content-center">
        <div class="row justify-content-center mt-5">
          <Col lg={4} md={6} sm={8}>
            <Form.Text className=" p-2" style={{ float: "right" }}>
              Need an Account{" "}
              <Link to="/SignUp" ClassName="text-decoration-none text-black">
                SignUp
              </Link>
            </Form.Text>
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
                <Form.Text
                  className="text-muted text-decoration-none"
                  as={Link}
                  to="/forgetPassword"
                >
                  ?forget Password
                </Form.Text>
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
