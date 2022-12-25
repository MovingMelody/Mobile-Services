import React from "react";
import styled from "styled-components";
import oneplus from "../../assets/brands/oneplus.png";
import apple from "../../assets/brands/apple-compressed.jpg";
import samsung from "../../assets/brands/samsung.png";
import vivo from "../../assets/brands/vivo.png";
import google from "../../assets/brands/google.png";
import oppo from "../../assets/brands/oppo.png";
import huawei from "../../assets/brands/huawei.png";
import moto from "../../assets/brands/moto.png";
import mi from "../../assets/brands/mi.png";
import realme from "../../assets/brands/realme.png";
import lenovo from "../../assets/brands/lenovo.png";
import asus from "../../assets/brands/asus.png";
import nokia from "../../assets/brands/nokia.webp";
import honor from "../../assets/brands/honor.jpeg";
import { Container, Heading, Text } from "@chakra-ui/react";
export default function mobileBrands() {
  return (
    <Container maxWidth="container.xl" mt="20">
      <Heading
        as="h5"
        size="lg"
        textAlign="center"
        mb="2"
        color="hc"
        textTransform="capitalize"
      >
        We Provide Service for all Mobile Brands
      </Heading>
      <Text textAlign="center" mb="8" color="bc">
        At Gadget Repair We repair iPhones, MacBooks, Apple Watch, Android
        Mobiles, Tablets, Smart Watches at best price.
      </Text>
      <BrandsWrapper>
        <EachBrand>
          <Image src={apple} alt="" srcset="" width="200px" />
        </EachBrand>
        <EachBrand>
          <Image src={oneplus} alt="" srcset="" width="140px" />
        </EachBrand>
        <EachBrand>
          <Image src={google} alt="" srcset="" width="60px" />
        </EachBrand>
        <EachBrand>
          <Image src={realme} alt="" srcset="" width="110px" />
        </EachBrand>
        <EachBrand>
          <Image src={mi} alt="" srcset="" width="55px" />
        </EachBrand>
        <EachBrand>
          <Image src={samsung} alt="" srcset="" width="100px" />
        </EachBrand>
        <EachBrand>
          <Image src={vivo} alt="" srcset="" width="90px" />
        </EachBrand>

        <EachBrand>
          <Image src={moto} alt="" srcset="" width="100px" />
        </EachBrand>
        <EachBrand>
          <Image src={huawei} alt="" srcset="" width="140px" />
        </EachBrand>
        <EachBrand>
          <Image src={oppo} alt="" srcset="" width="90px" />
        </EachBrand>
        <EachBrand>
          <Image src={lenovo} alt="" srcset="" width="110px" />
        </EachBrand>
        <EachBrand>
          <Image src={asus} alt="" srcset="" width="110px" />
        </EachBrand>
        <EachBrand>
          <Image src={honor} alt="" srcset="" width="110px" />
        </EachBrand>
        <EachBrand>
          <Image src={nokia} alt="" srcset="" width="110px" />
        </EachBrand>
      </BrandsWrapper>
    </Container>
  );
}

const BrandsWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 0 auto;
  ${"" /* max-width: 1080px; */}
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: repeat(2, 150px);
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 0.5fr));
    grid-template-rows: repeat(4, 150px);
  }
`;

const EachBrand = styled.div`
  background: white;
  padding: 36px;
  display: flex;
  border: 1px solid #f2f1f1;
  align-items: center;
  border-radius: 8px;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: all ease-in-out 0.3s;
    box-shadow: 0 2.8px 2.2px #f2f1f1, 0 6.7px 5.3px #f2f1f1,
      0 12.5px 10px #f2f1f1, 0 22.3px 17.9px #f2f1f1, 0 21.8px 23.4px #f2f1f1,
      0 40px 40px #f2f1f1;
  }
`;

const Image = styled.img`
  margin: auto 0;
`;
