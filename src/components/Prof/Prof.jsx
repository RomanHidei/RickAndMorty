import React, { useState , useEffect } from "react";
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Prof(props) {

  const {id} = useParams();

  const [simpleCharacter, setProf] = useState();

  useEffect(() => {
    const getSimpleCharacter = async() => {
      const response = await fetch (
        `https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json()
      setProf(data)
      console.log(data)
    }
    getSimpleCharacter()
  }, [])

    const classes = useStyles();
    
    return (
      <div>
       {simpleCharacter && ( 
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="avatar"
          height="160"
          image={simpleCharacter.image}
          title="avatar"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {simpleCharacter.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {simpleCharacter.status} - {simpleCharacter.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Last known location:
          {simpleCharacter.location.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Episode List:
          {simpleCharacter.episode}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        ) }
      </div>
    );
    }
  
  export default Prof;