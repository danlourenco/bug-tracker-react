import React from 'react';

const BugRow = ({reporter, title, description, severity, status}) => 
  <tr>
    <td>{description}</td>
    <td>{reporter}</td>
    <td>{severity}</td>
    <td>{status}</td>
  </tr>

export default BugRow;