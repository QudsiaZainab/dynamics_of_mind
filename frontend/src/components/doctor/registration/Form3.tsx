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
import { BsCreditCard } from "react-icons/bs";


export default function DoctorRegistrationForm3() {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Payment
      </Heading>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="title"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Cardholder's Name
        </FormLabel>
        <Input
          
          placeholder="Name on card"
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="title"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Card Number
        </FormLabel>
        <InputGroup>
          <Input placeholder="---- ---- ---- ----" />
          <InputRightElement children={<BsCreditCard color="green.500" />} />
        </InputGroup>
      </FormControl>
      <Flex mt="2%">
      <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Expiry Date
          </FormLabel>
          <Input id="first-name" placeholder="Expiry Date" type="month" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            CVV
          </FormLabel>
          <Input id="last-name" type="number" placeholder="Code" />
        </FormControl>
      </Flex>
    </>
  );
}
