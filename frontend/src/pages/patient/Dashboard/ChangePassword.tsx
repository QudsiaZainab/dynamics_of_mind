import React from 'react'
import { Form,  Button, Card, Container } from 'react-bootstrap';
import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
    const styles = {
        width: '6rem',
        height: '6rem',
        marginRight: '2.7rem',
    }
  return (
    <div>
      <Container className=" border border-primary mb-3 mt-5 pt-4  col-xl-10">
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
            <div className="d-flex justify-content-center mb-3">
                    <Card style={{ width: '18rem' }} className="just">
                        <Card.Body>
                            <Form className="border-primary p-2">
                                <Form.Group className="mb-3" controlId="formOldPassword">
                                    <Form.Label>Old Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter old password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter new password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicContact">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Conirm your password" />
                                </Form.Group>
                                <Link to = "">
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                                </Link>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
    </div>
  )
}

export default ChangePassword
