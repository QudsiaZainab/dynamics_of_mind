import {
  Box,
  Button,
  Heading,
  IconButton,
  Td,
  Tr,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { BiCheck, BiEdit } from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";
import CommonTable from "../../../components/shared/CommonTable";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsEye } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import api from "../../../libs/api";
import { toast } from "react-toastify";
import {errorHandler} from "../../../components/shared/CommonToast";
import { StatusOfProfile } from "../../../types";
import capitalizeFirstLetter from "../../../libs/capitilizeFirstLetter";

interface FetchedProfile {
  first_name: string;
  last_name: string;
  expertise: string;
  experience: number;
  status: StatusOfProfile;
  user_data:string;
}
export default function AdminAccountApproval() {
  // const location = useLocation();
  const [data,setData] = React.useState<FetchedProfile[]>([]);
  const params = useParams();
  const registrationType = params.type; //Either doctor or teacher
  React.useEffect(()=>{
    api.get("/doctor/profile/get/all")
    .then(res=>{
      console.log(res.data)
      setData(res.data);
    })
    .catch(err=>{
      console.error(err);
    })
  },[])
  
  const handleAction = (action:boolean,id:string)=>{
    const status = action ? StatusOfProfile.APPROVED : StatusOfProfile.REJECTED;
    api.post("/doctor/profile/status",{
      status: status,
      userId:id
    })
    .then(res=>{
      console.log(res.data);
      setData(prevArray =>
        prevArray.map(item => {
          if (item.user_data === id) {
            return { ...item, status };
          }
          return item;
        })
      );
      toast.success(`${status}`);
    })
    .catch(err=>{
      errorHandler(err);
      console.error(err);
    })

  }
  return (
    <Box bg="white" p={2} boxShadow="md" rounded="md" minHeight="80vh">
      <Heading p={4} textAlign="center">
        {`${registrationType && capitalizeFirstLetter(registrationType)} Approval`}
      </Heading>
      <CommonTable headerData={headerItems}>
        {data?.map((item:any) => {//Will remove any later
          return (
            <Tr>
              <Td>{item.first_name + " " + item.last_name}</Td>
              <Td>{item.expertise}</Td>
              <Td>{item.experience}</Td>
              <Td>
                <Button size="sm">Preview</Button>
              </Td>
              <Td>{item.status}</Td>
              <Td>
                <Flex gap={1}>
                  <IconButton
                    colorScheme={"brand"}
                    size="xs"
                    aria-label="Approve"
                    onClick={()=>{handleAction(true,item.user_data)}}
                    isDisabled={item.status === StatusOfProfile.APPROVED}
                  >
                    <BiCheck size="20px" />
                  </IconButton>
                  <IconButton
                    colorScheme={"red"}
                    size="xs"
                    aria-label="Approve"
                    onClick={()=>{handleAction(false,item.user_data)}}
                    isDisabled={item.status === StatusOfProfile.REJECTED}
                  >
                    <MdClose size="20px" />
                  </IconButton>
                </Flex>
              </Td>
            </Tr>
          );
        })}
      </CommonTable>
    </Box>
  );
}
const headerItems = [
  "Name",
  "Area of Expertise",
  "Years of experience",
  "Resume",
  "Status",
  "Action",
];