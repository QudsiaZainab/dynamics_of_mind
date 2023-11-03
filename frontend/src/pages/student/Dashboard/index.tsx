import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";
import { Image, Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";

export default function StudentDashboard() {
  return (
    <>
      <Box
        borderWidth="1px"
        p="4"
        borderRadius="md"
        className="d-flex justify-content-between"
      >
        <div>
          <Heading as="h2" size="md" mb="4" className="text-primary ">
            Student Information
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
          style={{ width: "7rem", height: "7rem" }}
        ></Image>
      </Box>
      <Heading className="text-primary mt-3 ms-2" size="md">
        Courses In Progress
      </Heading>
      <div className="d-flex  mt-2">
      <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jpg"
            style={{ width: "15rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to = "coursedescription">
              <Button
                variant="primary"
              >
                Go to Course
              </Button>
              </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jpg"
            style={{ width: "15rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to = "coursedescription">
              <Button
                variant="primary"
              >
                Go to Course
              </Button>
              </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/javascript_logo.png"
            style={{ width: "15rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to = "coursedescription">
              <Button
                variant="primary"
              >
                Go to Course
              </Button>
              </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jpg"
            style={{ width: "15rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to = "coursedescription">
              <Button
                variant="primary"
              >
                Go to Course
              </Button>
              </Link>
          </Card.Body>
        </Card>
      </div>

      <Heading className="text-primary mt-3 ms-2" size="md">
        Courses Completed
      </Heading>
      <div className="d-flex  mt-2">
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/javascript_logo.png"
            style={{ width: "15rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to = "coursedescription">
              <Button
                variant="primary"
              >
                Go to Course
              </Button>
              </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jpg"
            style={{ width: "15rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to = "coursedescription">
              <Button
                variant="primary"
              >
                Go to Course
              </Button>
              </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/javascript_logo.png"
            style={{ width: "15rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to = "coursedescription">
              <Button
                variant="primary"
              >
                Go to Course
              </Button>
              </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jpg"
            style={{ width: "15rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to = "coursedescription">
              <Button
                variant="primary"
              >
                Go to Course
              </Button>
              </Link>
          </Card.Body>
        </Card>
      </div>

      <Card className="mt-3">
        <Card.Header className="bg-primary text-white">
          <b>Upcoming Classes</b>
        </Card.Header>
        <Card.Body className="CCSS">
          <div className="table-responsive">
            <Table className="Join Zoom Meeting" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course Name</th>
                  <th>Instructor Name</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Zoom Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Programming with Javascript</td>
                  <td>ABC</td>
                  <td>12:00 am</td>
                  <td>Mar 01, 2023</td>
                  <td>
                    <Link to="">Join Zoom Meeting</Link>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Programming with Javascript</td>
                  <td>ABC</td>
                  <td>12:00 am</td>
                  <td>Mar 01, 2023</td>
                  <td>
                    <a href="">Join Zoom Meeting</a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Programming with Javascript</td>
                  <td>ABC</td>
                  <td>12:00 am</td>
                  <td>Mar 01, 2023</td>
                  <td>
                    <a href="">Join Zoom Meeting</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
