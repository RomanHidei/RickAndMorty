import React, { useState , useEffect } from "react";
import {Link} from 'react-router-dom'
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

      const classes = useStyles();
      const profile = props.character
    return (
      <>
    {profile && (
    <Card className={classes.root}>
        <Link to={"/character/"+ profile.id}>
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
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    ) }
    </> 
    );
    
}

export default Person