import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import styled from 'styled-components';
import { Grid, Container} from '@material-ui/core';

class Header extends Component {
  render() {
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
}



const HeaderContainer = styled.div`
  background-image: linear-gradient(to top, ${color_palette.PRIMARY_BLUE}, ${color_palette.TOP_BLUE});
  width: '100%';
  padding: 15px;
`
const Title = styled.h3`
  color: white;
  float: left;
  font-size: 28px;
`



export default Header;