import React, { useState,useEffect } from "react";

import { Card, Row, Col, Container, Button } from "react-bootstrap";

import { loadData } from "../../store/actions/AddPicAction";
import { useDispatch } from "react-redux";

import { AiOutlineDownload, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Trending() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadData)
   
  }, [])
  const picObj = useSelector((state) => state.PicReducer.picData);

  console.log('Check ', picObj)

  return (
    <div>
      <Container fluid className="justify-content-center px-5">
        <Row>
        

          {picObj?.map(item=>{
           
            return(
              <Col lg={3} md={4} sm={6} className="mt-4">
              <Card>
                <Card.Img variant="top" src={item.ImageUrl} height="350px" />  
                <Card.Body>
                  <Card.Text style={{ minHeight: 100 }} className="text-center ">
                   {item.Line1}
                   <br />
                   {item.Line2}
                  </Card.Text>
               
                  {Trending ? (
                    <Link>
                      <AiFillHeart
                        size={32}
                        color="red"
                        onClick={() => alert("Download btn Click")}
                      />
                    </Link>
                  ) : (
                    <Link>
                      <AiOutlineHeart
                        size={32}
                        color="black"
                        onClick={() => alert("Download btn Click")}
                      />
                    </Link>
                  )}
  
                  <Link>
                    <AiOutlineDownload
                      size={32}
                      color="black"
                      style={{ position: "absolute", right: 15 }}
                      onClick={() => alert("Download btn Click")}
                    />
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            )

             

          })}
        
        </Row>{" "}
      </Container>
    </div>
  );
}
