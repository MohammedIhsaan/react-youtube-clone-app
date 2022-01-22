import React, { useState } from "react";
import styled from "styled-components";

let keyword = [
  "All",
  "JavaScript",
  "React",
  "Redux",
  "hooks",
  "Bootstrap",
  "Material-Ui",
  "Movies",
  "songs",
  "All",
  "JavaScript",
  "React",
  "Redux",
  "hooks",
  "Bootstrap",
  "Material-Ui",
  "Movies",
  "songs",
  "All",
  "JavaScript",
  "React",
  "Redux",
  "hooks",
  "Bootstrap",
  "Material-Ui",
  "Movies",
  "songs",
  "All",
  "JavaScript",
  "React",
  "Redux",
  "hooks",
  "Bootstrap",
  "Material-Ui",
  "Movies",
  "songs",
];
const Container = styled.div`
  background-color: #212121;
  border: 1px solid #3d3d3d;
  color: white;
  display: flex;
  overflow-x: scroll;
  padding-top: 15px;
  font-size: 18px;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
const Span = styled.span`
  cursor: pointer;
  height: 100%;
  padding: 5px 10px;
  border: 1px solid #3d3d3d;
  border-radius: 999px;
  margin-right: 10px;
  white-space: nowrap;
  background-color: ${(props) => (props.type ? "white" : "#3d3d3d")};
  color: ${(props) => (props.type ? "black" : "white")};
  // font-weight: 100;
  :hover {
    background-color: lightslategrey;
  }
`;

export default function KeywordBar() {
  const [activeElement, setactiveElement] = useState("All");

  const handleClick = (value) => {
    setactiveElement(value);
  };
  console.log("activeElement :", activeElement);
  return (
    <Container>
      {keyword.map((e, i) => (
        <Span
          type={activeElement === e ? "active" : ""}
          onClick={() => handleClick(e)}
          key={i}
        >
          {" "}
          {e}
        </Span>
      ))}
    </Container>
  );
}
