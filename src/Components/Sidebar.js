import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import {Container, Col, Row, ButtonGroup, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
        <SidebarContainer>
        <SidebarLogo src="./assets/pepfar.jpg"></SidebarLogo>
        <ButtonGroup style={buttonGroupStyle} vertical>

      <NavLink exact to="/" style={sidebarButton} activeClassName="sidebarActive">Welcome</NavLink>
      <NavLink to="/basic" style={sidebarButton} activeClassName="sidebarActive">Basic</NavLink>
      <NavLink to="/single" style={sidebarButton} activeClassName="sidebarActive">Single Components</NavLink>
   
      </ButtonGroup>
      </SidebarContainer>
    );
  }
}

const buttonGroupStyle = {
    width: '100%',
    textAlign: 'center'
  };
const sidebarButton = {
    width: '100%',
    padding: '0.5em',
    borderBottom: '1px solid #cdcdcd',
    textAlign: 'center',
    color: color_palette.PRIMARY_TEXT
}
const SidebarLogo = styled.img`
  
  width: 200px;
`
const SidebarContainer = styled.div`
  border-right: 1px solid ${color_palette.GREY};
  width: '100%';
  padding: 2em;
  padding-top: 1em;
  height: 100%;
  min-height: 100vh;
  text-align: center;

  @media (max-width: 768px){
      height: auto;
      min-height: 0;
      border-right: 0;
      border-bottom: 1px solid ${color_palette.GREY};
  }
`




export default Sidebar;