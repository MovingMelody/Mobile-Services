import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  HStack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
// import { HiAcademicCap } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import logo from "../../assets/smartphone.png";

const Logo = (props) => {
  return (
    <HStack spacing="2">
      <Image
        boxSize="36px"
        objectFit="cover"
        src={logo}
        alt="Dan Abramov"
      ></Image>
      <Heading size="md">Logo</Heading>
    </HStack>
  );
};
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={-1} textTransform="uppercase">
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box mt="20">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={18}>
          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Services</ListHeader>
            <Container
              bg="brand"
              height="3px"
              width="16"
              borderRadius="50px"
            ></Container>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>MacBook Repair</Link>
              <Tag
                size={"sm"}
                bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack>
            <Text>iPhone Repair</Text>
            <Text>Battery Replacement</Text>
            <Text>Mobile Screen Replacement</Text>
          </Stack>

          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Quick Links</ListHeader>
            <Container
              bg="brand"
              height="3px"
              width="16"
              borderRadius="50px"
            ></Container>
            <Text href={"#"}>Cookies Policy</Text>
            <Text href={"#"}>Privacy Policy</Text>
            <Text href={"#"}>Terms of Service</Text>
            <Text href={"#"}>Refund Policy</Text>
          </Stack>
          <Stack align={"flex-start"} spacing="3">
            <ListHeader>Contact Us</ListHeader>
            <Container
              bg="brand"
              height="3px"
              width="16"
              borderRadius="50px"
            ></Container>
            <HStack alignItems="start">
              <MdLocationOn height="40" size="30"></MdLocationOn>
              <Link href={"#"}>
                #950, 5th B Cross, 1st Main, 1st Block, Koramangala, Bangalore -
                560034
              </Link>
            </HStack>
            <HStack alignItems="center">
              <PhoneIcon size="30"></PhoneIcon>
              <Link href={"#"}>+91 9642183590</Link>
            </HStack>
            <HStack alignItems="center">
              <FiMail color="brand"></FiMail>
              <Link href={"#"}>repair@test.in</Link>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}
        px={{base:4}}
        >
          Copyright © Gadget Repair {new Date().getFullYear()}. All Rights
          Reserved.
        </Text>
      </Box>
    </Box>
  );
}
