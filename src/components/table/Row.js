import React, { Component } from 'react'

import './Row.css'
import './../../index.css'

class Row extends Component{

  render() {
    const { items, onClick, index } = this.props

    return (
      <tr className="transition Cell">
        {
          items.map((element, i) => 
            <td className="Cell-row" key={i}>{element}</td>
          )
        }
        <td>
          <button className="Cell-remove-button transition" onClick={() => {onClick(index)}}>X</button>
        </td>
      </tr>
    )
  }
}

export default Row
