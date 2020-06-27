import React from "react";
import styled from "styled-components"
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Thing = styled.div`
  color:white;
  background:darkcyan;
  width:40%;
  margin-left:30%;
  font-size: 1rem;

`;

const Title = styled.h2`
  font-size: 1.5rem;
  padding:5%;
  text-align: center;
  color: black;
`;

const Parag2 = styled.p`
  font-size: 1rem;
  text-align: center;
  color: white;
  widht:60%; 
  padding-bottom:5%; 
 
`;

const CharacterList = ({ name,birthYear,gender, height, massNum,hairColor,SkinColor,films }) => {
    return (
      <Thing>
        
    <Title>name:{name}</Title>
         <p> birthYear:{birthYear}</p>
         <p>gender: {gender}</p>
         <p>height: {height}</p>
         <p>massNum: {massNum}</p>
         <p>hairColor: {hairColor}</p>
          <p>SkinColor: {SkinColor}</p>
         <Parag2>films:{films}</Parag2>
   
        </Thing>
    );
  };
  
  export default CharacterList;

