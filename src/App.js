import { useState } from "react";
import styled from "styled-components";
import Home from "./component/Home";
import NavBar from "./component/NavBar";

const Container = styled.div``

function App() {
  const [value, setvalue] = useState(true)

  const handleValue = ()=> {setvalue(!value)}

  return (  
    <Container>
      <NavBar handleValue={handleValue}/>
      <Home value={value}/>
    </Container>
    
  );
}

export default App;
