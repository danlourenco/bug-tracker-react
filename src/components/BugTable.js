import React from 'react'
import BugRow from './BugRow'

const BugTable = ({bugs}) =>
  <section className="section">
    <div className="container">
      <h1 className="title">List of Bugs</h1>
      <table className="table is-bordered">
    <thead className="is-primary">
      <tr>
        <th>ID</th>
        <th>Description</th>
        <th>Reporter</th>
        <th>Severity</th>
        <th>Status</th>
        <th>Actions</th>
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
