import { Flex, SimpleGrid } from "@chakra-ui/react";
import { CardComponent } from "../components/CardComponent";

export const HomePage = () => {
  return (
    <>
      <Flex padding={5}>
        <SimpleGrid columns={4} spacing={5}>
          <CardComponent />
        </SimpleGrid>
      </Flex>
    </>
  );
};
