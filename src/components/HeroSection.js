"use client";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Flex
      w={"full"}
      maxW={"1240px"}
      m={"auto"}
      backgroundImage={
        "url(https://tkcustom.com/cdn/shop/t/6/assets/home_banner_image.png?v=27426674823347584781694794342)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"left"}
        p={"80px"}
        align={"flex-start"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"640px"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.3}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            WORLD CLASS MOON CLIPS AND S&W REVOLVER ACCESSORIES FROM TK CUSTOM
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"yellow.500"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "yellow.600" }}
            >
              Show me more
            </Button>
            {/* <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
