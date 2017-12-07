import React, { Component } from 'react'
import logo from '../logo.svg'
import '../styles/App.css'
// import data from '../data/bugs.json'
import BugTable from './BugTable'
import AddBugForm from './AddBugForm'
import Home from './Home'
import { Link, Switch, Route } from 'react-router-dom'

export var data = [
  {
    id: 0,
    reporter: "Dan Lourenco",
    title: "Things aren't working",
    description: "Things won't work",
    severity: "medium",
    status: "open"
  },
  {
    id: 1,
    reporter: "Peter Tork",
    title: "Computer catches fire when inspecting DOM",
    description: "When I open the dev tools, my computer bursts into flames",
    severity: "high",
    status: "won't fix"
  }
];

class App extends Component {

    logBug = (description, reporter, severity, status) =>
      console.log(`Description: ${description} \n Reporter: ${reporter} \n Severity: ${severity} \n Status: ${status}`)
  
    addBug = (description, reporter, severity, status) => {
      let bugObj = {id: data.length, description, reporter, severity, status};
      data.push(bugObj);
    }
    render() {
      return (
        <div className="App">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              {/* <a className="navbar-item" href="/">BugTrackr</a> */}
              <Link className="navbar-item" to="/">BugTrackr</Link>
            </div>
            <div className="navbar-menu">
              <Link className="navbar-item" to="/add">Report a Bug</Link>
              <Link className="navbar-item" to="/view">View Bugs</Link>
            </div>
          </nav>

              {/* Where page components are rendered! */}
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/add' render={()=><AddBugForm onNewBug={this.addBug} />} />
                <Route exact path='/view' component={BugTable}/>
              </Switch>
              
        </div>
      )
  }
}

export default App;
