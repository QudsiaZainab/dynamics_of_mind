import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import {
  Image,
  Card,
  Table,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";

export default function TeacherDashboard() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Create new course
    </Tooltip>
  );
  return (
    <>
      <Box
        borderWidth="1px"
        p="4"
        borderRadius="md"
        className="d-flex justify-content-between mb-3"
      >
        <div>
          <Heading as="h2" size="md" mb="4" className="text-primary ">
            Teacher Information
          </Heading>
          <Box mb="2">
            <Text fontWeight="bold" display="inline-block" mr="2">
              Name:
            </Text>
            <Text display="inline-block">Dr. John Doe</Text>
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
          <Box mb="2">
            <Text fontWeight="bold" display="inline-block" mr="2">
              Qualification:
            </Text>
            <Text display="inline-block">Ph.D in Software Engineering</Text>
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

      <Heading className="text-primary mt-4 ms-2" size="md">
        Courses you are teaching
      </Heading>
      <div className="d-flex flex-wrap  mt-2">
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/javascript_logo.png"
            style={{ width: "17.9rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to="coursedescription">
              <Button variant="primary">Go to Course</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jpg"
            style={{ width: "17.9rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to="coursedescription">
              <Button variant="primary">Go to Course</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/javascript_logo.png"
            style={{ width: "17.9rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to="coursedescription">
              <Button variant="primary">Go to Course</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jpg"
            style={{ width: "17.9rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="cH">Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2 cT">
              <p>Started from March 01, 2023</p>
            </Card.Text>
            <Link to="coursedescription">
              <Button variant="primary">Go to Course</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="m-1 bg-transparent bh  border-0 p-5"
        >
          
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Link to="createcourse">
              <Button
                variant="primary"
                className=" "
                id="my-button"
                style={{ width: "6rem", height: "6rem" }}
              >
                <b style={{ fontSize: "3em" }} className="">
                  +
                </b>
              </Button>
              </Link>
            </OverlayTrigger>
          
        </Card>
      </div>

      <Card className="mt-3">
        <Card.Header className="bg-primary text-white">
          <b>Upcoming Classes</b>
        </Card.Header>
        <Card.Body>
          <div className="table-responsive">
            <Table className="CSS" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Zoom Link</th>
                </tr>
              </thead>
              <tbody className = "tdresp">
                <tr>
                  <td>1</td>
                  <td>Programming with Javascript</td>
                  <td>Mar 01, 2023</td>
                  <td>12:00 am</td>
                  <td>
                    <Link to="" className="text-primary">
                      <u>Join Zoom Meeting</u>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Programming with Javascript</td>
                  <td>Mar 01, 2023</td>
                  <td>12:00 am</td>
                  <td>
                    <Link to="" className="text-primary">
                      <u>Join Zoom Meeting</u>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Programming with Javascript</td>
                  <td>Mar 01, 2023</td>
                  <td>12:00 am</td>
                  <td>
                    <Link to="" className="text-primary">
                      <u>Join Zoom Meeting</u>
                    </Link>
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
