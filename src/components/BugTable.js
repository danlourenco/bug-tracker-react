import React from 'react';
import BugRow from './BugRow';
import App from './App';
import {data} from './App';

const BugTable = ({ bugs = data}) =>
  <section className="section">
    <div className="container">
      <h1 className="title">List of Bugs</h1>
      <table className="table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Reporter</th>
        <th>Severity</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {bugs.map((bug, i) =>
        <BugRow key={i} {...bug} />)
      }
    </tbody>
  </table>
    </div>
  </section>




export default BugTable;
