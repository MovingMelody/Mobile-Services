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
    { label: "OnePlus", value: "oneplus" },
  ];
  const modelsList = {
    "": [],
    apple: [
      { label: "iPhone 13 Pro Max", value: "13 Pro Max" },
      { label: "iPhone 12 Pro", value: "12 Pro" },
      { label: "iPhone 14 Pro Max", value: "14 Pro Max" },
    ],
    samsung: [{ label: "Samsung S20 FE", value: "Samsung S20 FE" }],
    oppo: [{ label: "Oppo Reno", value: "Oppo reno" }],
    oneplus: [{ label: "OnPlus Nord CE", value: "OnePlus Nord CE" }],
  };

  const issuesList = [
    { label: "Battery Replacement", value: "Battery Replacement" },
    { label: "Screen Replacement", value: "Screen Replacement" },
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
