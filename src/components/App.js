import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import data from '../data/bugs.json';
import BugTable from './BugTable';
import AddBugForm from './AddBugForm';

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
            <a className="navbar-item" href="test">Test</a>
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <h1 className="title">
              Welcome to BugTrackr
            </h1>

            <BugTable bugs={data} />
            <AddBugForm onNewBug={this.logBug} />
          </div>
        </section>
      </div>
    )
  }
}

export default App;
