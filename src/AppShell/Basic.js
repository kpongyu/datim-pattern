import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import * as headings from '../Styles/Text';
import {Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSortDown, faUser, faDownload, faBars,
        faFileExport, faQuestionCircle, faMapMarkerAlt,
        faCog, faExchangeAlt, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'

class Basic extends Component {

  render() {
    console.log(this.props.location.pathname);

    
    return (
     <div>
     <Breadcrumb></Breadcrumb>
      <headings.H1>Basic Palettes</headings.H1>
       <headings.H2>Colors</headings.H2>
       <headings.H4>Primary Colors</headings.H4>
       <ColorContainer>
        <ColorCube background={color_palette.PRIMARY_BLUE} color="white">
        #2B3B65
        </ColorCube>
        <ColorCube background={color_palette.PRIMARY_RED} color="white">
        #B31717
        </ColorCube>
        <ColorCube background={color_palette.PRIMARY_TEXT} color="white">
        #333333
        </ColorCube>
       </ColorContainer>
       <hr></hr>
       <headings.H4>Secondary Colors</headings.H4>
       <ColorContainer>
        <ColorCube background={color_palette.SECONDARY_BLUE} color="white">
        #1D5893
        </ColorCube>
        <ColorCube background={color_palette.SECONDARY_ORANGE} color="white">
        #E38A3E
        </ColorCube>
        <ColorCube background={color_palette.GREY} color="black">
        #DBDBDB
        </ColorCube>
       </ColorContainer>



       <hr></hr>
       <headings.H2>Fonts</headings.H2>
       <headings.H1>Heading 1: Oswald, 30px, #2b3b65</headings.H1>
       <headings.H2>Heading 2: Oswald, 24px, #1d5893</headings.H2>
       <headings.H3>Heading 3: Oswald, 19px, #B31717</headings.H3>
       <headings.H4>Heading 4: Roboto, 19px, #333333</headings.H4>
       <p>Paragraph/Text: Roboto Light, 16px, #333333</p>
       <a href="#">Link: Roboto, 16px, #333333</a>

       <hr></hr>
       <headings.H2>Icons</headings.H2>
       <FlexGrid>
         <FlexGridFourthCol>faHome: <FontAwesomeIcon icon={faHome} /></FlexGridFourthCol>
         <FlexGridFourthCol>faSortDown: <FontAwesomeIcon icon={faSortDown} /></FlexGridFourthCol>
         <FlexGridFourthCol>faUser: <FontAwesomeIcon icon={faUser} /></FlexGridFourthCol>
         <FlexGridFourthCol>faDownload: <FontAwesomeIcon icon={faDownload} /></FlexGridFourthCol>
         <FlexGridFourthCol>faBars: <FontAwesomeIcon icon={faBars} /></FlexGridFourthCol>
         <FlexGridFourthCol>faFileExport: <FontAwesomeIcon icon={faFileExport} /></FlexGridFourthCol>
         <FlexGridFourthCol>faQuestionCircle: <FontAwesomeIcon icon={faQuestionCircle} /></FlexGridFourthCol>
         <FlexGridFourthCol>faMapMarkerAlt: <FontAwesomeIcon icon={faMapMarkerAlt} /></FlexGridFourthCol>
         <FlexGridFourthCol>faCog: <FontAwesomeIcon icon={faCog} /></FlexGridFourthCol>
         <FlexGridFourthCol>faExchangeAlt: <FontAwesomeIcon icon={faExchangeAlt} /></FlexGridFourthCol>
         <FlexGridFourthCol>faSearch: <FontAwesomeIcon icon={faSearch} /></FlexGridFourthCol>
         <FlexGridFourthCol>faTimes: <FontAwesomeIcon icon={faTimes} /></FlexGridFourthCol>
       </FlexGrid>
     </div>
    );
  }
}

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColorCube= styled.div`
    width: 100px;
    height: 70px;
    background-color: ${props => props.background};
    color: ${props => props.color}
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2em;
`;

const FlexGrid = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
`;
const FlexGridFourthCol = styled.p`
    width: 25%;
`;



export default Basic;