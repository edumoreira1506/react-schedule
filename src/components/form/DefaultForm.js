import React, { Component } from 'react'
import './../schedule/Schedule.css'

class DefaultForm extends Component {

  render() {
    const { selects, inputs } = this.props

    return (
      <div className="Schedule-header-container">
        <form onSubmit={this.props.onSubmit} className="Schedule-header-container-form">
          {
            inputs.map((element, index) => 
              <input key={index} name={element.name} className="input-group transparent-border" onChange={element.onChange} value={element.value} type={element.type} placeholder={element.placeholder} />
            )
          }
          {
            selects.map((element, index) => 
              <select key={index} name={element.name} className="input-group transparent-border" onChange={element.onChange} value={element.value}>
                {
                  element.options.map((element, index) => 
                    <option key={index} value={element}>{element}</option>
                  )
                }
              </select>
            )
          }
          <button type="submit" className="input-group transition">Add</button>
        </form>
      </div>
    )
  }
}

export default DefaultForm
