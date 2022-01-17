import { useState } from "react";
import styled from "styled-components";
import Home from "./component/Home";
import NavBar from "./component/NavBar";

const Container = styled.div``

function App() {
  const [value, setvalue] = useState(true)
  const [signal, setsignal] = useState('expand')

  const handleValue = ()=> {
    if(signal==='expand'){
      setsignal('')
    }else{
      setsignal('expand')
    }
    setvalue(!value)
  }
console.log(signal)
  return (  
    <Container>
      <NavBar handleValue={handleValue}/>
      <Home value={value} signal={signal}/>
    </Container>
    
  );
}

export default App;
