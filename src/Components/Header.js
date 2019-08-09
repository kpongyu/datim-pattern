import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import {Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';


class Header extends Component {
  render() {
    return (
      <HeaderContainer>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Title>OCL Metadata Browser</Title>
          </Col>
        </Row>
      </Container>
      </HeaderContainer>
    );
  }
}



const HeaderContainer = styled.div`
  background-image: linear-gradient(to top, ${color_palette.PRIMARY_BLUE}, ${color_palette.TOP_BLUE});
  width: '100%';
  padding: 2em;
`
const Title = styled.h3`
  color: white;
  float: left;
`



export default Header;