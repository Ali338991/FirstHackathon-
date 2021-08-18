import React from 'react'
import { Card, Table, Row, Col, Container, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";


export default function UserList() {
    const User = useSelector((state) => state.GetDataReducer.User);
  
  
    return (
        <div>
            <Container>
            <div className="text-center mt-5 mx-5">
          <p className="p-2 bg-dark text-white">List of Student</p>

          <Table responsive className="border">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>joinDate</th>
                <th>LastSignIn</th>
               
              
              </tr>
            </thead>
            <tbody>
              {User?.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1} </td>
                    <td>{item.Name} </td>
                    <td>{item.Email} </td>
                    <td>{item.Phone}</td>
                    <td>{item.joinDate}</td>
                    <td>{item.LastSignIn}</td>
                   
                    
                   
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
