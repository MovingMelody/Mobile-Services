import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Center,
  useToast,
  CircularProgress,
  // useColorModeValue,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { submitBusinessDeal } from "../../services/form.service";
import { motion } from "framer-motion";
import { cardVariants } from "../../animation";
export default function Contact() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const uploadBusinessDeal = () => {
    toast.closeAll();

    if (!message.trim()) {
      toast({
        title: `Please enter your Business deal`,
        position: "bottom",
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (!name.trim()) {
      toast({
        title: `Please Enter Your Name`,
        position: "bottom",
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (!phone.trim()) {
      toast({
        title: `Please Enter Phone`,
        position: "bottom",
        status: "error",
        isClosable: true,
      });
      return;
    }
    setBusy(true);

    submitBusinessDeal({
      userName: name,
      phone,
      message,
    }).then(() => {
      setName("");
      setPhone("");
      setBusy(false);
      setMessage("");
      toast({
        title: `Submission Successful`,
        position: "bottom",
        status: "success",
        isClosable: true,
      });
    });
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <Container
        id="businessDeals"
        maxW="full"
        bg="brand"
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            bg="#003F3F"
            color="white"
            borderRadius="lg"
            m={{ sm: 6, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
            mt="16"
          >
            <Box p={6}>
              <Wrap spacing={{ base: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>For Business Deals</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.300">
                      Fill up the form below to get in touch with us
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={8} alignItems="flex-start">
                        <HStack>
                          <MdPhone color="#FC7969" size="20px" />
                          <Text>+91 9900000642</Text>
                        </HStack>

                        <HStack>
                          <MdEmail color="#FC7969" size="20px" />
                          <Text>repair@idevicefix.in</Text>
                        </HStack>

                        <HStack>
                          <MdLocationOn color="#FC7969" size="20px" />
                          <Text>
                            Sri Ranga complex, Dommsandra circle
                            <br /> Sarjapur Main road, Bangalore 572125.
                          </Text>
                        </HStack>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Center>
                    <Box bg="white" borderRadius="lg">
                      <Box m={10} color="#0B0E3F">
                        <VStack spacing={5}>
                          <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input
                                type="text"
                                size="md"
                                value={name}
                                onChange={(event) => {
                                  setName(event.currentTarget.value);
                                }}
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Phone Number</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdPhone color="gray.800" />}
                              />
                              <Input
                                type="text"
                                value={phone}
                                maxLength={10}
                                size="md"
                                onChange={(e) => {
                                  const re = /^[0-9\b]+$/;
                                  if (
                                    e.target.value === "" ||
                                    re.test(e.target.value)
                                  ) {
                                    setPhone(e.currentTarget.value);
                                  }
                                }}
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              value={message}
                              onChange={(event) => {
                                setMessage(event.currentTarget.value);
                              }}
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: "gray.300",
                              }}
                              placeholder="I need bulk order"
                            />
                          </FormControl>
                          <FormControl id="name" float="right">
                            <Center>
                              {!busy ? (
                                <Button
                                  variant="solid"
                                  bg="#FC7969"
                                  color="white"
                                  _hover={{}}
                                  onClick={() => uploadBusinessDeal()}
                                >
                                  Send Message
                                </Button>
                              ) : (
                                <CircularProgress
                                  isIndeterminate
                                  color="green.300"
                                />
                              )}
                            </Center>
                          </FormControl>
                        </VStack>
                      </Box>
                    </Box>
                  </Center>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </motion.div>
  );
}
