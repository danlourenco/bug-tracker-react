import React from 'react';
import BugRow from './BugRow';
import App from './App';
import data from '../data/bugs.json';

const BugTable = ({ bugs = data}) =>
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



export default BugTable;