import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import user1 from "../../assets/reviews/user1.png";
import user2 from "../../assets/reviews/user2.png";
import user3 from "../../assets/reviews/user3.png";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text color="white" fontWeight={600}>
          {name}
        </Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.200", "gray.200")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg="brand">
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading fontWeight={"700"} color="white">
            Our Customers Says
          </Heading>
          <Text color="white" textAlign="center">
            Why iDeviceFix is the best Macbook & iPhone Repair Center Choice For
            You?
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Affordable Repair Cost</TestimonialHeading>
              <TestimonialText>
                Nice and fast service. Parts are little less compared to apple
                service centre. Recommended for repairing MacBook.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={user3}
              name={"SANTHOSH kn"}
              title={"@Google Reviews"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Quick Service</TestimonialHeading>
              <TestimonialText>
                Fast service with latest technology equipments and value for
                Money.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={user2}
              name={"Rajendra Prasad Nelakurthi"}
              title={"@Google Reviews"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Original Parts</TestimonialHeading>
              <TestimonialText>
                Very good and prompt service. Repaired my MacBook which was
                badly damaged and screen broken. Was done at a reasonable price
                , used Original Parts. Highly recommended!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={user1}
              name={"Sourav Chatterjee"}
              title={"@Google Reviews"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
