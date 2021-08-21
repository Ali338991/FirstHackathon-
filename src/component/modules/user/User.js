import React, { useEffect, useState } from "react";
import {doUpdateLastSignTime, loadUserData } from "../../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Loader from "../../commonComponent/Loader";
import { Link, useHistory } from "react-router-dom";


import { storage } from "../../config/Firebase";

export default function User() {

 

  // For Check Course user enroll or not already
//   useEffect(() => {

  
// }, [])

  const [Spin, setSpin] = useState(false);



  const dispatch = useDispatch();
  const history = useHistory();



  if (Spin) {
    return <Loader />;
  }
  

  

  return (
    <div
     
    >
     User Panel
    </div>
  );
}
