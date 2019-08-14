import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route, Link, BrowserRouter as Router, Switch, DefaultRoute } from 'react-router-dom';
import Welcome from './AppShell/Welcome';
import Basic from './AppShell/Basic';
import Sidebar from './Components/Sidebar';
import Inputs from './AppShell/Inputs';
import { Grid, Container} from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Router>

      <Container maxWidth="lg">
      <Grid container maxWidth="sm">
        
         
            <Grid item xs={12} md={3}>
              <Sidebar/>
            </Grid>
            <Grid item  xs={12} md={9} className="contentContainer">
            
            <Switch>
             
              <Route exact path="/" component={Welcome} />
              <Route path="/basic" component={Basic} />
              <Route path="/inputs" component={Inputs} />
              <Route exact path="/2019/datim/v2/index.html" component={Welcome} />
            </Switch>
            </Grid>
          
         
        </Grid>
        </Container>
        </Router>
      </div>
    );
  }
}

export default App;
