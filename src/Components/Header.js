import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import styled from 'styled-components';
import { Grid, Container} from '@material-ui/core';
import {useStateValue} from '../ContextSetup';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
 
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
 
 
}));



export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [{ open }, dispatch] = useStateValue();
 
    return (
      <HeaderContainer>
      <Container maxWidth="lg">
      
      <Grid container maxWidth="sm">
        
          <Grid item xs={12} md={4}>
            <Title>OCL Metadata Browser</Title>
          </Grid>
       
      </Grid>
      </Container>
      </HeaderContainer>
    );
  
}



const HeaderContainer = styled.div`
  width: 100%;
 
`
const Title = styled.h3`
  color: white;
  float: left;
  font-size: 28px;
`



