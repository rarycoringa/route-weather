import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateColumns="repeat(5, 1fr)"
        h="100em  "
        gap={5}
      >
        <GridItem className="navbar" colSpan={1} bg='tomato'></GridItem>
        <GridItem className="content" colSpan={4} bg='papayawhip'></GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
