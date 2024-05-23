import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

function App() {
  /*
    função criar timeline para o username logado
  */


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

/*
  <MainContainer>
    <EstilogsGlobais/>
    <MenuLateral/>
    <AppContainer>
      <RequireAuth>
        <Timeline/>
      </RequireAuth>
    </AppContainer>
  </MainContainer>
*/

export default App;
