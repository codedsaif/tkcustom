("use client");
import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const ItemsHeading = ({ heading = "", text = "" }) => {
  return (
    <Flex w={"full"} maxW={"1240px"} m={"auto"} mt={"16"}>
      <HStack
        w={"full"}
        justify={"space-between"}
        align={"end"}
        px={"0"}
        py={"5"}
        borderBottom="1px"
      >
        <Stack maxW={"890px"} align={"flex-start"} spacing={4}>
          <Text
            color={"gray.700"}
            fontWeight={700}
            lineHeight={1.2}
            letterSpacing={"-1px"}
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
          >
            {heading}
          </Text>
          <Text
            color={"gray.600"}
            fontWeight={700}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
          >
            {text}
          </Text>
        </Stack>
        <Stack direction={"row"}>
          <Button
            bg={"yellow.400"}
            rounded={"full"}
            color={"white"}
            _hover={{ bg: "yellow.500" }}
          >
            BROWSE OUR ACCESSORIES
          </Button>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default ItemsHeading;
