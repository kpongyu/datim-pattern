import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {Container, Col, Row} from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router, Switch, DefaultRoute } from 'react-router-dom';
import Welcome from './AppShell/Welcome';
import Basic from './AppShell/Basic';
import Sidebar from './Components/Sidebar';
import Single from './AppShell/Single-Components';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Router>
        <Container>
        
          <Row>
            <Col xs={12} md={4}>
              <Sidebar/>
            </Col>
            <Col xs={12} md={8} className="contentContainer">
            
            <Switch>
             
              <Route exact path="/" component={Welcome} />
              <Route path="/basic" component={Basic} />
              <Route path="/single" component={Single} />
              <Route exact path="/2019/datim/v2/index.html" component={Welcome} />
            </Switch>
            </Col>
          </Row>
         
        </Container>
        </Router>
      </div>
    );
  }
}

export default App;
