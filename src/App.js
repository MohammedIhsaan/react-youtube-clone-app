import axios from "axios";
import { createContext, useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
// import {state} from './data'
// let dispatch = []

const Container = styled.div``;

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "fetchData":
      console.log("paylaod", payload);
      state = payload;
      return state;
    case "mountData":
      console.log("paylaod", payload);
      state = payload;
      return state;
    default:
      return state;
  }
};

export const AppContext = createContext(null);

function App() {
  const [value, setvalue] = useState("fullSideBar");
  const [signal, setsignal] = useState("expand");
  const [data2, setdata2] = useState({});
  const [state, dispatch] = useReducer(reducer, data2);

  const handleValue = () => {
    if (signal === "expand") {
      setsignal("");
    } else {
      setsignal("expand");
    }
    if (signal === "expand") {
      setvalue("halfSideBar");
    } else {
      setvalue("fullSideBar");
    }
  };

  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/search?";
  const youtubeApi = process.env.REACT_APP_YOUTUBE_API;

  const datafromApi = async () => {
    const response = await axios
      .get(
        `${YOUTUBE_PLAYLIST_ITEMS_API}` +
          new URLSearchParams({
            key: youtubeApi,
            part: "snippet",
            q: "trending",
            maxResults: 50,
          })
      )
      .catch((err) => console.log("err", err));
    const dataArr = response.data;
    console.log("response", dataArr);
    dispatch({
      type: "mountData",
      payload: dataArr,
    });
  };

  useEffect(() => {
    console.log("component mounting");
    datafromApi();
  }, []);

  return (
    <AppContext.Provider
      value={{ value, signal, handleValue, state, dispatch }}
    >
      <Container>
        <NavBar />
        <Home />
      </Container>
    </AppContext.Provider>
  );
}

export default App;
