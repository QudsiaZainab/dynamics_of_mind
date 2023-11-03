import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { Flex, Heading, Center } from "@chakra-ui/react";
import "../style.css";

const Enroll = () => {
    const styles = {
        width: "6rem",
        height: "6rem",
        marginRight: '8.5rem',
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
        <Flex >
          <Heading
            as="h6"
            size="md"
            className="mt-4 text-primary ms-5 size"
          >
            Dynamics of Mind Student Portal{" "}
          </Heading>
        </Flex>
      </div>
      <div className="d-flex justify-content-center">
        <Form
          style={{ width: "18rem" }}
          className="border border-primary rounded p-3"
        >
          <FormGroup controlId="cardNumber">
            <Form.Label>Card Number</Form.Label>
            <FormControl type="text" placeholder="Enter card number" />
          </FormGroup>
          <FormGroup controlId="cardHolderName">
            <Form.Label>Cardholder Name</Form.Label>
            <FormControl type="text" placeholder="Enter cardholder name" />
          </FormGroup>
          <FormGroup controlId="expiryDate">
            <Form.Label>Expiry Date</Form.Label>
            <FormControl type="text" placeholder="MM/YY" />
          </FormGroup>
          <FormGroup controlId="cvv">
            <Form.Label>CVV</Form.Label>
            <FormControl type="text" placeholder="Enter CVV" />
          </FormGroup>
          <Button type="submit" className="mt-3">
            Pay Now
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Enroll;
