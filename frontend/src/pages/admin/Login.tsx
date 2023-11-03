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

  import {toast } from "react-toastify";
import backendHost from "../../libs/backendHost";
import { errorHandler } from "../../components/shared/CommonToast";
import Cookies from "js-cookie";
  
  // type FormValues = {
  //   name: string;
  //   email: string;
  //   password: string;
  //   role: string;
  // };
  
  export default function AdminLogin() {
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
      axios.post(`${backendHost}/admin/auth/login`,data)
      .then(res=>{
        toast.success(res.data.message);
        Cookies.set("token",res.data.token,{
          // httpOnly:true
        });
        
        navigate(`/admin/dashboard`);
      }) 
      .catch(err=>{
        errorHandler(err);
      })
    });
  
    return (
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
        
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} minW="md">
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8} as="form" onSubmit={onSubmit}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} pb={8} textAlign={"center"} >
              Sign In 
            </Heading>
          </Stack>
            <Stack spacing={4}>
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
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"brand.500"}
                  color={"white"}
                  _hover={{
                    bg: "brand.600",
                  }}
                  type="submit"
                >
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  