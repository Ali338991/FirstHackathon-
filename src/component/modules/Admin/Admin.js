import React, { useEffect } from "react";

import { Form } from "react-bootstrap";
import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../commonComponent/Loader";
// import Marquee from "";

import { Card, Table, Row, Col, Container, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Admin() {
  const dispatch = useDispatch();
  const [Spin, setSpin] = useState(false);

  if (Spin) {
    return <Loader />;
  }


  return (
    <div>
     Admin Panel
    </div>
  );
}
