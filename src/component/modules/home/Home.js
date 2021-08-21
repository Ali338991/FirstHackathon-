import React, { useState, useEffect } from "react";
import "./Home.css";
import HomeCarousel from "./HomeCarousel";
import { useDispatch } from "react-redux";
import { Card, Row, Nav, Col, Modal, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";
import Courses from "./Courses";
import { loadData } from "../../store/actions/AddPicAction";
import ICAEW from "../../assets/Courses/ICAEW.jpg";
import Announcement from "./Announcement";
import Marquee from "../../commonComponent/Marquee";
import Testimonial from "./testimonial/Testimonial";
import News from "./News";

export default function Home() {
  const [Trending, setTrending] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      handleShow();
    }, 700);
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const news = useSelector((state) => state.AdminControlReducer?.news);

  return (
    <div style={{}}>
      {/* Modal For Latest News */}
      <>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Latest News</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {news?.map((item) => {
              return (
                <>
                  <a
                    href="#L_News"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "#25254b",
                    }}
                  >
                    {item.NewsTitle}                  
                  </a>
                  <br />
                </>
              );
            })}
          </Modal.Body>

          <Marquee title="Latest News From AFTC" />
        </Modal>
      </>
      {/* End Modal  */}

      <Marquee title="Live Online Session Available" />
      <HomeCarousel />
      <Announcement />
      <Courses />
      <Testimonial />
      <News />
    </div>
  );
}
