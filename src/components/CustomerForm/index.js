import { Flex, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Cart from "./details";
import Details from "./issueForm";
import { cardVariants } from "../../animation";
const IndexPage = () => {
  //   const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

  return (
    <motion.div variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen">
    <Container id="bookAppointment" minWidth="100%" height="100%" p={0}>
      <Flex p={[0, 10]} direction={{ base: "column", md: "row" }}>
        <Cart />
        <Details />
      </Flex>
    </Container>
    </motion.div>
  );
};

export default IndexPage;
