import { createContext, useState } from "react";
import styled from "styled-components";
import Home from "./component/Home";
import NavBar from "./component/NavBar";

const Container = styled.div``
export const AppContext = createContext(null)

function App() {
  const [value, setvalue] = useState('fullSideBar')
  const [signal, setsignal] = useState('expand')

  const handleValue = ()=> {
    if(signal==='expand'){
      setsignal('')
    }else{
      setsignal('expand')
    }
    if(signal==='expand'){
      setvalue('halfSideBar')
    }else{
    setvalue('fullSideBar')
      
    }
  }

  return (  
    <AppContext.Provider value={{value,signal,handleValue}} >

      <Container>
        <NavBar />
        <Home/>
      </Container>
    </AppContext.Provider>
    
  );
}

export default App;
