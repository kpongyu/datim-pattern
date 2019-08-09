import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import * as headings from '../Styles/Text';
import * as buttons from '../Styles/Buttons';
import {Container, Col, Row, InputGroup, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';

const options1 = [
  { value: 'item1', label: 'item1' },
  { value: 'item2', label: 'item2' },
  { value: 'item3', label: 'item3' },
];
const options2 = [
  { value: 'item1', label: 'item1' },
  { value: 'item2', label: 'item2' },
  { value: 'item3', label: 'item3' },
];

class Single extends Component {

  state = {
    selectedOption1: null,
    selectedOption2: null
  };

  handleChange1 = selectedOption1 => {
    this.setState({ selectedOption1 });
    console.log(`Option selected:`, selectedOption1);
  };

  handleChange2 = selectedOption2 => {
    this.setState({ selectedOption2 });
    console.log(`Option selected:`, selectedOption2);
  };

  render() {

    const { selectedOption1 } = this.state;
    const { selectedOption2 } = this.state;

    console.log(this.props.location.pathname);

    
    return (
     <div>
     <Breadcrumb></Breadcrumb>
      <headings.H1>Buttons</headings.H1>
       <headings.H4>Primary Button</headings.H4>
       <buttons.PRIMARY>Primary Button</buttons.PRIMARY>
       <buttons.PRIMARY_OUTLINE>Primary Outline</buttons.PRIMARY_OUTLINE>
       <hr/>
       <headings.H4>Secondary Button</headings.H4>
       <buttons.SECONDARY>Secondary Button</buttons.SECONDARY>
       <buttons.SECONDARY_OUTLINE>Secondary Button</buttons.SECONDARY_OUTLINE>
       <hr/>
       <headings.H4>Single Select</headings.H4>
       <Select
        value={selectedOption1}
        onChange={this.handleChange1}
        options={options1}
      />
      <hr/>
      <headings.H4>Multiple Select</headings.H4>
       <Select
        value={selectedOption2}
        onChange={this.handleChange2}
        options={options2}
        isMulti
      />
       <hr/>
       <headings.H4>Default Input</headings.H4>
       <div className="form-group">
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Input Example"
      />
    </div>

    <hr/>
       <headings.H4>Input Group</headings.H4>
       <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Prepend</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Input Group"
      aria-label="Input Group"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Input Group"
      aria-label="Input Group"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">Append</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>



     </div>
    );
  }
}

const DropdownButtonStyle = {
    width: '100%',
    maxWidth: '300px',

    
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
const ContentRow = styled.div`
    display: flex;
    flex-direction: row;
`;


export default Single;