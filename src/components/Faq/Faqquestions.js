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
import { faqVariants } from "../../animation";

const Faqquestions = () => {
  return (
    <VStack p={0} w="full" h="full" align="stretch">
      <motion.div
        variants={faqVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
        <Accordion allowToggle>
        <motion.div>
          <AccordionItem
            border="1px solid #FC7969"
            borderRadius="6px"
            p="2"
            alignItems="stretch"
            alignContent="stretch"
            mb="5"
          >
            <motion.h2>
              <AccordionButton _hover="color:red">
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight="medium"
                    color="hc"
                  >
                    How does Repair work ?
                  </Text>
                </Box>
                <AccordionIcon ml="30" />
              </AccordionButton>
            </motion.h2>
            <AccordionPanel pb={4} color="bc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          </motion.div>
          <motion.div>
          <AccordionItem
            border="1px solid #FC7969"
            borderRadius="6px"
            p="2"
            alignItems="stretch"
            alignContent="stretch"
            mb="5"
          >
            <motion.h2>
              <AccordionButton _hover="color:red">
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight="medium"
                  >
                    Do you provide for all Apple Devices ?
                  </Text>
                </Box>
                <AccordionIcon ml="30" />
              </AccordionButton>
            </motion.h2>
            <AccordionPanel pb={4} color="bc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          </motion.div>
          <motion.div>
          <AccordionItem
            border="1px solid #FC7969"
            borderRadius="6px"
            p="2"
            alignItems="stretch"
            alignContent="stretch"
            mb="5"
          >
            <motion.h2>
              <AccordionButton _hover="color:red">
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight="medium"
                  >
                    Do you provide repair services for all brands?
                  </Text>
                </Box>
                <AccordionIcon ml="30" />
              </AccordionButton>
            </motion.h2>
            <AccordionPanel pb={4} color="bc">
              Yes, the iDeviceFix.in provides mobile services & repair in
              Bangalore for all brands. The expert team is excellent in offering
              iPhone and MacBook repair services as well.
            </AccordionPanel>
          </AccordionItem>
          </motion.div>
          <motion.div>
          <AccordionItem
            border="1px solid #FC7969"
            borderRadius="6px"
            p="2"
            alignItems="stretch"
            alignContent="stretch"
            mb="5"
          >
            <motion.h2>
              <AccordionButton _hover="color:red">
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight="medium"
                  >
                    Do I need to book my device in online? ?
                  </Text>
                </Box>
                <AccordionIcon ml="30" />
              </AccordionButton>
            </motion.h2>
            <AccordionPanel pb={4} color="bc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          </motion.div>
          <motion.div>
          <AccordionItem
            border="1px solid #FC7969"
            borderRadius="6px"
            p="2"
            alignItems="stretch"
            alignContent="stretch"
            mb="5"
          >
            <motion.h2>
              <AccordionButton _hover="color:red">
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight="medium"
                  >
                   What's the price of...?
                  </Text>
                </Box>
                <AccordionIcon ml="30" />
              </AccordionButton>
            </motion.h2>
            <AccordionPanel pb={4} color="bc">
            For all our repair prices, Contact us via WhatsApp or Phone call.


            </AccordionPanel>
          </AccordionItem>
          </motion.div>
          <motion.div>
          <AccordionItem
            border="1px solid #FC7969"
            borderRadius="6px"
            p="2"
            alignItems="stretch"
            alignContent="stretch"
            mb="5"
          >
            <motion.h2>
              <AccordionButton _hover="color:red">
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight="medium"
                  >
                   I just cracked my screen! What now?
                  </Text>
                </Box>
                <AccordionIcon ml="30" />
              </AccordionButton>
            </motion.h2>
            <AccordionPanel pb={4} color="bc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          </motion.div>
        </Accordion>
      </motion.div>
    </VStack>
  );
};

export default Faqquestions;
