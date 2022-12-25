import { Center, Tooltip } from "@chakra-ui/react";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function FloatButton() {
  return (
    <Tooltip
      hasArrow
      label="Quick Message"
      placement="left"
      bg="gray.300"
      color="black"
    >
      <Center
        borderRadius="100px"
        height="60px"
        width="60px"
        m="4"
        bg="#23D366"
        zIndex="99"
        style={{ position: "fixed", bottom: "0", right: "0" }}
      >
        <BsWhatsapp color="white" size="22"></BsWhatsapp>
      </Center>
    </Tooltip>
  );
}

export default FloatButton;
