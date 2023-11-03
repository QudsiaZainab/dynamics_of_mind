import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BiCard } from "react-icons/bi";
import StatsCard from "../../../components/shared/cards/StatsCard";
import {Card, Table, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import api from "../../../libs/api";
import { errorHandler } from "../../../components/shared/CommonToast";

interface Profile {
  first_name:string;
  last_name:string;
  gender:string;
  expertise:string;
  date_of_birth:string;
}

export default function DoctorDashboard() {
  const [data,setData] = React.useState<Profile>();
  React.useEffect(()=>{
    const myfunc = async ()=>{
      try{
        const profiles = await api.get("/doctor/profile/get")
        console.log(profiles.data);
        setData(profiles.data);
      } catch(err){
        console.error(err);
        errorHandler(err);
      }

    }
    myfunc();
  },[])

  return (
    <>
    <Box borderWidth="1px" p="4" borderRadius="md" className = "d-flex justify-content-between mb-3">
        <div>
      <Heading as="h2" size="md" mb="4" className = "text-primary ">
        Doctor Information
      </Heading>
      <Box mb="2">
        <Text fontWeight="bold" display="inline-block" mr="2">
          Name:
        </Text>
        <Text display="inline-block">{data?.first_name + " " + data?.last_name}</Text>
      </Box>
      <Box mb="2">
        <Text fontWeight="bold" display="inline-block" mr="2">
          Date of Birth:
        </Text>
        <Text display="inline-block">{data?.date_of_birth}</Text>
      </Box>
      <Box mb="2">
        <Text fontWeight="bold" display="inline-block" mr="2">
          Gender:
        </Text>
        <Text display="inline-block">{data?.gender}</Text>
      </Box>
      <Box mb="2">
        <Text fontWeight="bold" display="inline-block" mr = "2">
          Designation:
        </Text>
        <Text display="inline-block">{data?.expertise}</Text>
      </Box>
      </div>
      {/* Add more patient information fields here */}
      <Image
            src="/human.jpg"
            alt=""
            className="img-fluid rounded-circle mt-1 mr-5"
            style={{ width: "7rem", height: '7rem' }}
          ></Image>
    </Box>
      <Box>
        <SimpleGrid className = "d-flex justify-content-between">
          <StatsCard name="Today's Money" amount={10} icon={<BiCard />} />
          <StatsCard name="This Month's Money" amount={20} icon={<BiCard />} />
          <StatsCard name="This Year's Money" amount={30} icon={<BiCard />} />
          <StatsCard name="Total Money" amount={50} icon={<BiCard />} />
        </SimpleGrid>
      </Box>
      <Card className="mt-3">
        <Card.Header className="bg-primary text-white">
          <b>Appointments Taken</b>
        </Card.Header>
        <Card.Body>
          
        <div className = "table-responsive">
          <Table className="CSS" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>Disease</th>
                <th>Hospital</th>
                <th>Charged Fee</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>PAF Hospital E-9, Islamabad</td>
                <td>Rs. 100</td>
                <td><Link to = "" className = "text-primary"><u>View Detail</u></Link></td>
              </tr>
              <tr>
                <td>2</td>
                <td>ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>Online</td>
                <td>Rs. 100</td>
                <td><Link to = "" className = "text-primary"><u>View Detail</u></Link></td>
              </tr>
              <tr>
                <td>3</td>
                <td>ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>PAF Hospital E-9, Islamabad</td>
                <td>Rs. 100</td>
                <td><Link to = "" className = "text-primary"><u>View Detail</u></Link></td>
              </tr>
            </tbody>
          </Table>
          </div>
        </Card.Body>
      </Card>


      <Card className="mt-3">
        <Card.Header className="bg-primary text-white">
          <b>Due Appointments</b>
        </Card.Header>
        <Card.Body>
          
        <div className = "table-responsive">
          <Table className="CSS" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>Disease</th>
                <th>Hospital</th>
                <th>Charged Fee</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>PAF Hospital E-9, Islamabad</td>
                <td>Rs. 100</td>
                <td><Link to = "" className = "text-primary"><u>Add Detail</u></Link></td>
              </tr>
              <tr>
                <td>2</td>
                <td>ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td>PAF Hospital E-9, Islamabad</td>
                <td>Rs. 100</td>
                <td><Link to = "" className = "text-primary"><u>Add Detail</u></Link></td>
              </tr>
              <tr>
                <td>3</td>
                <td>ABC</td>
                <td>12:00 pm</td>
                <td>Mar 01, 2023</td>
                <td>Week eyesight</td>
                <td><Link to = "" className="text-primary"><u>Join Zoom Meeting</u></Link></td>
                <td>Rs. 100</td>
                <td><Link to = "" className = "text-primary"><u>Add Detail</u></Link></td>
              </tr>
            </tbody>
          </Table>
          </div>
        </Card.Body>
      </Card>

    </>
  );
}
