import React from 'react'
import { useParams } from "react-router-dom";
import {
    Navbar,
    Modal,
    Form,
    Nav,
    Row,Col,
    Card,
    Container,
    Button,
    NavDropdown,
  } from "react-bootstrap";


export default function DetailCourse() {
const { id } = useParams();

    return (
        <div>
            <Container>
            <h2 className="text-center py-3" style={{fontFamily:"cursive"}}>Course Details</h2>
            

                

            </Container>
        </div>
    )
}
