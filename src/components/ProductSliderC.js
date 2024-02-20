// import { useRef } from "react";
// import {
//   Box,
//   Heading,
//   Button,
//   Flex,
//   IconButton,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// const ProductSection = ({ products }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const containerRef = useRef(null);

//   const scrollLeft = () => {
//     const container = containerRef.current;
//     container.scrollLeft -= 300;
//   };

//   const scrollRight = () => {
//     const container = containerRef.current;
//     container.scrollLeft += 300;
//   };

//   return (
//     <Box w={"full"} maxW={"1240px"} m={"auto"} px={"0"} py={"5"}>
//       <Heading mb={4}>Featured Products</Heading>
//       <Flex alignItems="center" overflowX="hidden">
//         <IconButton
//           icon={<ChevronLeftIcon />}
//           aria-label="Scroll Left"
//           onClick={scrollLeft}
//           variant="ghost"
//           mr={2}
//           display={
//             containerRef.current && containerRef.current.scrollLeft !== 0
//               ? "block"
//               : "none"
//           }
//         />
//         <Box
//           overflowX="auto"
//           id="productContainer"
//           ref={containerRef}
//           flex="1"
//           minWidth="0"
//           css={{ "&::-webkit-scrollbar": { display: "none" } }}
//         >
//           <Flex>
//             {products.map((product, index) => (
//               <Box key={index} mr={4}>
//                 <img src={product.image} alt={product.name} />
//                 <Heading size="md">{product.name}</Heading>
//                 <Button
//                   mt={2}
//                   onClick={() => console.log(`Clicked on ${product.name}`)}
//                 >
//                   View Details
//                 </Button>
//               </Box>
//             ))}
//           </Flex>
//         </Box>
//         <IconButton
//           icon={<ChevronRightIcon />}
//           aria-label="Scroll Right"
//           onClick={scrollRight}
//           variant="ghost"
//           ml={2}
//           display={
//             containerRef.current &&
//             containerRef.current.scrollLeft <
//               containerRef.current.scrollWidth -
//                 containerRef.current.offsetWidth
//               ? "block"
//               : "none"
//           }
//         />
//       </Flex>
//     </Box>
//   );
// };

// export default ProductSection;
import { useRef } from "react";
import { Box, Heading, Button, Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ProductSection = ({ products }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <Box w={"full"} maxW={"1240px"} m={"auto"} px={"0"} py={"5"}>
      <Heading mb={4}>Featured Products</Heading>
      <Flex alignItems="center" overflowX="hidden">
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Scroll Left"
          onClick={scrollLeft}
          variant="ghost"
          mr={2}
          display={
            containerRef.current && containerRef.current.scrollLeft !== 0
              ? "block"
              : "none"
          }
        />
        <Box
          overflowX="hidden"
          overflowY="auto"
          id="productContainer"
          ref={containerRef}
          flex="1"
          minWidth="0"
          css={{ "&::-webkit-scrollbar": { display: "none" } }}
        >
          <Flex>
            {products.map((product, index) => (
              <Box key={index} mr={4}>
                <img src={product.image} alt={product.name} />
                <Heading size="md">{product.name}</Heading>
                <Button
                  mt={2}
                  onClick={() => console.log(`Clicked on ${product.name}`)}
                >
                  View Details
                </Button>
              </Box>
            ))}
          </Flex>
        </Box>
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Scroll Right"
          onClick={scrollRight}
          variant="ghost"
          ml={2}
          display={
            containerRef.current &&
            containerRef.current.scrollLeft <
              containerRef.current.scrollWidth -
                containerRef.current.offsetWidth
              ? "block"
              : "none"
          }
        />
      </Flex>
    </Box>
  );
};

export default ProductSection;
