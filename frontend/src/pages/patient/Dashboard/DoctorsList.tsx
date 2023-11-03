import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Flex, Image, Heading,SimpleGrid } from "@chakra-ui/react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import api from "../../../libs/api";
import { errorHandler } from "../../../components/shared/CommonToast";

interface DoctorProfiles {
    first_name: string;
    last_name: string;
    expertise: string;
    experience: number;
    languages:string;
  }

const DoctorsList = () => {
    const [doctorsData,setDoctorsData] = React.useState<DoctorProfiles[]>([]);
    const [searchParams]= useSearchParams();
    React.useEffect(()=>{
        
        api.get("/doctor/profile/get/all")
        .then(res=>{
            console.log(res.data);
            const expertise = searchParams.get("speciality");
            const language = searchParams.get("language");
            setDoctorsData(res.data.filter(item=>(item.expertise === expertise && item.languages === language) ));
        })
        .catch(err=>{
            console.log(err);
            errorHandler(err);
        })
    },[])
  const bgTitle = {
    backgroundColor: "#3182CE",
  };
  const styles = {
    width: "6rem",
    height: "6rem",
    marginRight: "4rem",
  };
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
              className="text-center size mt-4 text-primary ms-5"
            >
              Dynamics of Mind Patient Portal{" "}
            </Heading>
            <h2 className="ms-5 text-center text-primary sSize">
              Book Appointment from Doctor
            </h2>
          </Flex>
        </div>
        <Card className="mt-5 mb-3">
          <Card.Header style={bgTitle} className="text-light">
            <b>Doctors List</b>
          </Card.Header>
          <Card.Body>
            {
                doctorsData.length > 0 ? (
            <SimpleGrid columns={{base:2,md:3}}>
              {doctorsData.map((item, index) => {
                return (
                  <Card  key={index} className="m-3">
                    <Card.Img variant="top" src="/human.jpg" />
                    <Card.Body>
                      <Card.Title>
                        <b>{item.first_name + " " + item.last_name}</b>
                      </Card.Title>
                      <Card.Text className="mb-2">
                        {item.expertise} <br />
                        Languages: {item.languages}
                      </Card.Text>
                      <Link to="/patient/exploredoctors/doctorsList/bookappointment">
                        <Button className="btn-sm ">Book Appointment</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                );
              })}
            </SimpleGrid>
                ) : "There is not any doctor available"
            }
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default DoctorsList;
