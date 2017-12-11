import React, { Component } from 'react'
import '../styles/App.css'
import BugTable from './BugTable'
import AddBugForm from './AddBugForm'
import Home from './Home'
import { Link, Switch, Route } from 'react-router-dom'

/* BugTrakr

Demonstrates use of React, state, stateless functional components and class components


To Do:

Implement edit, delete functions
Persist data to localstorage
OKTA integration for authentication

*/


class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: [
          {
            id: 0,
            reporter: "Dan Lourenco",
            title: "Things aren't working",
            description: "Things won't work",
            severity: "medium",
            status: "Open"
          },
          {
            id: 1,
            reporter: "John Doe",
            title: "Computer catches fire when inspecting DOM",
            description: "When I open the dev tools, my computer bursts into flames",
            severity: "high",
            status: "Investigating"
          }
        ]
      }
      this.addBug = this.addBug.bind(this);
    }

    logBug = (description, reporter, severity, status) =>
      console.log(`Description: ${description} \n Reporter: ${reporter} \n Severity: ${severity} \n Status: ${status}`)
  
    addBug = (description, reporter, severity, status) => {
      const newData = [
        ...this.state.data,
        {
          id: this.state.data.length,
          description,
          reporter,
          severity,
          status
        }
      ];
      this.setState({
        data: newData,
        function() {
          console.log(this.state.data)
        }
      });
    }

    deleteBug = (id) => {
      // pull in copy of state data
      // delete the object at the index of the id
      // set data equal to copy of state data
    }

    // load from localStorage if available
    componentWillMount() {
      console.log('componentWillMount lifecycle method');
    }
    
    render() {
      return (
        <div className="App">
          <nav className="navbar is-primary" aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <span className="icon">
                  <i className="fa fa-bug"></i>
                </span> BugTrackr
              </Link>
            </div>
            <div className="navbar-menu">
              <div className="navbar-start">
                <Link className="navbar-item" to="/add">Submit a Bug</Link>
                <Link className="navbar-item" to="/view">View Bugs</Link>
              </div>
            </div>
          </nav>

              {/* Where page components are rendered! */}
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/add' render={()=><AddBugForm onNewBug={this.addBug} />} />
                <Route exact path='/view'render={()=><BugTable bugs={this.state.data} onDeleteBug={this.deleteBug} />} />
              </Switch>
              
        </div>
      )
  }
}

export default App
