// Write your Character component here
import React,  { useState, useEffect }  from 'react';
import axios from "axios";
import CharacterList from "./CharacterList"
import { CardHeader, Button,CardFooter} from "reactstrap";


function Character() {
    const [charas, setCharas]=useState([]);
    useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then(res => {
           console.log(res)
           setCharas(res.data.results)
      })
      .catch(err=>{
        console.log(err);
    });
  }, [])

    return ( 
    <div className="chara">
          {charas.map(chara => {
               return (
               
            <CharacterList 
           key={chara.id}
           birthYear={chara.birth_year}
           name={chara.name}
           gender={chara.gender}
           height={chara.height}
            massNum={chara.mass}
            hairColor={chara.hair_color}
            SkinColor={chara.skin_color}
            films={<a href="chara.films"><Button color="red">Click Me</Button></a>}
            
 />
 
            )
          })
          } 
            
        </div>
        
      );
    }


export default Character;