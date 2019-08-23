import React, { Component } from 'react'
import DefaultTable from './../table/DefaultTable'
import DefaultForm from './../form/DefaultForm'

import {
    brazilianDate
} from './../../helpers/date'

import './Schedule.css'
import './../../index.css'

class Schedule extends Component{

    constructor(props){
        super(props)

        this.state = {
            items: [],
            time: '',
            type: '',
            date: '',
            studiedHours: 0,
        }
    }
    
    removeItem = (index) => {
        const items = this.state.items

        let studiedHours = this.state.studiedHours 
        studiedHours -= parseInt(items[index][0])

        items.splice(index, 1)

        this.setState({ items, studiedHours });
    }

    setTime = (e) => {
        this.setState({time: e.target.value});
    }

    setType = (e) => {
        this.setState({type: e.target.value});
    }

    setDate = (e) => {
        this.setState({date: e.target.value});
    }

    addItem = (e) => {
        e.preventDefault()

        if(this.state.time === '' || this.state.type === '' || this.state.date === ''){
            alert('For add new item, no one field can be empty')
        }else{
            const items = this.state.items            
            let studiedHours = this.state.studiedHours

            items.push([
                this.state.time,
                this.state.type,
                brazilianDate(this.state.date),
            ])

            studiedHours += parseInt(this.state.time)

            this.setState({ 
                items, 
                studiedHours,
                time: '',
                type: '',
                date: ''
            });
        }
    }

    render() {
        const inputs = [
            {
                onChange: this.setTime,
                value: this.state.time,
                type: 'number',
                placeholder: 'Time event'
            },
            {
                onChange: this.setDate,
                value: this.state.date,
                type: 'date',
            }
        ]

        const selects = [
            {
                onChange: this.setType,
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
