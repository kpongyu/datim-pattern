import React, { Component } from 'react';
import * as color_palette from '../Styles/Colors';
import * as headings from '../Styles/Text';
import {Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';



class Welcome extends Component {
  render() {
    return (
     <div>
        <headings.H1>Welcome to the OCL Metadata Browser</headings.H1>
        <p>
        Nisi orci lacinia voluptate molestias etiam massa odit iste! Temporibus quidem eveniet, 
        turpis veritatis quia neque? Consectetuer lorem duis imperdiet? Class aliquip, lacus lectus, 
        montes voluptatibus, sociosqu exercitationem! Ducimus, fames ac amet deleniti, voluptatibus? Ligula? 
        Facilis. Optio animi varius voluptas? Vivamus dolorum sem sequi qui pharetra ac non! Posuere tempor 
        venenatis recusandae atque porta! Recusandae earum exercitation, adipisicing consectetuer vel, 
        tempore do temporibus tortor, eleifend neque autem facilisis curabitur penatibus ultrices sequi?
         Dolores architecto explicabo perspiciatis facilisi nascetur dicta suspendisse molestie, bibendum 
         accusantium anim eleifend, praesentium curabitur, cursus, occaecat quisquam soluta aliqua dolorum 
         error vivamus, necessitatibus magna cillum, beatae. Soluta.   
        </p>

     </div>
    );
  }
}




export default Welcome;