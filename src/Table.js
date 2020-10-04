import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <div>
        <h1>Table component</h1>
        <table>
          <tr>
            <th>Items</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Pencil</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Eraser</td>
            <td>10</td>
          </tr>
        </table>
      </div>
    );
  }
}
