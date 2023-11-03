import React from "react";
import './style.css';
import { Container, Image, Card, Button, Table } from "react-bootstrap";
import { Heading, Box, Text } from "@chakra-ui/react";
import './style.css';

const Home = () => {
  return (
    <>
    <Box borderWidth="1px" p="4" borderRadius="md" className = "d-flex justify-content-between">
        <div>
      <Heading as="h2" size="md" mb="4" className = "text-primary ">
        Patient Information
      </Heading>
      <Box mb="2">
        <Text fontWeight="bold" display="inline-block" mr="2">
          Name:
        </Text>
        <Text display="inline-block">John Doe</Text>
      </Box>
      <Box mb="2">
        <Text fontWeight="bold" display="inline-block" mr="2">
          Date of Birth:
        </Text>
        <Text display="inline-block">January 1, 1970</Text>
      </Box>
      <Box mb="2">
        <Text fontWeight="bold" display="inline-block" mr="2">
          Gender:
        </Text>
        <Text display="inline-block">Male</Text>
      </Box>
      </div>
      {/* Add more patient information fields here */}
      <Image
            src="/human.jpg"
            alt=""
            className="img-fluid rounded-circle mt-1 mr-5"
            style={{ width: "7rem", height: '7rem' }}
          />
    </Box>
    <div className="d-flex justify-content-between">
    <Card className="text-center mt-3" style = {{width: '9rem'}} >
      <Card.Body>
        <Card.Title>20 years</Card.Title>
      </Card.Body>
      <Card.Footer className="text-white bg-secondary"><b>Age</b></Card.Footer>
    </Card>
    <Card className="text-center mt-3 ms-2" style = {{width: '9rem'}} >
      <Card.Body>
        <Card.Title>38 kg</Card.Title>
      </Card.Body>
      <Card.Footer className="text-white bg-success "><b>Weight</b></Card.Footer>
    </Card>
    <Card className="text-center mt-3 ms-2" style = {{width: '9rem'}} >
      <Card.Body>
        <Card.Title>5.3 ft</Card.Title>
      </Card.Body>
      <Card.Footer className="text-white bg-dark"><b>Height</b></Card.Footer>
    </Card>
    <Card className="text-center mt-3 ms-2" style = {{width: '9rem'}} >
      <Card.Body>
        <Card.Title>AB+</Card.Title>
      </Card.Body>
      <Card.Footer className="text-white bg-danger"><b>Blood Group</b></Card.Footer>
    </Card>
    <Card className="text-center mt-3 ms-2" style = {{width: '9rem'}} >
      <Card.Body>
        <Card.Title>75 bpm</Card.Title>
      </Card.Body>
      <Card.Footer className="text-white bg-primary"><b>Heart Rate</b></Card.Footer>
    </Card>
    <Card className="text-center mt-3 ms-2" style = {{width: '9rem'}} >
      <Card.Body>
        <Card.Title>100/90</Card.Title>
        <p style = {{fontSize: '1rem'}}>mg/dl</p>
      </Card.Body>
      <Card.Footer className="text-white bg-secondary"><b>Glucose</b></Card.Footer>
    </Card>
    </div>
          
      <Card className="mt-3">
        <Card.Header className="bg-primary text-white">
          <b>Appointments Taken</b>
        </Card.Header>
        <Card.Body className="CCSS">
          <div className = "table-responsive">
          <Table className="CCSS" striped bordered hover >
            <thead>
              <tr>
                <th>#</th>
                <th>Dr. Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>Disease</th>
                <th>Hospital</th>
                <th>Charged Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>PAF Hospital E-9, Islamabad</td>
                <td>Rs. 100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dr. ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>PAF Hospital E-9, Islamabad</td>
                <td>Rs. 100</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dr. ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>PAF Hospital E-9, Islamabad</td>
                <td>Rs. 100</td>
              </tr>
            </tbody>
          </Table>
          </div>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Header className="bg-primary text-white">
          <b>Due Appointments</b>
        </Card.Header>
        <Card.Body>
          
        <div className = "table-responsive">
          <Table className="CSS" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Dr. Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>Disease</th>
                <th>Hospital</th>
                <th>Charged Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>PAF Hospital E-9, Islamabad</td>
                <td>Rs. 100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dr. ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>Online</td>
                <td>Rs. 100</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dr. ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>PAF Hospital E-9, Islamabad</td>
                <td>Rs. 100</td>
              </tr>
            </tbody>
          </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Home;
