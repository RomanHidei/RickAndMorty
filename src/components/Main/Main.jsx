import Person from '../Person/Person'
import React, {useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Person: {
      padding: theme.spacing(3)
  }
}));

function Main() {
  const classes = useStyles();

   const [allCharacters, setMain] = useState()

   useEffect(()=> {
    const getAllCharacters =async() =>{
      const response =  await fetch(`https://rickandmortyapi.com/api/character`); 
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
            <Grid container spacing={1}>
            <Grid item xs={4}>
              <Person className = {classes.Person} character ={character} key = {character.id} />
            </Grid>
            </Grid>
                 )  
                    } 
                        ) 
                          ) 
        }
      </div>
    ); 
  }
  
  export default Main