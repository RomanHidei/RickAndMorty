import React, { useState , useEffect } from "react";
import {Link} from 'react-router-dom'
import Prof from '../Prof/Prof';
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


function Person(props) {

    const [profile, setProfile] = useState();

      useEffect( () => { 
        const getProfile = async()=> {
         
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${props.id}`
        );
        const data = await response.json()
        setProfile(data)
        console.log(data)
      } 
      getProfile()
      },[]) 


      const classes = useStyles();
        
    return (
      <>
    {profile && (
    <Card className={classes.root}>
        <Link to="/Prof" sent ={profile.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="avatar"
          height="160"
          image={profile.image}
          title="avatar"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {profile.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {profile.status} - {profile.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Last known location:
          {profile.location.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    ) }
    </> 
    );
    
}

export default Person