import {
  Card,
  CardBody,
  Image,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";

export default function Item({ name, image }) {
  return (
    <Card maxW="md" bg={"white"} boxShadow={"2xl"} rounded={"lg"}>
      <CardBody>
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            bg={"yellow.400"}
            color={"white"}
            _hover={{ bg: "yellow.500" }}
            variant="solid"
          >
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
