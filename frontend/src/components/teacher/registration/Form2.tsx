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
  NumberInput,
  NumberInputField,
  chakra,
  Stack,
  Icon,
  VisuallyHidden,
  Text
} from "@chakra-ui/react";
import doctorExpertise from "../../../libs/data/experties";

export default function TeacherRegistrationForm2() {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
       Your profile
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
          Title
        </FormLabel>
        <Input
          type="text"
          name="title"
          id="title"
          autoComplete="title"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="description"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Description
        </FormLabel>
        <Textarea
          name="description"
          id="description"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      {/* <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="description"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Area of expertise
        </FormLabel>
        <Select
          id="expertise"
          name="expertise"
          autoComplete="expertise"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          {doctorExpertise.map((item) => {
            return (
              <option value={item.toLowerCase()} key={item}>
                {item}
              </option>
            );
          })}
        </Select>
      </FormControl> */}
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="experience"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Years of Experience
        </FormLabel>
        <NumberInput
          defaultValue={1}
          min={1}
          max={20}
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <NumberInputField />

        </NumberInput>
      </FormControl>
      <FormControl>
      <FormLabel
          htmlFor="experience"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Upload Resume
        </FormLabel>
              <Flex
                mt={1}
                justify="center"
                px={6}
                pt={5}
                pb={6}
                borderWidth={2}
                _dark={{
                  color: "gray.500",
                }}
                borderStyle="dashed"
                rounded="md"
              >
                <Stack spacing={1} textAlign="center">
                  <Icon
                    mx="auto"
                    boxSize={12}
                    color="gray.400"
                    _dark={{
                      color: "gray.500",
                    }}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Icon>
                  <Flex
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                      color: "gray.400",
                    }}
                    alignItems="baseline"
                  >
                    <chakra.label
                      htmlFor="file-upload"
                      cursor="pointer"
                      rounded="md"
                      fontSize="md"
                      color="brand.600"
                      _dark={{
                        color: "brand.200",
                      }}
                      pos="relative"
                      _hover={{
                        color: "brand.400",
                        _dark: {
                          color: "brand.300",
                        },
                      }}
                    >
                      <span>Upload a file</span>
                      <VisuallyHidden>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                        />
                      </VisuallyHidden>
                    </chakra.label>
                    <Text pl={1}>or drag and drop</Text>
                  </Flex>
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    PDF up to 10MB
                  </Text>
                </Stack>
              </Flex>
            </FormControl>

    </>
  );
}
