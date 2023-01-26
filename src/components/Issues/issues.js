import {
  Container,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import React from "react";
import {
  HiFingerPrint,
  HiOutlineSpeakerWave,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";
import { AiOutlineApple } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";
import { CgSmartphoneChip, CgAppleWatch } from "react-icons/cg";
import { RiWaterFlashLine } from "react-icons/ri";
import { FiBatteryCharging } from "react-icons/fi";
import { MdOutlineLaptopMac } from "react-icons/md";
import { motion } from "framer-motion";
import { cardVariants } from "../../animation";

export default function mobileBrands() {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <Container
        minWidth="100%"
        p={{ xl: 10, base: 6 }}
        style={{ backgroundColor: "#262A2E" }}
        mt="12"
      >
        <Heading
          as="h4"
          textAlign="center"
          mb="10"
          color="white"
          textTransform="capitalize"
        >
          Issues We Resolve
        </Heading>

        <Wrap
          spacing={{ xl: "120px", base: "80px" }}
          justify="center"
          maxWidth={{ xl: "80%", base: "90%" }}
          margin="auto"
          mb="6"
        >
          <WrapItem flexDirection="column" alignItems="center">
            <Center
              w="92px"
              h="92px"
              bg="#33383c"
              border="1px solid #4d545c"
              borderRadius="6px"
            >
              <AiOutlineApple size={40} color="#FC7969" />
            </Center>
            <Text mt="4" color="white" maxW="120px">
              All Apple
            </Text>
            <Text color="white" maxW="120px">
              Devices Issues
            </Text>
          </WrapItem>
          <WrapItem flexDirection="column" alignItems="center">
            <Center
              w="92px"
              h="92px"
              bg="#33383c"
              border="1px solid #4d545c"
              borderRadius="6px"
            >
              <HiOutlineDevicePhoneMobile size={40} color="#FC7969" />
            </Center>
            <Text mt="4" color="white" maxW="120px">
              Broken
            </Text>
            <Text color="white" maxW="120px">
              Displays
            </Text>
          </WrapItem>
          <WrapItem flexDirection="column" alignItems="center">
            <Center
              w="92px"
              h="92px"
              bg="#33383c"
              border="1px solid #4d545c"
              borderRadius="6px"
            >
              <BsBatteryHalf size={40} color="#FC7969" />
            </Center>
            <Text mt="4" color="white" maxW="120px">
              Battery Dead
            </Text>
            <Text color="white" maxW="120px">
              Issues
            </Text>
          </WrapItem>
          <WrapItem flexDirection="column" alignItems="center">
            <Center
              w="92px"
              h="92px"
              bg="#33383c"
              border="1px solid #4d545c"
              borderRadius="6px"
            >
              <HiFingerPrint size={40} color="#FC7969" />
            </Center>
            <Text mt="4" color="white" maxW="120px">
              Fingerprint
            </Text>
            <Text color="white" maxW="120px">
              Issues
            </Text>
          </WrapItem>
          <WrapItem flexDirection="column" alignItems="center">
            <Center
              w="92px"
              h="92px"
              bg="#33383c"
              border="1px solid #4d545c"
              borderRadius="6px"
            >
              <CgSmartphoneChip size={40} color="#FC7969" />
            </Center>
            <Text mt="4" color="white" maxW="120px">
              Motherboard
            </Text>
            <Text color="white" maxW="120px">
              Issues
            </Text>
          </WrapItem>
          <WrapItem flexDirection="column" alignItems="center">
            <Center
              w="92px"
              h="92px"
              bg="#33383c"
              border="1px solid #4d545c"
              borderRadius="6px"
            >
              <RiWaterFlashLine size={40} color="#FC7969" />
            </Center>
            <Text mt="4" color="white" maxW="120px">
              Water
            </Text>
            <Text color="white" maxW="120px">
              Damage
            </Text>
          </WrapItem>
          <WrapItem flexDirection="column" alignItems="center">
            <Center
              w="92px"
              h="92px"
              bg="#33383c"
              border="1px solid #4d545c"
              borderRadius="6px"
            >
              <MdOutlineLaptopMac size={40} color="#FC7969" />
            </Center>
            <Text mt="4" color="white" maxW="120px">
              Laptop
            </Text>
            <Text color="white" maxW="120px">
              Issues
            </Text>
          </WrapItem>
          <WrapItem flexDirection="column" alignItems="center">
            <Center
              w="92px"
              h="92px"
              bg="#33383c"
              border="1px solid #4d545c"
              borderRadius="6px"
            >
              <CgAppleWatch size={40} color="#FC7969" />
            </Center>
            <Text mt="4" color="white" maxW="120px">
              Apple
            </Text>
            <Text color="white" maxW="120px">
              Watch
            </Text>
          </WrapItem>
          <WrapItem flexDirection="column" alignItems="center">
            <Center
              w="92px"
              h="92px"
              bg="#33383c"
              border="1px solid #4d545c"
              borderRadius="6px"
            >
              <FiBatteryCharging size={40} color="#FC7969" />
            </Center>
            <Text mt="4" color="white" maxW="120px">
              Charging
            </Text>
            <Text color="white" maxW="120px">
              Issues
            </Text>
          </WrapItem>
          <WrapItem flexDirection="column" alignItems="center">
            <Center
              w="92px"
              h="92px"
              bg="#33383c"
              border="1px solid #4d545c"
              borderRadius="6px"
            >
              <HiOutlineSpeakerWave size={40} color="#FC7969" />
            </Center>
            <Text mt="4" color="white" maxW="120px">
              Speaker
            </Text>
            <Text color="white" maxW="120px">
              Issues
            </Text>
          </WrapItem>
        </Wrap>
      </Container>
    </motion.div>
  );
}
