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
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaRss } from "react-icons/fa";
import { FiMenu, FiChevronDown, FiSearch } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BsPersonCheckFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
const layoutName = "admin";
export default function AdminLayout() {
  const sidebar = useDisclosure();

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
            base: "space-between",
            md: "end",
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
            {/* <Flex alignItems={"center"}> */}
            {/* <Menu>
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
                        Admin
                      </Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList bg={"white"} borderColor={"gray.200"}>
                  <MenuItem>Log out</MenuItem>
                </MenuList>
              </Menu> */}

            {/* </Flex> */}
            <Button
              variant="outline"
              colorScheme="brand"
              size="sm"
              rightIcon={<BiLogOut />}
            >
              Logout
            </Button>
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
  const { icon, children, href, list, ...rest } = props;
  const location = useLocation();
  const active = location.pathname.includes(href);
  if (list) {
    return (
      <Box>
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color="brand.400"
          _hover={{
            bg: "brand.100",
            color: "brand.500",
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
          
        >
          {icon && (
            <Icon
              mx="2"
              boxSize="4"
              _groupHover={{
                color: "brand.500",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
        {list.map((listItem:{href:string,icon:string,name:string}) => {
          return (
            <Link to={href+listItem.href}>
              <Flex
                align="center"
                px="4"
                pl="12"
                py="1"
                cursor="pointer"
                color="brand.400"
                _hover={{
                  bg: "brand.100",
                  color: "brand.500",
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
                bg={location.pathname.includes(listItem.href) && "brand.50"}
              >
                {listItem.icon && (
                  <Icon
                    mx="2"
                    boxSize="4"
                    _groupHover={{
                      color: "brand.500",
                    }}
                    as={icon}
                  />
                )}
                {listItem.name}
              </Flex>
            </Link>
          );
        })}
      </Box>
    );
  } else {
    return (
      <Link to={href}>
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color="brand.400"
          _hover={{
            bg: "brand.100",
            color: "brand.500",
          }}
          bg={active && "brand.50"}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
        >
          {icon && (
            <Icon
              mx="2"
              boxSize="4"
              _groupHover={{
                color: "brand.500",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  }
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
    bg="white"
    borderColor="blackAlpha.300"
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <Flex px="4" py="5" align="center">
      {/* <Logo /> */}
      <Text fontSize="2xl" ml="2" fontWeight="semibold">
        Admin
      </Text>
    </Flex>
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      // color="gray.600"
      aria-label="Main Navigation"
    >
      {menuList.map((item) => {
        if (item.children) {
          return (
            <NavItem
              icon={item.icon}
              href={`/${layoutName}/${item.href}/`}
              key={item.name}
              list={item.children}
            >
              {item.name}
            </NavItem>
          );
        } else {
          return (
            <NavItem
              icon={item.icon}
              href={`/${layoutName}/${item.href}`}
              key={item.name}
            >
              {item.name}
            </NavItem>
          );
        }
      })}
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
    name: "Account Approvals",
    href: "approval",
    children: [
      {
        name: "Doctor",
        href: "doctor",
      },
      {
        name: "Teacher",
        href: "teacher",
      },
    ],
    icon: BsPersonCheckFill,
  },
];
