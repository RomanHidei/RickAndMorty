import Person from '../Person/Person'
import React, {useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  
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
      <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={4} sm={6}>
        { allCharacters && (allCharacters.results.map((character) =>{
          return (
            
              <Person character ={character} key = {character.id} />
            
                 )  
                    } 
                        ) 
                          ) 
        }
        </Grid>
            </Grid>
      </div>
    ); 
  }
  
  export default Main