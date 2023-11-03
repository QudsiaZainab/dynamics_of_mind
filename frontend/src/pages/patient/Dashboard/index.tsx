import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import languages from "../../../libs/data/languages";
import doctorExpertise from "../../../libs/data/experties";

export default function PatientDashboard() {
  const initialValues = {
    expertise:"",
    languages:""    
  }
  const [values,setValues] = React.useState(initialValues);
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();
  const bgTitle = {
    backgroundColor: "#3182CE",
  };
  const styles = {
    width: "6rem",
    height: "6rem",
    marginRight: "5rem",
  };
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setValues(prevState=>({...prevState,[name]:value}));
    console.log(values);
  }
  return (
    <Container className=" border border-primary mb-3 mt-5 pt-4  col-xl-10">
      <div className="mb-5 d-flex ms-5">
        <img
          src="/logo.jpg"
          alt="logo"
          style={styles}
          className="rounded-circle styles"
        />
        <div className="d-flex flex-column">
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
        </div>
      </div>
      <Card className="mt-5 mb-3">
        <Card.Header style={bgTitle} className="text-light">
          <b>Choose your preferences for doctor</b>
        </Card.Header>
        <Card.Body>
          <Form.Label>
            <b>Select Specialist</b>
          </Form.Label>
          <Form.Select aria-label="Default select example" className="mb-3"onChange={handleChange} value={values.expertise} name="expertise">
            <option>Select Specialist</option>
            {
              doctorExpertise.map(item=>{
                return (
                  <option value={item}>{item}</option>
                )
              })
            }
            
          </Form.Select>

          <Form.Label>
            <b>Select Language</b>
          </Form.Label>
          <Form.Select aria-label="Default select example" onChange={handleChange} value={values.languages} name="languages">
            <option>Select Languages</option>
            {
              languages.map(item=>{
                return (
                  <option value={item}>{item}</option>
                )
              })
            }
          </Form.Select>
          {/* onClick={() => setNext(true)} */}
          <Link to={`/patient/exploredoctors/doctorsList?speciality=${values.expertise.toLowerCase()}&language=${values.languages.toLowerCase()}`}>
            <Button variant="primary" className="float-end mt-3" >
              Next
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}