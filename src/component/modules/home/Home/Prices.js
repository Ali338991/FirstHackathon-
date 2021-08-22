import React from "react";

import Pizza1 from '../../../assets/home/pizza1.png'
import { useSelector, useDispatch } from "react-redux";
import { Container, Row,Card, Col, Form, Button } from "react-bootstrap";


const Prices = () => {
  const RestaurantList = useSelector(state => state.AdminControlReducer?.RestaurantList)
  console.log("gafsgfh",RestaurantList);

  return (
    <div className="prices">
      <h4 className="text-center fs-2 fw-bold">Top Restaurant</h4>
      <div className="container">
        <div className="row">

          {RestaurantList?.map((item)=>{
            return(
              <Col  lg={4} md={4} sm={6} className="mt-4 Course_Card">
                <Card style={{border: '1px solid gray',  borderRadius:2 }} className="R_C">
                <Card.Img
                  variant="top"
                  src={item.Img}
                  height="200px"
                  className="cc "
                />
                <Card.Body style={{minHeight:170}}>
                  <Card.Title>{item.RestaurantName}</Card.Title>
                  <Card.Text>{item.RestaurantDesc}</Card.Text>
  
                
                </Card.Body>
                <Card.Footer className="text-muted" style={{display:"flex",justifyContent:"space-between"}}>
                  <h6>{item.City}</h6>
                  <h6>{item.Location}</h6>
                </Card.Footer>
              </Card>
              </Col>
              
              

            )
          })}

         

          

         
         
        </div>
      </div>
    </div>
  );
};

export default Prices;
