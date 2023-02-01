import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
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
                First you need to book an appointment.Then you will get a
                call from our team to pickup your device and again we will deliver the
                product after repair.
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
                Yes, we will provide services for all apple devices (Laptops and Mobiles). 
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
                Yes, we will provide services for other brand mobiles as well like Oppo,Mi,oneplus etc.
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
                      Do I need to book my device in online?
                    </Text>
                  </Box>
                  <AccordionIcon ml="30" />
                </AccordionButton>
              </motion.h2>
              <AccordionPanel pb={4} color="bc">
                Yes, you need to book an appointment online through our website. so that our team will contact you back to pick your device.
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
                For all our repair prices, Contact us via WhatsApp or Phone
                call.
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
                Just book an appointment and our team is ready to provide solution to any problem.  
              </AccordionPanel>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </motion.div>
    </VStack>
  );
};

export default Faqquestions;
