
import React from "react";
import './App.css';
import Character from "./components/Character"
// import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import styled from "styled-components"

const Title = styled.h1`
  font-size: 3rem;
  padding:5%;
  text-align: center;
  color: darkcyan;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  

  return (
    <div className="App">
      <Title>Characters</Title>
      <Character/>
    </div>
  );
}

export default App;
