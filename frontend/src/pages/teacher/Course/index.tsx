import React, {useState} from 'react'
import {Table, Card, Button} from 'react-bootstrap';
import {Flex, Heading} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import '../style.css';

const CourseDescription = () => {
    

    const styles = {
        width: "6rem",
        height: "6rem",
        marginRight: "8.5rem",
      };
  return (
    <div>
      <div className="mb-1 d-flex ms-5">
        <img
          src="/logo.jpg"
          alt="logo"
          style={styles}
          className="rounded-circle styles"
        />
        <Flex>
          <Heading as="h6" size="md" className="mt-4 text-primary ms-5 size">
            Dynamics of Mind Teacher Portal{" "}
          </Heading>
        </Flex>
      </div>
        <Heading as="h6" size="md" className="mt-5 text-primary ms-5 size">Programming with Javascript</Heading>
        <p className = "ms-5 mt-2" style = {{fontSize: '0.9em'}}>Course Fee: Rs 100</p>
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
            <Table className="" striped bordered hover>
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
      <div className = "d-flex justify-content-between m-3">
      <Link to="../dashboard/createcourse">
                <Button
                  variant="primary"
                  style={{ width: "8rem" }}
                  className = "ms-5"
                >
                  Edit
                </Button>
              </Link>
      
      <Link to="deleted" >
                <Button
                  variant="primary"
                  style={{ width: "8rem" }}
                  className = "d-btn"
                >
                  Delete
                </Button>
              </Link>
              </div>
    </div>
  )
}

export default CourseDescription
