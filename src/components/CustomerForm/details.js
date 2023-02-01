import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  SimpleGrid,
  GridItem,
  CircularProgress,
  Button,
  useBreakpointValue,
  //   useColorModeValue,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { submitIssue } from "../../services/form.service";
import Select from "react-select";

const Details = () => {
  const brandsList = [
    { label: "Apple", value: "apple" },
    { label: "Samsung", value: "samsung" },
    { label: "Oppo", value: "oppo" },
    { label: "Oneplus", value: "oneplus" },
    { label: "Redmi", value: "redmi" },
    { label: "Realme", value: "realme" },
    { label: "Asus", value: "asus" },
    { label: "Vivo", value: "vivo" },
    { label: "Google", value: "google" },
    { label: "Honor", value: "honor" },
    { label: "Motorola", value: "motorola" },
    { label: "Nokia", value: "nokia" },
  ];
  const modelsList = {
    "": [],
    redmi: [
      { label: "Redmi Note 7S", value: "Redmi Note 7S" },
      { label: "Redmi Note 7 Pro", value: "Redmi Note 7 Pro" },
      { label: "Redmi Note 8", value: "Redmi Note 8" },
      { label: "Redmi Note 8 Pro", value: "Redmi Note 8 Pro" },
      { label: "Redmi Note 9", value: "Redmi Note 9" },
      { label: "Redmi Note 9 Pro", value: "Redmi Note 9 Pro" },
      { label: "Redmi Note 9 Pro Max", value: "Redmi Note 9 Pro Max" },
      { label: "Redmi 4", value: "Redmi 4" },
      { label: "Redmi 4A", value: "Redmi 4A" },
      { label: "Redmi 5", value: "Redmi 5" },
      { label: "Redmi 5A", value: "Redmi 5A" },
      { label: "Redmi 6", value: "Redmi 6" },
      { label: "Redmi 6A", value: "Redmi 6A" },
      { label: "Redmi 6 Pro", value: "Redmi 6 Pro" },
      { label: "Redmi 7", value: "Redmi 7" },
      { label: "Redmi 7A", value: "Redmi 7A" },
      { label: "Redmi 8", value: "Redmi 8" },
      { label: "Redmi 8A", value: "Redmi 8A" },
      { label: "Redmi 8A Dual", value: "Redmi 8A Dual" },
      { label: "Redmi 9A", value: "Redmi 9A" },
      { label: "Redmi 9 Prime", value: "Redmi 9 Prime" },
      { label: "Redmi 9i", value: "Redmi 9i" },
      { label: "Mi K20", value: "Mi K20" },
      { label: "Mi K20 Pro", value: "Mi K20 Pro" },
      { label: "Mi A1", value: "Mi A1" },
      { label: "Mi A2", value: "Mi A2" },
      { label: "Mi A3", value: "Mi A3" },
      { label: "Poco F1", value: "Poco F1" },
      { label: "Poco X3", value: "Poco X3" },
      { label: "Others", value: "Others" },
    ],
    realme: [
      { label: "Realme 1", value: "Realme 1" },
      { label: "Realme 2", value: "Realme 2" },
      { label: "Realme 2 Pro", value: "Realme 2 Pro" },
      { label: "Realme 3 Pro", value: "Realme 3 Pro" },
      { label: "Realme 3i", value: "Realme 3i" },
      { label: "Realme 5", value: "Realme 5" },
      { label: "Realme 5 Pro", value: "Realme 5 Pro" },
      { label: "Realme 5i", value: "Realme 5i" },
      { label: "Realme 5s", value: "Realme 5s" },
      { label: "Realme 6", value: "Realme 6" },
      { label: "Realme 6i", value: "Realme 6i" },
      { label: "Realme Narzo 20", value: "Realme Narzo 20" },
      { label: "Realme Narzo 20A", value: "Realme Narzo 20A" },
      { label: "Realme Narzo 20 Pro", value: "Realme Narzo 20 Pro" },
      { label: "Realme U1", value: "Realme U1" },
      { label: "Others", value: "Others" },
    ],
    asus: [],
    vivo: [],
    google: [],
    honor: [],
    motorola: [],
    nokia: [],
    apple: [
      { label: "iPhone 14 Pro Max", value: "iPhone 14 Pro Max" },
      { label: "iPhone 14 Pro", value: "iPhone 14 Pro" },
      { label: "iPhone 14", value: "iPhone 14" },
      { label: "iPhone 13 Pro Max", value: "iPhone 13 Pro Max" },
      { label: "iPhone 13 Pro", value: "iPhone 13 Pro" },
      { label: "iPhone 13", value: "iPhone 13" },
      { label: "iPhone 12 Pro", value: "iPhone 12 Pro" },
      { label: "iPhone 12 Pro Max", value: "iPhone 12 Pro Max" },
      { label: "iPhone 12", value: "iPhone 12" },
      { label: "iPhone 12 Mini", value: "iPhone 12 Mini" },
      { label: "iPhone SE 2020", value: "iPhone SE 2020" },
      { label: "iPhone 11 Pro Max", value: "iPhone 11 Pro Max" },
      { label: "iPhone 11 Pro", value: "iPhone 11 Pro" },
      { label: "iPhone 11", value: "iPhone 11" },
      { label: "iPhone XR", value: "iPhone XR" },
      { label: "iPhone XS Max", value: "iPhone XS Max" },
      { label: "iPhone XS", value: "iPhone XS" },
      { label: "iPhone X", value: "iPhone X" },
      { label: "iPhone 8 Plus", value: "iPhone 8 Plus" },
      { label: "iPhone 8", value: "iPhone 8" },
      { label: "iPhone 7 Plus", value: "iPhone 7 Plus" },
      { label: "iPhone 7", value: "iPhone 7" },
      { label: "iPhone 6S Plus", value: "iPhone 6S Plus" },
      { label: "iPhone 6S", value: "iPhone 6S" },
      { label: "iPhone 6 Plus", value: "iPhone 6 Plus" },
      { label: "iPhone 6", value: "iPhone 6" },
      { label: "iPhone SE", value: "iPhone SE" },
      { label: "iPhone 5S", value: "iPhone 5S" },
      { label: "Others", value: "Others" },
    ],
    samsung: [
      { label: "Samsung S20 FE", value: "Samsung S20 FE" },
      { label: "Galaxy A10", value: "Galaxy A10" },
      { label: "Galaxy A10S", value: "Galaxy A10S" },
      { label: "Galaxy A11", value: "Galaxy A11" },
      { label: "Galaxy A12", value: "Galaxy A12" },
      { label: "Galaxy A20", value: "Galaxy A20" },
      { label: "Galaxy A20S", value: "Galaxy A20S" },
      { label: "Galaxy A21S", value: "Galaxy A21S" },
      { label: "Galaxy A30", value: "Galaxy A30" },
      { label: "Galaxy A30S", value: "Galaxy A30S" },
      { label: "Galaxy A31", value: "Galaxy A31" },
      { label: "Galaxy A32", value: "Galaxy A32" },
      { label: "Galaxy A50", value: "Galaxy A50" },
      { label: "Galaxy A50S", value: "Galaxy A50S" },
      { label: "Galaxy A51", value: "Galaxy A51" },
      { label: "Galaxy A52", value: "Galaxy A52" },
      { label: "Galaxy A70", value: "Galaxy A70" },
      { label: "Galaxy A70S", value: "Galaxy A70S" },
      { label: "Galaxy A71", value: "Galaxy A71" },
      { label: "Galaxy A72", value: "Galaxy A72" },
      { label: "Galaxy A80", value: "Galaxy A80" },
      { label: "Galaxy M01", value: "Galaxy M01" },
      { label: "Galaxy M01S", value: "Galaxy M01S" },
      { label: "Galaxy M01 Core", value: "Galaxy M01 Core" },
      { label: "Galaxy M20", value: "Galaxy M20" },
      { label: "Galaxy M21", value: "Galaxy M21" },
      { label: "Galaxy M30", value: "Galaxy M30" },
      { label: "Galaxy M30S", value: "Galaxy M30S" },
      { label: "Galaxy M31", value: "Galaxy M31" },
      { label: "Galaxy M31S", value: "Galaxy M31S" },
      { label: "Galaxy M40", value: "Galaxy M40" },
      { label: "Galaxy M51", value: "Galaxy M51" },
      { label: "Galaxy S6 Edge", value: "Galaxy S6 Edge" },
      { label: "Galaxy S7", value: "Galaxy S7" },
      { label: "Galaxy S7 Edge", value: "Galaxy S7 Edge" },
      { label: "Galaxy S8", value: "Galaxy S8" },
      { label: "Galaxy S8 Plus", value: "Galaxy S8 Plus" },
      { label: "Galaxy S9", value: "Galaxy S9" },
      { label: "Galaxy S9 Plus", value: "Galaxy S9 Plus" },
      { label: "Galaxy S10", value: "Galaxy S10" },
      { label: "Galaxy S10 Plus", value: "Galaxy S10 Plus" },
      { label: "Galaxy S20", value: "Galaxy S20" },
      { label: "Galaxy S20 Plus", value: "Galaxy S20 Plus" },
      { label: "Galaxy S20 Ultra", value: "Galaxy S20 Ultra" },
      { label: "Galaxy S20 Ultra 5G", value: "Galaxy S20 Ultra 5G" },
      { label: "Galaxy S20 FE", value: "Galaxy S20 FE" },
      { label: "Galaxy Note 8", value: "Galaxy Note 8" },
      { label: "Galaxy Note 9", value: "Galaxy Note 9" },
      { label: "Galaxy Note 10", value: "Galaxy Note 10" },
      { label: "Galaxy Note 10 Plus 5G", value: "Galaxy Note 10 Plus 5G" },
      { label: "Galaxy Note 20 Ultra 5G", value: "Galaxy Note 20 Ultra 5G" },
      { label: "Galaxy Note 20", value: "Galaxy Note 20" },
      { label: "Galaxy J6", value: "Galaxy J6" },
      { label: "Galaxy J6 Plus", value: "Galaxy J6 Plus" },
      { label: "Galaxy J7 Max", value: "Galaxy J7 Max" },
      { label: "Galaxy J7 Prime", value: "Galaxy J7 Prime" },
      { label: "Galaxy J7 Pro", value: "Galaxy J7 Pro" },
    ],
    oppo: [
      { label: "Oppo Reno", value: "Oppo reno" },
      { label: "Oppo Reno", value: "Oppo reno" },
      { label: "Oppo Reno", value: "Oppo reno" },
    ],
    oneplus: [
      { label: "OnePlus 3", value: "OnePlus 3" },
      { label: "OnePlus 9R", value: "OnePlus 9R" },
      { label: "OnePlus 9 Pro", value: "OnePlus 9 Pro" },
      { label: "OnePlus 9", value: "OnePlus 9" },
      { label: "OnePlus Nord", value: "OnePlus Nord" },
      { label: "OnePlus 8T", value: "OnePlus 8T" },
      { label: "OnePlus 8 Pro", value: "OnePlus 8 Pro" },
      { label: "OnePlus 8", value: "OnePlus 8" },
      { label: "OnePlus 7T Pro", value: "OnePlus 7T Pro" },
      { label: "OnePlus 7 Pro", value: "OnePlus 7 Pro" },
      { label: "OnePlus 7T", value: "OnePlus 7T" },
      { label: "OnePlus 7", value: "OnePlus 7" },
      { label: "OnePlus 6T", value: "OnePlus 6T" },
      { label: "OnePlus 6", value: "OnePlus 6" },
      { label: "OnePlus 5T", value: "OnePlus 5T" },
      { label: "OnePlus 5", value: "OnePlus 5" },
      { label: "OnePlus X", value: "OnePlus X" },
      { label: "OnePlus 3T", value: "OnePlus 3T" },
      { label: "OnePlus 3", value: "OnePlus 3" },
    ],
  };

  const issuesList = [
    { label: "Battery Replacement", value: "Battery Replacement" },
    { label: "Display Replacement", value: "Display Replacement" },
    { label: "Front Glass Replacement", value: "Front Glass Replacement" },
    { label: "Charging Related", value: "Charging Related" },
  ];
  const deviceTypeList = [
    { label: "SmartPhone", value: "smartphone" },
    { label: "MacBook", value: "macBook" },
    { label: "iPad", value: "iPad" },
    { label: "Laptop", value: "laptop" },
  ];

  const toast = useToast();
  const [brand, setBrand] = useState("");
  const [busy, setBusy] = useState(false);
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("");
  const [userName, setUserName] = useState("");
  const [comments, setComments] = useState("");
  const [phone, setPhone] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const uploadIssue = () => {
    // TODO: perform validation
    toast.closeAll();
    if (!deviceType.trim()) {
      toast({
        title: `Please Select Device`,
        position: "bottom",
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (!brand.trim()) {
      toast({
        title: `Please choose Brand`,
        position: "bottom",
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (!model.trim()) {
      toast({
        title: `Please choose Model`,
        position: "bottom",
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (!issue.trim()) {
      toast({
        title: `Please choose Issue`,
        position: "bottom",
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (!userName.trim()) {
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
    if (phone.trim().length !== 10) {
      toast({
        title: `Please Enter Valid Phone Number`,
        position: "bottom",
        status: "warning",
        isClosable: true,
      });
      return;
    }
    setBusy(true);

    const mp = {
      userName,
      deviceType,
      phone,
      model,
      brand,
      issue,
      comments,
    };
    console.log(mp);

    submitIssue({
      userName: userName,
      deviceType,
      model,
      brand,
      phone,
      issue,
      comments,
    }).then(() => {
      setBusy(false);
      setDeviceType("");
      setBrand("");
      setModel("");
      setIssue("");
      setUserName("");
      setPhone("");
      setComments("");
      toast({
        title: `Submission Successful`,
        position: "bottom",
        status: "success",
        isClosable: true,
      });
    });
  };
  //   const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
   
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      //   bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading color="brand" size={{ base: "xl" }}>
          Get a Quote Now.
        </Heading>
      </VStack>
      <SimpleGrid columns={2} columnGap={6} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Device Type</FormLabel>
            <Select
              options={deviceTypeList}
              placeholder="Device"
              isSearchable="false"
              value={deviceTypeList.filter(function (option) {
                console.log(option);
                return option.value === deviceType;
              })}
              onChange={(val) => {
                setDeviceType(val["value"]);
              }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Brand Name</FormLabel>
            <Select
              placeholder=" Brand"
              options={brandsList}
              value={brandsList.filter(function (option) {
                console.log(option);
                return option.value === brand;
              })}
              onChange={(val) => {
                setBrand(val["value"]);
              }}
            ></Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Device Model</FormLabel>
            <Select
              placeholder="Select Model"
              isRequired="true"
              options={modelsList[brand]}
              value={modelsList[brand].filter(function (option) {
                console.log(option);
                return option.value === model;
              })}
              onChange={(val) => {
                setModel(val["value"]);
              }}
            ></Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Issue</FormLabel>
            <Select
              placeholder="Select Issue"
              value={issuesList.filter(function (option) {
                console.log(option);
                return option.value === issue;
              })}
              onChange={(val) => {
                setIssue(val["value"]);
              }}
              options={issuesList}
            ></Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Your Name</FormLabel>
            <Input
              placeholder="Enter Name"
              value={userName}
              onChange={(event) => {
                setUserName(event.currentTarget.value);
              }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              maxLength={10}
              value={phone}
              onChange={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setPhone(e.currentTarget.value);
                }
              }}
              placeholder="Enter Phone"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Comments</FormLabel>
            <Input
              value={comments}
              onChange={(event) => {
                setComments(event.currentTarget.value);
              }}
              placeholder="Explain your issue (optional)"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Center>
            {!busy ? (
              <Button
                bg="brand"
                color="white"
                _hover={{}}
                size="md"
                px="20"
                onClick={() => uploadIssue()}
              >
                Book Appointment
              </Button>
            ) : (
              <CircularProgress isIndeterminate color="green.300" />
            )}
          </Center>
        </GridItem>
      </SimpleGrid>
    </VStack>
    
  );
};

export default Details;
