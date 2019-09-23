import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import * as headings from '../Styles/Text';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Container} from '@material-ui/core';

import {useStateValue} from '../ContextSetup';
import { mergeClasses } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { flexbox } from '@material-ui/system';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import {Typography,Card, CardActionArea, CardActions, CardContent, CardMedia} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContainer:{
    backgroundColor: '#eeeeee',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  heading:{
    width: '100%',
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '0px'
  },
  buttonContainer:{
    display: 'flex',
    padding: '20px',
    paddingBottom: '30px'
  },
  button:{
    width: '100%',
    margin: '0 auto',
    padding: '20px',
  },
  card: {
    maxWidth: 345,
    margin: '0 auto',
    marginBottom: '30px'
  },
  media: {
    height: 150,
  },
  container:{
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '50px',
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
 
}));






export default function Welcome(){
  const classes = useStyles();
  const [{ user }, dispatch] = useStateValue();


    return (
      <div>
      <div className={classes.heroContainer}>
      <Grid container xs={10} md={6} maxWidth="sm" justifyContent="center" alignItems="center">
   
        <headings.H1 className={classes.heading}>Welcome to OCL Metadata Browser {user == '' ? '' : ", "+ user}</headings.H1>
        <p>
        Nisi orci lacinia voluptate molestias etiam massa odit iste! Temporibus quidem eveniet, 
        turpis veritatis quia neque? Consectetuer lorem duis imperdiet? Class aliquip, lacus lectus, 
        montes voluptatibus, sociosqu exercitationem! Ducimus? Ligula? Facilis.
        </p>
        <Grid item xs={12} md={6} justifyContent="center" alignItems="center" className={classes.buttonContainer}>
        <NavLink to="/codelist" activeClassName="sidebarActive" className={classes.button}>
        <Button variant="contained" color="primary" className={classes.button} disabled={user=='' ? true : false}>
        CodeList
      </Button>
      </NavLink>
      </Grid>
      <Grid item xs={12} md={6} justifyContent="center" alignItems="center" className={classes.buttonContainer}>
      <Button variant="contained" color="primary" className={classes.button}>
        Download MER Guidance
      </Button>
      </Grid>

     </Grid>
     </div>

      <div className={classes.container}>

      <Grid item xs={10} sm={6} md={4}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/300X150"
          title="Media Title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Card Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
      </Grid>

<Grid item xs={10} sm={6} md={4}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/300X150"
          title="Media Title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Card Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
      </Grid>

      <Grid item xs={10} sm={6} md={4}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/300X150"
          title="Media Title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Card Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
      </Grid>

      <Grid item xs={10} sm={6} md={4}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/300X150"
          title="Media Title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Card Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
      </Grid>

      <Grid item xs={10} sm={6} md={4} >
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/300X150"
          title="Media Title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Card Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
      </Grid>

      <Grid item xs={10} md={4} sm={6}>
     <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/300X150"
          title="Media Title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Card Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Laboriosam vestibulum ut vero nostrud minus exercitation lacinia officiis. Dictumst. Lectus elementum.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
      </Grid>

     


    </div>

     </div>
    );
  
    }




