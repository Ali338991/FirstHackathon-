import React from 'react'
import { Card, Table, Row, Col, Container, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";


export default function SubscriberList() {
    const OurSubscriber = useSelector((state) => state.GetDataReducer.OurSubscriber);
  
  
    return (
        <div>
            <Container>
            <div className="text-center mt-5 mx-5">
          <p className="p-2 bg-dark text-white">List of Subscriber</p>

          <Table responsive className="border">
            <thead>
              <tr>
                <th>#</th>
                
                <th>Email</th>
               
               
              
              </tr>
            </thead>
            <tbody>
              {OurSubscriber?.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1} </td>
                  
                    <td>{item.Email} </td>
                  
                   
                    
                   
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
                
            </Container>
        </div>
    )
}
