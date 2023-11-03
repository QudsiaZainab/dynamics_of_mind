import React from "react";
import "../style.css";
import { Flex, Heading } from "@chakra-ui/react";
import {Card, Table, Image} from 'react-bootstrap';
import {Link} from '@chakra-ui/react';

const CourseOutline = () => {
  const styles = {
    width: "6rem",
    height: "6rem",
    marginRight: "8.5rem",
  };
  return (
    <>
      <div className="mb-1 d-flex ms-5">
        <img
          src="/logo.jpg"
          alt="logo"
          style={styles}
          className="rounded-circle styles"
        />
        <Flex>
          <Heading as="h6" size="md" className="mt-4 text-primary ms-5 size">
            Dynamics of Mind Student Portal{" "}
          </Heading>
        </Flex>
      </div>
        <Heading as="h6" size="md" className="mt-5 text-primary ms-5 size">Programming with Javascript</Heading>
        <Image src = "/javascript_logo.png" className = "ms-5 mt-2" alt = "" style = {{width: '8rem', height: '8rem'}}/>
        <p className = "ms-5 mt-2" style = {{fontSize: '0.9em'}}>Instructor Name: ABC</p>
        <p className = "ms-5 mt-2" style = {{fontSize: '0.9em'}}>Course Duration: 4 weeks</p>
        <p className = "ms-5 mt-2" style = {{fontSize: '0.9em'}}>Zoom link: <a href = "" className="text-primary"><u>Click here to join zoom meeting</u></a></p>
        <p className = "ms-5 mt-2" style = {{fontSize: '0.9em'}}>Notes link: <a href = "" className="text-primary"><u>Click here to open notes for detail</u></a></p>
        <p className = "ms-5 mt-2" style = {{fontSize: '0.9em'}}>Start date: March 01, 2023</p>
        <p className = "ms-5 mt-2" style = {{fontSize: '0.9em'}}>End date: March 30, 2023</p>


        <Heading as="h6" size="md" className="mt-5 text-primary ms-5  size">What you will study in this course?</Heading>
        <p className = "ms-5 mt-2" style = {{fontSize: '0.9em'}}>Print on console</p>
        <p className = "ms-5 mt-2" style = {{fontSize: '0.9em'}}>Declare variables</p>
        <p className = "ms-5 mt-2" style = {{fontSize: '0.9em'}}>Datatypes</p>
        <p className = "ms-5 mt-2 mb-5" style = {{fontSize: '0.9em'}}>Objects</p>


        <Card className="mt-3 ms-5">
        <Card.Header className="bg-primary text-white">
          <b>Scheduled Classes</b>
        </Card.Header>
        <Card.Body className="CCSS">
          <div className="table-responsive">
          <Table className="Join Zoom Meeting" striped bordered hover>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>12:00 am</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>12:00 am</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>12:00 am</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CourseOutline;
