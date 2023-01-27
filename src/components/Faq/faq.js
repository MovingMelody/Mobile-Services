import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  VStack,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { cardVariants, faqVariants } from "../../animation";
import Faqquestions from "./Faqquestions";
export default function faq() {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <Container maxWidth="container.xl" p={8} mt="10" id="aboutUs">
        <Flex py={8} direction={{ base: "column", md: "row" }}>
          <VStack maxWidth="2xl" h="full" alignItems="flex-start" mb="6">
            <Heading m="0" pr={{ xl: 14 }}>
              We’ll be there when you need us
            </Heading>
            <Text pr={{ xl: 14 }}>
              The one-stop shop for all your Apple Devices and Other Smartphone
              fixes.
              <br />
              <br />
              iDeviceFix.in Team is specialized at troubleshooting, repairing,
              replacing, and refurbishing all types of Tech Devices.
            </Text>
          </VStack>
          <Faqquestions />
        </Flex>
      </Container>
    </motion.div>
  );
}
