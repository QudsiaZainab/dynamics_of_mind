import React from "react";
import { Flex, Heading, IconButton, Box } from "@chakra-ui/react";
import { Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { MdClose } from "react-icons/md";
// import toast from "react-toastify";

const RequestAppointments = () => {
  const styles = {
    width: "6rem",
    height: "6rem",
    marginRight: "8.5rem",
  };
  const handleClick = (type:String)=>{
    // toast(type==="approve"?"Request Approve Successfully":"Request Rejected Successfully")    
  }
  return (
    <Box>
      <div className="mb-1 d-flex ms-5 ">
        <img
          src="/logo.jpg"
          alt="logo"
          style={styles}
          className="rounded-circle styles"
        />
        <Flex>
          <Heading as="h6" size="md" className="mt-4 text-primary ms-5 size">
            Dynamics of Mind Doctor Portal{" "}
          </Heading>
        </Flex>
      </div>

      <Card className="mt-5">
        <Card.Header className="bg-primary text-white">
          <b>Appointment Requiests</b>
        </Card.Header>
        <Card.Body className="CCSS">
          <div className="table-responsive">
            <Table className="Join Zoom Meeting" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Patient Name</th>
                  <th>Disease</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Murtaza</td>
                  <td>Anxiety</td>
                  <td>12:00 am</td>
                  <td>May 17, 2023</td>
                  <td>
                    <Flex gap={1}>
                      <IconButton
                        colorScheme={"brand"}
                        size="xs"
                        aria-label="Approve"
                        onClick={() => {
                          handleClick("approve");
                        }}
                      >
                        <BiCheck size="20px" />
                      </IconButton>
                      <IconButton
                        colorScheme={"red"}
                        size="xs"
                        aria-label="Approve"
                        onClick={() => {
                          handleClick("approve");
                        }}
                      >
                        <MdClose size="20px" />
                      </IconButton>
                    </Flex>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Wahab</td>
                  <td>Anxiety Disorders</td>
                  <td>04:00 am</td>
                  <td>May 17, 2023</td>
                  <td>
                  <Flex gap={1}>
                      <IconButton
                        colorScheme={"brand"}
                        size="xs"
                        aria-label="Approve"
                        onClick={() => {
                          handleClick("approve");
                        }}
                      >
                        <BiCheck size="20px" />
                      </IconButton>
                      <IconButton
                        colorScheme={"red"}
                        size="xs"
                        aria-label="Approve"
                        onClick={() => {
                          handleClick("approve");
                        }}
                      >
                        <MdClose size="20px" />
                      </IconButton>
                    </Flex>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Sameer</td>
                  <td>Depression</td>
                  <td>01:00 am</td>
                  <td>May 17, 2023</td>
                  <td>
                  <Flex gap={1}>
                      <IconButton
                        colorScheme={"brand"}
                        size="xs"
                        aria-label="Approve"
                        onClick={() => {
                          handleClick("approve");
                        }}
                      >
                        <BiCheck size="20px" />
                      </IconButton>
                      <IconButton
                        colorScheme={"red"}
                        size="xs"
                        aria-label="Approve"
                        onClick={() => {
                          handleClick("approve");
                        }}
                      >
                        <MdClose size="20px" />
                      </IconButton>
                    </Flex>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Box>
  );
};

export default RequestAppointments;
