import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

const Message = () => {
  return (
    <VStack
      w={"full"}
      maxW={"1240px"}
      m={"auto"}
      bg={"black"}
      align="center"
      py={"8"}
      color={"gray.100"}
    >
      <Heading size="lg">
        <span style={{ color: "yellow" }}>FREE Shipping</span> On ALL USA Orders
        Over $250!
      </Heading>
      <Text size="lg">
        View a summary of all your customers over the last month.
      </Text>
    </VStack>
  );
};

export default Message;
