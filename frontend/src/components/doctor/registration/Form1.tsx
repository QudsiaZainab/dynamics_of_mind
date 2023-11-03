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
import languages from "../../../libs/data/languages";

export default function DoctorRegistrationForm1({handleChange}) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Personal Info
      </Heading>
      <Flex mb={4} display={{ base: "block", sm: "flex" }}>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" onChange={(e)=>{handleChange("firstName",e.target.value)}} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="Last name" onChange={(e)=>{handleChange("lastName",e.target.value)}} />
        </FormControl>
      </Flex>
      <Flex mb={4} display={{ base: "block", sm: "flex" }}>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Gender
          </FormLabel>
          <Select
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e)=>{handleChange("gender",e.target.value)}}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Date of Birth
          </FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="date"
            onChange={(e)=>{handleChange("dateOfBirth",e.target.value)}}
          />
        </FormControl>
      </Flex>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          
        >
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e)=>{handleChange("country",e.target.value)}}
        >
          <option>Pakistan</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e)=>{handleChange("address",e.target.value)}}
        />
      </FormControl>
      <Flex gap={5} display={{ base: "block", sm: "flex" }}>
        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="city"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            City
          </FormLabel>
          <Input
            type="text"
            name="city"
            id="city"
            autoComplete="city"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e)=>{handleChange("city",e.target.value)}}
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="state"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            State / Province
          </FormLabel>
          <Input
            type="text"
            name="state"
            id="state"
            autoComplete="state"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e)=>{handleChange("state",e.target.value)}}
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="zip_code"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
            
          >
            ZIP / Postal
          </FormLabel>
          <Input
            type="number"
            name="zip_code"
            id="zip_code"
            autoComplete="zip-code"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={(e)=>{handleChange("zipCode",e.target.value)}}
          />
        </FormControl>
      </Flex>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="languages"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Languages
        </FormLabel>
        <Select
          id="languages"
          name="languages"
          autoComplete="languages"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e)=>{handleChange("languages",e.target.value)}}
        >
          {languages.map((item) => {
            return (
              <option value={item.toLowerCase()} key={item}>
                {item}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

