import React from 'react'
import { BsCheck } from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import {TabContainer} from 'react-bootstrap';
import { Flex, Heading } from '@chakra-ui/react';

const BookedAppointment = () => {
    const styles = {
        width: '6rem',
        height: '6rem',
        marginRight: '7rem',
    }
  return (
    <TabContainer className=" border border-primary mb-3 mt-5 pt-4  col-xl-10">
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
    <div>
      <div className="d-flex justify-content-center m-3">
                <Card style={{ width: '30rem' }} className="just ">
                    <div className="d-flex justify-content-center flex-direction-column ">
                        <BsCheck size={32} color="green" className="border border-primary  mt-5 rounded-circle " />

                    </div>
                    <Card.Body>
                        <Card.Title className="text-center text-success mt-4">Your Appointment is Booked.</Card.Title>
                        <Card.Text className="pt-3">Your appointment is booked and our team will contact you as soon as possible.</Card.Text>
                        

                        <Table >
                            <tbody>
                                <tr>
                                    <td>Appointment</td>
                                    <td>5:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>April 12</td>
                                </tr>
                                <tr>
                                    <td>Child Specialist</td>
                                    <td>Dr. ABC</td>
                                </tr>
                                <tr>
                                    <td>Hospital</td>
                                    <td>Maroof Hospital</td>
                                </tr>
                                <tr>
                                    <td>Hospital Address</td>
                                    <td>F-10</td>
                                </tr>
                                <tr>
                                    <td>Hospital Phone</td>
                                    <td>123</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
    </div>
    </TabContainer>
  )
}

export default BookedAppointment
