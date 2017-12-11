import React from 'react';

const BugRow = ({id, reporter, description, severity, status}) => 
  <tr>
    <td>{id}</td>
    <td>{description}</td>
    <td>{reporter}</td>
    <td>{severity}</td>
    <td>{status}</td>
    <td><button disabled="disabled">Delete</button></td>
  </tr>

export default BugRow;