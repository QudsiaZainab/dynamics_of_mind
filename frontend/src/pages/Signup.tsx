import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  IconButton,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useForm,Resolver  } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import {Link, useNavigate } from "react-router-dom";
import backendHost from "../libs/backendHost";
import {toast } from "react-toastify";

// type FormValues = {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
// };

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  
  // let initialValues:FormValues= {
  //   name:"",
  //   email:"",
  //   password:"",
  //   role:""
  // }
  
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    axios.post(`${backendHost}/user/signup`,data)
    .then(res=>{
      toast(res.data.message);
      navigate("/login");
    }) 
    .catch(err=>{
      toast.error(err.response.data.message);
    })
  });

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} minW="md">
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features 
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8} as="form" onSubmit={onSubmit}>
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" {...register("name")} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} {...register("password")} />
                <InputRightElement h={"full"}>
                  <IconButton
                    variant={"unstyled"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                    aria-label="IconButton"
                  >
                    {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  </IconButton>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <HStack>
              <Text w="70%" fontWeight={600}>
                Register as:
              </Text>
              <Select
                variant={"unstyled"}
                w={"120px"}
                placeholder="Select"
                {...register("role")}
                required
              >
                <option value="STUDENT">Student</option>
                <option value="TEACHER">Teacher</option>
                <option value="PATIENT">Patient</option>
                <option value="DOCTOR">Doctor</option>
              </Select>
            </HStack>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"brand.400"}
                color={"white"}
                _hover={{
                  bg: "brand.500",
                }}
                type="submit"
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link to="/login"><Text display="inline" color={"blue.400"}>Login</Text></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
