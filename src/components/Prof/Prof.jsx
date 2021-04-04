import React, { useState , useEffect } from "react";
import Person from "../Person/Person";

function Prof(props) {
  const [simpleCharacter, setProf] = useState();

  useEffect(() => {
    const getSimpleCharacter = async() => {
      const response = await fetch (
        `https://rickandmortyapi.com/api/character/${props.sent}`);
      const data = await response.json()
      setProf(data)
      console.log(data)
    }
    getSimpleCharacter()
  }, [])
    
    return (
      <div>
       {simpleCharacter && ( simpleCharacter.id ) }
      </div>
    );
  }
  
  export default Prof;