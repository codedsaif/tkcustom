import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  Stack,
  VStack,
  Spacer,
} from "@chakra-ui/react";

const products = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/products/9296_large.png?v=1655153670",
    name: "gun-i",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/3401_large_1_a03ef538-419c-40ff-a31a-f940f402b884.png",
    name: "gun-ii",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/3401_large_1_a03ef538-419c-40ff-a31a-f940f402b884.png",
    name: "gun-iii",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/6401_large_1.png?v=1667890911",
    name: "gun-4",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/products/9296_large.png?v=1655153670",
    name: "gun-i",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/3401_large_1_a03ef538-419c-40ff-a31a-f940f402b884.png",
    name: "gun-ii",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/3401_large_1_a03ef538-419c-40ff-a31a-f940f402b884.png",
    name: "gun-iii",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/6401_large_1.png?v=1667890911",
    name: "gun-4",
  },
];

function ProductCarousel() {
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slideRef = useRef(null);

  const calculateSlidesCount = () =>
    Math.ceil(products.length / visibleProducts);

  const handlePrevClick = () => {
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
      slideRef.current.scrollBy({
        left:
          (-visibleProducts * slideRef.current.offsetWidth) /
          calculateSlidesCount(),
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (activeSlideIndex < calculateSlidesCount() - 1) {
      setActiveSlideIndex(activeSlideIndex + 1);
      slideRef.current.scrollBy({
        left:
          (visibleProducts * slideRef.current.offsetWidth) /
          calculateSlidesCount(),
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      w={"full"}
      maxW={"1240px"}
      m={"auto"}
      px={"0"}
      py={"5"}
      bg="gray.100"
      p={4}
      rounded="md"
    >
      <Heading mb={4}>Featured Products</Heading>
      <Flex
        ref={slideRef}
        overflowX="hidden"
        scrollbarWidth="auto"
        ms="-4px"
        gap="20px"
      >
        {products
          .slice(
            activeSlideIndex * visibleProducts,
            (activeSlideIndex + 1) * visibleProducts
          )
          .map((product, index) => (
            <Stack
              key={index}
              p={4}
              spacing={4}
              align="center"
              bg="white"
              borderRadius="md"
              boxShadow="base"
              sx={{ cursor: "grab" }}
            >
              <Image
                boxSize="200px"
                objectFit="cover"
                borderRadius="md"
                src={product.image}
                alt={product.name}
              />
              <Heading as="h3" size="sm">
                {product.name}
              </Heading>
              <Button
                bg={"yellow.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "yellow.500" }}
                variant="solid"
              >
                View Details
              </Button>
            </Stack>
          ))}
        <Spacer />
      </Flex>
      <Flex justifyContent="space-between" mt={4}>
        <Button
          bg={"blue.400"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "blue.500" }}
          onClick={handlePrevClick}
          disabled={activeSlideIndex === 0}
        >
          Prev
        </Button>
        <Button
          bg={"blue.400"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "blue.500" }}
          onClick={handleNextClick}
          disabled={activeSlideIndex === calculateSlidesCount() - 1}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default ProductCarousel;
