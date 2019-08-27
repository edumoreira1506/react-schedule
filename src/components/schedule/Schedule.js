import React, { Component } from 'react'
import DefaultTable from './../table/DefaultTable'
import DefaultForm from './../form/DefaultForm'

import { validate } from './../../models/Schedule'

import {
  brazilianDate
} from './../../helpers/date'

import './Schedule.css'

class Schedule extends Component{

  constructor(props){
    super(props)

    this.state = {
      items: [],
      time: '',
      type: 'Run',
      date: '',
      studiedHours: 0,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
    
  removeItem = (index) => {
    const items = this.state.items

    let studiedHours = this.state.studiedHours 
    studiedHours -= parseInt(items[index][0])

    items.splice(index, 1)

    this.setState({ items, studiedHours });
  }

  addItem = (e) => {
    e.preventDefault()

    const requiredFields = [this.state.time, this.state.date, this.state.type]
    const validated = validate(requiredFields)

    if(!validated.ok){
      alert(`For add new item, no one field can be empty.`)
    }else{
      const items = [
        ...this.state.items,
        [
           this.state.time,
           this.state.type,
           brazilianDate(this.state.date),
        ]
      ]

      let studiedHours = this.state.studiedHours
      studiedHours += parseInt(this.state.time)

      this.setState({ 
        items, 
        studiedHours,
        time: '',
        type: 'Run',
        date: ''
      });
    }
  }

  render() {
    const inputs = [
      {
        onChange: this.handleChange,
        value: this.state.time,
        name: 'time',
        type: 'number',
        placeholder: 'Time event'
      },
      {
        onChange: this.handleChange,
        name: 'date',
        value: this.state.date,
        type: 'date',
      }
    ]

    const selects = [
      {
        onChange: this.handleChange,
        name: 'type',
        value: this.state.type,
        options: ['Run', 'Speed']
      }
    ]

    const itemsHead = ['Time', 'Type', 'Date', 'Actions']

    return (
      <div className="Schedule">
        <h1 className="Schedule-header">{this.props.title}</h1>
        <DefaultForm selects={selects} inputs={inputs} onSubmit={this.addItem} />
        <div className="Schedule-border"></div>
        <div className="Schedule-container-table">
          <DefaultTable onClick={this.removeItem} itemsHead={itemsHead} items={this.state.items} />
        </div>
        <div>
          <h3>{this.state.studiedHours} hours</h3>
        </div>
      </div>
    )
  }
}

export default Schedule
