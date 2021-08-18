import React from 'react'
import { Card, Table, Row, Col, Container, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";


export default function StudentList() {
  const userCourse = useSelector((state) => state.GetDataReducer.userCourse);
   // get Data of course Assigned User

   const filterAcceptUser = userCourse?.filter((item) => {
    if (item.request === true) {
      return item;
    }
  });
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
                <th>Reg-No</th>
                <th>Course</th>
                {/* <th>Session</th> */}
              
              </tr>
            </thead>
            <tbody>
              {filterAcceptUser?.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1} </td>
                    <td>{item.Name} </td>
                    <td>{item.Email} </td>
                    <td>{item.Phone} </td>
                    <td>{item.RegNo} </td>
                    <td>{item.Course} </td>
                    {/* <td>Feb </td> */}
                   
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
