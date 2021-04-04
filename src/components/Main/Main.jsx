import Person from '../Person/Person'
import React, {useState, useEffect } from 'react'

function Main() {

   const [allCharacters, setMain] = useState()

   useEffect(()=> {
    const getAllCharacters =async() =>{
      const response =  await fetch(`https://rickandmortyapi.com/api/character/`); 
      const data = await response.json()
      console.log(data)
      setMain(data)
      }
       getAllCharacters()
   },[]) 

    return (
      <div> 
        { allCharacters && (allCharacters.results.map((character) =>{
          return (
            <Person id ={character.id} />
          )
           
          } 
            ) 
              )
        } 
      </div>
    );
  }
  
  export default Main;