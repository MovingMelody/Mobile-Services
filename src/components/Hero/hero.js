import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { HiOutlinePhone, HiLocationMarker } from "react-icons/hi";
import SlideShow from "./slides";
import { motion } from "framer-motion";
import { cardVariants } from "../../animation";
export default function CallToActionWithVideo() {
  return (
    <motion.div variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen">
    <Container maxW={"7xl"}>
      <Box px={5}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 12, md: 28 }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "0%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  opacity: 0.6,
                  bg: "brand",
                  zIndex: -1,
                }}
              >
                We Repair
              </Text>
              <br />
              <Text as={"span"} color={"red.400"}>
                All Apple Things.
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              At iDeviceFix.in, we handle all complex to minor repairs related
              to your MacBook or any Other Apple Devices.
            </Text>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"primary"}
                bg={"brand"}
                onClick={() => {
                  window.location.href = "#bookAppointment";
                }}
                _hover={{ bg: "#003F3F" }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  href="#bookAppointment"
                >
                  Repair My Device
                </Link>
              </Button>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                onClick={() => {
                  window.open("tel:9900000642");
                }}
                px={6}
                leftIcon={<HiOutlinePhone h={4} w={4} color={"black"} />}
              >
                <Link style={{ textDecoration: "none" }} href="tel:9900000642">
                  +91 9900000642
                </Link>
              </Button>
            </Stack>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "row" }}>
              <HiLocationMarker size="30" color="black"></HiLocationMarker>
              <Text>
                Sri Ranga Complex, Dommsandra Circle
                <br />
                Sarjapur main road Bengaluru, 572125.
              </Text>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Blob
              w={"150%"}
              h={"150%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            />
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <SlideShow />
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Container>
    </motion.div>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
