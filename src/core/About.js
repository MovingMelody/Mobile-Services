import React from "react";
import { Container, Box, Text, Center, SimpleGrid } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "../styles/style.css";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";

const About = () => {
  return (
    <div>
      <Container maxW={"100%"} className="aboutBg" mb={3}>
        <Box p={5} color={"white"}>
          <Text as="b" fontSize="30px">
            About Us
          </Text>
          <Breadcrumb
            fontWeight="medium"
            fontSize="sm"
            spacing="8px"
            separator={<ChevronRightIcon color="white.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/about">About</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Container>
      <Center>
        <Text as="b" fontSize="30px">
          Our Core <span style={{ color: "#F56565" }}>Values</span>
        </Text>
      </Center>
      <Center>
        <Box
          borderBottom="2px"
          borderBottomWidth="3px"
          w={180}
          borderColor="#F56565"
        ></Box>
      </Center>

      <SimpleGrid columns={[1, null, 3]} spacing="20px" px={6} py={1} mt = {5}>
        <Box>
          <Card px="3" rounded="md" bg="white" border='1px' borderColor='#F56565'>
            <CardHeader>
              <Center>
                <Text as="b" fontSize="20px">
                  Respectful
                </Text>
              </Center>
            </CardHeader>
            <CardBody>
              <Text className="aboutText">
                We Treat people and their concerns with the utmost respect.We
                try to provide solution for every problem of all apple devices and other android devices.
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box >
          <Card px="3" rounded="md" bg="white" border='1px' borderColor='#F56565'>
            <CardHeader>
              <Center>
                <Text as="b" fontSize="20px">
                  Best Service
                </Text>
              </Center>
            </CardHeader>
            <CardBody>
              <Text className="aboutText">
                We provide the best service. We have a great team who work
                together in purpose and good service is our priority. Wow
                everyone, every time...
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card px="3" rounded="md" bg="white" border='1px' borderColor='#F56565'>
            <CardHeader>
              <Center>
                <Text as="b" fontSize="20px">
                  Customer Happiness
                </Text>
              </Center>
            </CardHeader>
            <CardBody>
              <Text className="aboutText">
                Customers satisfaction is our first priority. We try our best to
                make the customers happy with our work. We love to hear good
                feedbacks.
              </Text>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default About;
