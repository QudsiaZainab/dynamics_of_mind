// import React, {useState} from 'react'
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Stack,
  Icon,
  chakra,
  VisuallyHidden,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Text,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
//   const [days, setDays] = useState([]);
//   const [times, setTimes] = useState([]);

//   const handleDayChange = (event) => {
//     const day = event.target.value;
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       setDays([...days, day]);
//     } else {
//       setDays(days.filter((d) => d !== day));
//     }
//   };

//   const handleTimeChange = (event) => {
//     const time = event.target.value;
//     const day = event.target.dataset.day;
//     const newTimes = [...times];
//     const index = newTimes.findIndex((t) => t.day === day);
//     if (index === -1) {
//       newTimes.push({ day, time });
//     } else {
//       newTimes[index].time = time;
//     }
//     setTimes(newTimes);
//   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     console.log('Days:', days);
// //     console.log('Times:', times);
// //   };

//   const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  
//   return (

//     <>
//     <div className = "d-flex justify-content-center">
//       <Form style = {{width: '30rem'}}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Course Title</Form.Label>
//         <Form.Control type="text" placeholder="Enter course name" />
//       </Form.Group>

//       <div {...getRootProps()} className={`dropzone${isDragActive ? ' active' : ''}`}>
//       <input {...getInputProps()} />
//       <p className = "text-primary cursor-pointer"><u className = "">Drag and drop an image, or click to select a file</u></p>
//       {image && (
//         <div>
//           <p className = "text-success">Selected image: {image.name}</p>
//           <img src={URL.createObjectURL(image)} alt="Selected" style = {{width:'8rem', height: '8rem'}} />
//         </div>
//       )}
//     </div>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Course Duration</Form.Label>
//         <Form.Control type="text" placeholder="Enter course duration" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Total Classes in week</Form.Label>
//         <Form.Control type="number" placeholder="Enter total classes in week" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicDate">
//         <Form.Label>Start date</Form.Label>
//         <Form.Control type="text" placeholder="Enter start date" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicDate">
//         <Form.Label>End date</Form.Label>
//         <Form.Control type="text" placeholder="Enter end date" />
//       </Form.Group>


//       <Form >
//       <Form.Label>Select class days and times:</Form.Label>
//       <div>
//         {daysOfWeek.map((day) => (
//           <Form.Label key={day}>
//             <input
//               type="checkbox"
//               value={day}
//               checked={days.includes(day)}
//               onChange={handleDayChange}
//               style = {{marginLeft: '3em'}}
//             />
//             {day}
//           </Form.Label>
//         ))}
//       </div>
//       {days.length > 0 && (
//         <div>
//           {days.map((day) => (
//             <div key={day}>
//               <h3>{day}</h3>
//               <select value={times.find((t) => t.day === day)?.time} data-day={day} onChange={handleTimeChange}>
//                 <option value="">Select time</option>
//                 <option value="9:00am">9:00am</option>
//                 <option value="10:00am">10:00am</option>
//                 <option value="11:00am">11:00am</option>
//                 <option value="12:00pm">12:00pm</option>
//                 <option value="1:00pm">1:00pm</option>
//                 <option value="2:00pm">2:00pm</option>
//                 <option value="3:00pm">3:00pm</option>
//                 <option value="4:00pm">4:00pm</option>
//               </select>
//             </div>
//           ))}
//         </div>
//       )}
//       {/* <Button variant = "primary" type="submit">Create Timetable</Button> */}
//     </Form>

      

      
// <Form.Group controlId="description">
//   <Form.Label>What will we study in this course?</Form.Label>
//   <Form.Control as="textarea" rows={3} placeholder="Enter course description" />
// </Form.Group>

// <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
//         <Form.Label>Zoom Link</Form.Label>
//         <Form.Control type="text" placeholder="Enter zoom link" />
//       </Form.Group>

//       <Form.Group className="mb-3 mt-2" controlId="formBasicText">
//         <Form.Label>Add notes link</Form.Label>
//         <Form.Control type="text" placeholder="Add notes link" />
//       </Form.Group>

//       <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
//         <Form.Label>Course price</Form.Label>
//         <Form.Control type="text" placeholder="Enter course price" />
//       </Form.Group>


//       <Link to = "coursecreated">
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//       </Link>
//     </Form>
//     </div>
//     </>
//   )
// }

// export default CreateCourse





export default function CreateCourse() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  
    const [image, setImage] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const [days, setDays] = useState([]);
  const [times, setTimes] = useState([]);

  const handleDayChange = (event) => {
    const day = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setDays([...days, day]);
    } else {
      setDays(days.filter((d) => d !== day));
    }
  };

  

  const handleTimeChange = (event) => {
    const time = event.target.value;
    const day = event.target.dataset.day;
    const newTimes = [...times];
    const index = newTimes.findIndex((t) => t.day === day);
    if (index === -1) {
      newTimes.push({ day, time });
    } else {
      newTimes[index].time = time;
    }
    setTimes(newTimes);
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Create Course
      </Heading>
      <Flex mb={4} display={{ base: "block", sm: "flex" }}>
      <FormControl as={GridItem} mr = {2}>
        <FormLabel
          htmlFor="course_title"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Course Title
        </FormLabel>
        <Input
          type="text"
          name="course_title"
          id="course_title"
          autoComplete="course_title"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
        </FormControl>


        <FormControl as={GridItem} >
        <FormLabel
          htmlFor="course_price"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Course Price
        </FormLabel>
        <Input
          type="number"
          name="course_price"
          id="course_price"
          autoComplete="course_price"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
        </FormControl>

        {/* <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl> */}
      </Flex>
      <Flex mb={4} display={{ base: "block", sm: "flex" }}>
      <FormControl as={GridItem} colSpan={6}>
      <FormLabel
          htmlFor="upload_image"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Upload an image
        </FormLabel>
      <Flex
                mt={5}
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
                      htmlFor="image-upload"
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
                      <span>Upload an image</span>
                      <VisuallyHidden>
                        <input
                          id="image-upload"
                          name="image-upload"
                          type="file"
                        />
                      </VisuallyHidden>
                    </chakra.label>
                    <Text pl={1}>or drag and drop</Text>
                  </Flex>
                </Stack>
              </Flex>
              </FormControl>
      </Flex>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        
      </FormControl>

      {/* <FormControl as={GridItem} colSpan={6}>
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
        />
      </FormControl> */}
      <Flex gap={5} display={{ base: "block", sm: "flex" }}>
      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="postal_code"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Course Duration
          </FormLabel>
          <Input
            type="text"
            name="course_duration"
            id="course_duration"
            autoComplete="course_duration"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          />
        </FormControl>

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
            Total classes in week
          </FormLabel>
          <Input
            type="number"
            name="total_classes"
            id="total_classes"
            autoComplete="total_classes"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          />
        </FormControl>

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
            Start Date
          </FormLabel>
          <Input
            type="date"
            name="start_date"
            id="start_date"
            autoComplete="atart_date"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          />
        </FormControl>

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
            End Date
          </FormLabel>
          <Input
            type="date"
            name="end_date"
            id="end_date"
            autoComplete="end_date"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          />
        </FormControl>

        
      </Flex>
      <Flex mb={4} display={{ base: "block", sm: "flex" }}>
      <FormControl as={GridItem} colSpan={[6, 3]}>


      
      <FormLabel
            htmlFor="cdt"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            End Class Days and Times
          </FormLabel>
       <div>
         {daysOfWeek.map((day) => (
          <FormLabel key={day}>
            <input
              type="checkbox"
              value={day}
              checked={days.includes(day)}
              onChange={handleDayChange}
              style = {{marginLeft: '3em'}}
            />
            {day}
          </FormLabel>
        ))}
      </div>
      {days.length > 0 && (
        <div>
          {days.map((day) => (
            <div key={day}>
              <h3>{day}</h3>
              <select value={times.find((t) => t.day === day)?.time} data-day={day} onChange={handleTimeChange}>
                <option value="">Select time</option>
                <option value="9:00am">9:00am</option>
                <option value="10:00am">10:00am</option>
                <option value="11:00am">11:00am</option>
                <option value="12:00pm">12:00pm</option>
                <option value="1:00pm">1:00pm</option>
                <option value="2:00pm">2:00pm</option>
                <option value="3:00pm">3:00pm</option>
                <option value="4:00pm">4:00pm</option>
              </select>
            </div>
          ))}
        </div>
      )}
      </FormControl>
      </Flex>

      <Flex mb={4} display={{ base: "block", sm: "flex" }}>
      <FormControl as={GridItem} mr = {2}>
        <a href = "">
        <FormLabel
          htmlFor="zoom_link"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Add Zoom Link
        </FormLabel>
        <Input
          type="text"
          name="zoom_link"
          id="zoom_link"
          autoComplete="zoom_link"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
        </a>
        </FormControl>

        <FormControl as={GridItem} mr = {2}>
        <a href = "">
        <FormLabel
          htmlFor="notes_link"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Add Notes Link
        </FormLabel>
        <Input
          type="text"
          name="notes_link"
          id="notes_link"
          autoComplete="notes_link"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
        </a>
        </FormControl>

        {/* <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl> */}
      </Flex>





      <Flex mb={4} display={{ base: "block", sm: "flex" }}>
      <FormControl as={GridItem} mr = {2}>
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
          Add Course Description
        </FormLabel>
        <Textarea
          name="description"
          id="description"
          autoComplete="description"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
        </FormControl>

        {/* <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl> */}
      </Flex>

      <Flex justifyContent="flex-end">
      <Link to = "coursecreated">
       <Button variant="primary" type="submit">
         Submit
       </Button>
       </Link>
       </Flex>
    </>
  );
}


const languages = ["Sindhi", "Punjabi", "Pushto", "Urdu", "Saraiki", "Balochi"];