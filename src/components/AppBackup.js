// import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../styles/App.css';
// import data from '../data/bugs.json';
// import BugTable from './BugTable';
// import AddBugForm from './AddBugForm';
// import LoginForm from './LoginForm';
// import Home from './Home';
// import { Link, Switch, Route } from 'react-router-dom'


// class App extends Component {

//     logBug = (description, reporter, severity, status) =>
//       console.log(`Description: ${description} \n Reporter: ${reporter} \n Severity: ${severity} \n Status: ${status}`)
  
//     render() {

      
//     return (
//       <div className="App">
//         <nav className="navbar" role="navigation" aria-label="main navigation">
//           <div className="navbar-brand">
//             {/* <a className="navbar-item" href="/">BugTrackr</a> */}
//             <Link className="navbar-item" to="/">BugTrackr</Link>
//           </div>
//           <div className="navbar-menu">
//           <Link className="navbar-item" to="/login">Login</Link>
//             <Link className="navbar-item" to="/add">Report a Bug</Link>
//             <Link className="navbar-item" to="/view">View Bugs</Link>
//           </div>
//         </nav>

//             {/* Where page components are rendered! */}
//             <Switch>
//               <Route exact path='/' component={Home}/>
//               <Route exact path='/login' component={LoginForm}/>
//               <Route exact path='/add' component={AddBugForm}/>
//               <Route exact path='/view' component={BugTable}/>
//             </Switch>
            
//       </div>
//     )
//   }
// }

// export default App;

// src/App.js