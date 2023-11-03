import React from 'react'
import {Form, Button, Card, FormControl} from 'react-bootstrap';
import {Heading} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const CoursesTaught = () => {
  return (
    <>
      
      <Heading className="text-primary mt-2 ms-1" size="md">
        Courses you have taught
      </Heading>
      <div className="d-flex flex-wrap  mt-2">
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jpg"
            style={{ width: "20rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title>Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2">
              <p>Starting from March 01, 2023</p>
              <p>Instructor: ABC</p>
            </Card.Text>
            <div className="d-flex fc">
              <Link to="../dashboard/coursedescription">
                <Button
                  variant="primary"
                  className="mal"
                  style={{ width: "8rem" }}
                >
                  Go to Course
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jpg"
            style={{ width: "20rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title>Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2">
              <p>Starting from March 01, 2023</p>
              <p>Instructor: ABC</p>
            </Card.Text>
            <div className="d-flex fc">
              <Link to="../dashboard/coursedescription">
                <Button
                  variant="primary"
                  className="mal"
                  style={{ width: "8rem" }}
                >
                  Go to Course
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
              <Link to="../dashboard/coursedescription">
                <Button
                  variant="primary"
                  className="mal"
                  style={{ width: "8rem" }}
                >
                  Go to Course
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
              <Link to="../dashboard/coursedescription">
                <Button
                  variant="primary"
                  className="mal"
                  style={{ width: "8rem" }}
                >
                  Go to Course
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-1">
          <Card.Img
            variant="top"
            src="/download.jpg"
            style={{ width: "20rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title>Programming with JavaScript</Card.Title>
            <Card.Text className="mt-2 mb-2">
              <p>Starting from March 01, 2023</p>
              <p>Instructor: ABC</p>
            </Card.Text>
            <div className="d-flex fc">
              <Link to="../dashboard/coursedescription">
                <Button
                  variant="primary"
                  className="mal"
                  style={{ width: "8rem" }}
                >
                  Go to Course
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default CoursesTaught
