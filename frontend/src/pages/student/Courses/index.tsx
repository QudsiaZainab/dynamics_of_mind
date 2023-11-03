import React from "react";
import { Form, FormControl, Button, Card } from "react-bootstrap";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function StudentCourses() {
  return (
    <>
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="What do you want to learn?"
          className="mr-sm-2"
          style={{ width: "25rem" }}
        />
        <Button className="bg-primary text-white ms-2 ">Search</Button>
      </Form>
      <Heading className="text-primary mt-5 ms-1" size="md">
        Upcoming Courses
      </Heading>
      <div className="d-flex flex-wrap  mt-2">
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jfif"
            style={{ width: "20rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title>Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2">
              <p>Starting from March 01, 2023</p>
              <p>Instructor: ABC</p>
            </Card.Text>
            <div className="d-flex fc">
              <Link to="coursedescription">
                <Button
                  variant="primary"
                  className="mal"
                  style={{ width: "8rem" }}
                >
                  Go to Course
                </Button>
              </Link>
              <Link to="enroll">
                <Button
                  variant="primary"
                  className=" ms-1 mar"
                  style={{ width: "8rem" }}
                >
                  Enroll Now
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jfif"
            style={{ width: "20rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title>Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2">
              <p>Starting from March 01, 2023</p>
              <p>Instructor: ABC</p>
            </Card.Text>
            <div className="d-flex fc">
              <Link to="coursedescription">
                <Button
                  variant="primary"
                  className="mal"
                  style={{ width: "8rem" }}
                >
                  Go to Course
                </Button>
              </Link>
              <Link to="enroll">
                <Button
                  variant="primary"
                  className=" ms-1 mar"
                  style={{ width: "8rem" }}
                >
                  Enroll Now
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/javascript_logo.png"
            style={{ width: "20rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title>Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2">
              <p>Starting from March 01, 2023</p>
              <p>Instructor: ABC</p>
            </Card.Text>
            <div className="d-flex fc">
              <Link to="coursedescription">
                <Button
                  variant="primary"
                  className="mal"
                  style={{ width: "8rem" }}
                >
                  Go to Course
                </Button>
              </Link>
              <Link to="enroll">
                <Button
                  variant="primary"
                  className=" ms-1 mar"
                  style={{ width: "8rem" }}
                >
                  Enroll Now
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/javascript_logo.png"
            style={{ width: "20rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title>Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2">
              <p>Starting from March 01, 2023</p>
              <p>Instructor: ABC</p>
            </Card.Text>
            <div className="d-flex fc">
              <Link to="coursedescription">
                <Button
                  variant="primary"
                  className="mal"
                  style={{ width: "8rem" }}
                >
                  Go to Course
                </Button>
              </Link>
              <Link to="enroll">
                <Button
                  variant="primary"
                  className=" ms-1 mar"
                  style={{ width: "8rem" }}
                >
                  Enroll Now
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jfif"
            style={{ width: "20rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title>Programming with JavaScript</Card.Title>
            
            <Card.Text className="mt-2 mb-2">
              <p>Starting from March 01, 2023</p>
              <p>Instructor: ABC</p>
            </Card.Text>
            <div className="d-flex fc">
              <Link to="coursedescription">
                <Button
                  variant="primary"
                  className="mal"
                  style={{ width: "8rem" }}
                >
                  Go to Course
                </Button>
              </Link>
              <Link to="enroll">
                <Button
                  variant="primary"
                  className=" ms-1 mar"
                  style={{ width: "8rem" }}
                >
                  Enroll Now
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
