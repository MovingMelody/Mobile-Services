import {
  Heading,
  VStack,
  Text,
//   useColorModeValue,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Cart = () => {
//   const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

  return (
    <VStack p={10} spacing={6} align="flex-start" >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size={{ base: "xl" }} color="brand">
          Save Time & Money
        </Heading>
        <Text>
          Our Service team will call you to pickup the device after submitting
          the issue.{" "}
        </Text>
        <List spacing={3}>
          <ListItem></ListItem>
          <ListItem>
            <ListIcon as={HiArrowNarrowRight} color="#003F3F" />
            Book Our Service
          </ListItem>
          <ListItem>
            <ListIcon as={HiArrowNarrowRight} color="#003F3F" />
            Get a callback from our team
          </ListItem>
          <ListItem>
            <ListIcon as={HiArrowNarrowRight} color="#003F3F" />
            Repair & Quick Delivery
          </ListItem>
        </List>
      </VStack>
    </VStack>
  );
};

export default Cart;
