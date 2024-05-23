import Timeline from './Routes/timeline'
import EstilosGlobais from './Components/EstilosGlobais'
import MenuLateral from './Components/MenuLateral'
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";


function App() {
  /*
    função criar timeline para o username logado
  */


  return (
    <ChakraProvider>
      <EstilosGlobais/>
      <Grid
        templateColumns="repeat(7, 1fr)"
        h="100vh"
        gap={5}
      >
        <GridItem className="navbar" colSpan={1} bg='white'>
          <MenuLateral/>
        </GridItem>
        <GridItem className="content" colSpan={6} bg='grey'>
          <Timeline/>
        </GridItem>
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
