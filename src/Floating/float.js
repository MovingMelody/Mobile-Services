import { Center, Link, Tooltip } from "@chakra-ui/react";
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
      <Link href="https://api.whatsapp.com/send?phone=+91-9900000642&text=Hi&source=&data=">
        <Center
          borderRadius="100px"
          height="60px"
          width="60px"
          m="4"
          bg="#23D366"
          onClick="window.location.href='www.google.com';"
          zIndex="99"
          style={{ position: "fixed", bottom: "0", right: "0" }}
        >
          <BsWhatsapp color="white" size="22"></BsWhatsapp>
        </Center>
      </Link>
    </Tooltip>
  );
}

export default FloatButton;

// Sri ranga  complex dommsandra  circle sarjapur main road bangalore 572125
// Ph 9900000642