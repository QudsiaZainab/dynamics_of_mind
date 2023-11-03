import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import TeacherRegistrationForm1 from "../../../components/teacher/registration/Form1";
import TeacherRegistrationForm2 from "../../../components/teacher/registration/Form2";
import TeacherRegistrationForm3 from "../../../components/teacher/registration/Form3";

export default function TeacherRegistrationPage() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const navigate = useNavigate();
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
          //   hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
          sx={{borderRadius:"20px"}}
        ></Progress>
        {step === 1 ? (
          <TeacherRegistrationForm1 />
        ) : step === 2 ? (
          <TeacherRegistrationForm2 />
        ) : (
          <TeacherRegistrationForm3 />
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
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  navigate("/teacher/thank-you");
                }}
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
