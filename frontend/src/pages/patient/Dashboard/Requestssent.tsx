import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { Container } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import './style.css';
import { Link } from 'react-router-dom'

const Requestsent = () => {
  const styles = {
    width: '6rem',
    height: '6rem',
    marginRight: '5rem',
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
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Doctor Name</th>
              <th>Consultation</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. ABC</td>
              <td>5:00 pm</td>
              <td>April 12</td>
              <td><Link to="/patient/dashboard/requestsent/bookedappointment" >View</Link></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dr. ABC</td>
              <td>5:00 pm</td>
              <td>April 12</td>
              <td><Link to="/patient/dashboard/requestsent/bookedappointment" >View</Link></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Dr. ABC</td>
              <td>5:00 pm</td>
              <td>April 12</td>
              <td><Link to="/patient/exploredoctors/requestsent/bookedappointment" >View</Link></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Requestsent