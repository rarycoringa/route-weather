import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "./navbar/Navbar";
import { Timeline } from "./timeline/Timeline";

function App () {
  return (
    <ChakraProvider>
      <Grid
        templateColumns="repeat(6, 1fr)"
        height="100vh"
        color="gray.50"
        bgColor="gray.800"
      >
        <GridItem className="navbar" colSpan={1}>
          <Navbar />
        </GridItem>

        <GridItem className="content" colSpan={5}>
          <Timeline />
        </GridItem>

      </Grid>
    </ChakraProvider>
  );
}

export default App;
