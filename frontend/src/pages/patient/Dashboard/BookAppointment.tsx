import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Flex, Heading } from "@chakra-ui/react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookAppointment = () => {
  const styles = {
    width: "6rem",
    height: "6rem",
    marginRight: '3rem',
  };
  return (
    <div>
      <Container className=" border border-primary mb-3 mt-5 pt-4 pb-3 col-xl-10">
        <div className="mb-5 d-flex ms-5">
          <img
            src="/logo.jpg"
            alt="logo"
            style={styles}
            className="rounded-circle styles"
          />
          <Flex flexDirection={"column"}>
            <Heading
              as="h6"
              size="md"
              className="text-center mt-4 text-primary ms-5 size"
            >
              Dynamics of Mind Patient Portal{" "}
            </Heading>
            <h2 className="ms-5 text-center text-primary sSize">
              Book Appointment from Doctor
            </h2>
          </Flex>
        </div>
        <div className="d-flex justify-content-center">
          <Card style={{ width: "18rem" }} className="just">
            <div className="d-flex justify-content-center flex-direction-column">
              <Card.Img
                variant="top"
                src="/logo.jpg"
                className="mt-2"
                style={{ width: "7rem", height: "7rem" }}
              />
            </div>
            <Card.Body>
              <h6 className="text-center">Dr. ABC</h6>
              <Card.Title className="text-center mt-4">
                Book Appointment
              </Card.Title>
              <Form className="border-primary p-2">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Patient Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter patient name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicContact">
                  <Form.Label>Contact No</Form.Label>
                  <Form.Control type="contact" placeholder="Phone No" />
                </Form.Group>
                <Link to="/patient/exploredoctors/doctorsList/bookappointment/bookedappointment">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default BookAppointment;
