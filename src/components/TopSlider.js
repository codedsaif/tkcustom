import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Image,
  Stack,
  Flex,
  Button,
  Text,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SimpleSlider() {
  let images = [
    {
      src: "https://cdn.shopify.com/s/files/1/0589/6722/8582/products/9296_large.png?v=1655153670",
      alt: "gun-i",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/3401_large_1_a03ef538-419c-40ff-a31a-f940f402b884.png",
      alt: "gun-ii",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/3401_large_1_a03ef538-419c-40ff-a31a-f940f402b884.png",
      alt: "gun-iii",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/6401_large_1.png?v=1667890911",
      alt: "gun-4",
    },
  ];
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Box
      w={"full"}
      maxW={"1240px"}
      m={"auto"}
      justify={"space-between"}
      align={"end"}
      px={"8"}
      py={"0"}
      position="relative"
    >
      <Slider {...settings}>
        {images.map((ele, index) => {
          return (
            <Box key={index} boxSize="sm" px={8} px={"0"}>
              <Image
                boxSize="sm"
                objectFit="cover"
                src={ele.src}
                alt={ele.alt}
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
