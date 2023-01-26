import React from "react";
import { Container, Box, Text, Center, SimpleGrid } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "../styles/style.css";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { cardVariants } from "../animation"; 


const About = () => {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <Container maxW={"7xl"} className="aboutBg" mb={3}>
        <Box p={5} color={"white"}>
          <Text as="b" fontSize="40px">
            About Us
          </Text>
          <Breadcrumb
            fontWeight="medium"
            fontSize="sm"
            spacing="8px"
            mt={3}
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
        <Text as="b" fontSize="40px">
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

      <SimpleGrid columns={[1, null, 3]} spacing="20px" p={8}>
        <Box boxShadow="2xl">
          <Card px="3" rounded="md" bg="white">
            <CardHeader>
              <Center>
                <Text fontSize="20px">Original Products</Text>
              </Center>
            </CardHeader>
            <CardBody>
              <Text className="aboutText">
                How all this mistaken idea of denouncing pleasure and praising
                pain was born and we will give you a complete account seds of
                the system
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box boxShadow="2xl">
          <Card px="3" rounded="md" bg="white">
            <CardHeader>
              <Center>
                <Text fontSize="20px">Original Products</Text>
              </Center>
            </CardHeader>
            <CardBody>
              <Text className="aboutText">
                How all this mistaken idea of denouncing pleasure and praising
                pain was born and we will give you a complete account seds of
                the system
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box boxShadow="2xl">
          <Card px="3" rounded="md" bg="white">
            <CardHeader>
              <Center>
                <Text fontSize="20px">Original Products</Text>
              </Center>
            </CardHeader>
            <CardBody>
              <Text className="aboutText">
                How all this mistaken idea of denouncing pleasure and praising
                pain was born and we will give you a complete account seds of
                the system
              </Text>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </motion.div>
  );
};

export default About;
