import styled from "styled-components";
import Home from "./component/Home";
import NavBar from "./component/NavBar";

const Container = styled.div``

function App() {
  return (  
    <Container>
      <NavBar/>
      <Home/>
    </Container>
    
  );
}

export default App;
