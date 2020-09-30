import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Keypad from './Keys/Keypad';
import Recordings from './Recordings';
import Error from './Error';

class App extends React.Component {
  render(){
    return(
      <Router>
        <div style={appStyle}>
          <h1 style={titleStyle}>Key Drum Set</h1>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Keypad} />
            <Route path="/recordings" component={Recordings} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const titleStyle = {
  margin: "0px",
  fontSize: "5em",
  textAlign: 'center'
}

export default App;