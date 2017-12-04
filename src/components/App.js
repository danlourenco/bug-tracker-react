import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import data from '../data/bugs.json';
import BugTable from './BugTable';
import AddBugForm from './AddBugForm';
import Home from './Home';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { Switch, Route } from 'react-router-dom'


class App extends Component {

    logBug = (description, reporter, severity, status) =>
      console.log(`Description: ${description} \n Reporter: ${reporter} \n Severity: ${severity} \n Status: ${status}`)
  
    render() {

      
    return (
      <div className="App">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">BugTrackr</a>
          </div>
          <div className="navbar-menu">
            <a className="navbar-item" href="add">Report a Bug</a>
            <a className="navbar-item" href="view">View All Bugs</a>
          </div>
          
        </nav>

            {/* Where page components are rendered! */}
            <Switch>
              <Route exact path='/login' component={Home}/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/create' component={Home}/>
            </Switch>
            
      </div>
    )
  }
}

export default App;
