import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  MenuItem,
  Menu,
  MenuList,
  MenuButton,
  HStack,
  MenuDivider,
  VStack,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import React from "react";
import { FaRss } from "react-icons/fa";
import { FiMenu, FiChevronDown, FiSearch } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import { Link, Outlet, useLocation,useNavigate } from "react-router-dom";


const layoutName = "teacher";
export default function TeacherLayout() {
  const sidebar = useDisclosure();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    Cookies.remove("token");
    navigate("/login");
  }
  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
    >
      <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        <Flex
          as="header"
          align="center"
          justify={{
            base:"space-between",
            md:"end"
          }}
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{
              base: "inline-flex",
              md: "none",
            }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          
          {/* <InputGroup
            w="96"
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search for articles..." />
          </InputGroup> */}

          <Flex align="center">
            {/* <Icon color="gray.500" as={FaBell} cursor="pointer" /> */}
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                >
                  <HStack>
                    <Avatar
                      size={"sm"}
                      src={
                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      }
                    />
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm">Muzammil</Text>
                      <Text fontSize="xs" color="gray.600">
                        Teacher
                      </Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList bg={"white"} borderColor={"gray.200"}>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  {/* <MenuItem>Billing</MenuItem> */}
                  <MenuDivider />
                  <MenuItem onClick={()=>{handleLogout()}}>Log out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {/* Add content here, remove div below  */}
          <Outlet />
          {/* <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" /> */}
        </Box>
      </Box>
    </Box>
  );
}
const NavItem = (props: any) => {
  const { icon, children, href, ...rest } = props;
  const location = useLocation();
  const active = location.pathname.includes(href);
  return (
    <Link to={href}>
      <Flex
        align="center"
        px="4"
        mx="2"
        my="1"
        rounded="md"
        py="3"
        cursor="pointer"
        color="whiteAlpha.700"
        _hover={
          !active && {
            bg: "blackAlpha.300",
            color: "whiteAlpha.900",
          }
        }
        backgroundColor={active && "blackAlpha.400"}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
      
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: "gray.300",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const SidebarContent = (props: any) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg="brand.500"
    borderColor="blackAlpha.300"
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <Flex px="4" py="5" align="center">
      {/* <Logo /> */}
      <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
        Teacher
      </Text>
    </Flex>
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      aria-label="Main Navigation"
    >
      {menuList.map((item) => (
        <NavItem
          icon={item.icon}
          href={`/${layoutName}/${item.href}`}
          key={item.name}
        >
          {item.name}
        </NavItem>
      ))}
    </Flex>
  </Box>
);
// type MenuList =
const menuList = [
  {
    name: "Dashboard",
    href: "dashboard",
    icon: MdHome,
  },
  {
    name: "Previous Courses",
    href: "coursetaught",
    icon: FaRss,
  }
];
