import React, { useState } from "react";
import { Progress, Box, ButtonGroup, Button, Flex } from "@chakra-ui/react";
import backendHost from "../../../libs/backendHost";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import DoctorRegistrationForm1 from "../../../components/doctor/registration/Form1";
import DoctorRegistrationForm2 from "../../../components/doctor/registration/Form2";
import DoctorRegistrationForm3 from "../../../components/doctor/registration/Form3";
import { useNavigate } from "react-router-dom";
import api from "../../../libs/api";

export default function DoctorRegistrationPage() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipCode: 0,
    languages: "",
    title: "",
    description: "",
    expertise: "",
    experience: 0,
    resume: "",
    paid:false,
    amount:0,
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  };
  const [values, setValues] = React.useState(initialValues);
  const handleChange = (key: string, value: string) => {
    setValues((prevValues) => ({ ...prevValues, [key]: value }));
  };
  const handleSubmit = async()=>{
      const obj = {...values};
      obj['zipCode'] = +obj['zipCode'];
      obj['experience'] = +obj['experience'];
      try{

        const profileCreationRequest = await api.post(`/doctor/profile/create`,obj);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log(profileCreationRequest)
        navigate("/doctor/thank-you");
      } catch (err){
        toast({
          title:err?.message,
          status:"error"
        })
        console.log(err)
      }
    
  }
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
          sx={{ borderRadius: "20px" }}
        />
        {step === 1 ? (
          <DoctorRegistrationForm1 handleChange={handleChange} />
        ) : step === 2 ? (
          <DoctorRegistrationForm2 handleChange={handleChange} />
        ) : (
          <DoctorRegistrationForm3 handleChange={handleChange} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="brand"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="brand"
                variant="outline"
              >
                Next
              </Button>
            )}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
