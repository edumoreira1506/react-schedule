import React, { Component } from 'react'
import Row from './Row'

import './../schedule/Schedule.css'
import './../../index.css'

class DefaultTable extends Component {

  render() {
    const { itemsHead, items, onClick } = this.props

    return (
      <table className="Schedule-table">
        <thead className="Schedule-table-thead transition">
          <tr>
            {
              itemsHead.map((element, index) => 
                <td key={index} className="Cell-row">{element}</td>
              )
            }
          </tr>
        </thead>
        <tbody className="Schedule-table-tbody">
          {
            items.map((element, index) => 
              <Row key={index} onClick={onClick} items={element} index={index} />
            )
          }
        </tbody>
      </table>
    )
  }
}

export default DefaultTable
