import React, { Component } from 'react'
import './../schedule/Schedule.css'

class DefaultForm extends Component {
    
    makeSelects = (arrayItems) => {
        const elements = []

        for(let i in arrayItems){
            const options = this.makeOptions(arrayItems[i].options)
            elements.push(<select key={i} className="input-group" onChange={arrayItems[i].onChange} value={arrayItems[i].value}>{options}</select>)
        }

        return elements
    }

    makeOptions = (arrayItems) => {
        const elements = []
    
        elements.push(<option key={100} value="">Selecionar</option>)
    
        for(let i in arrayItems){
            elements.push(<option key={i} value={arrayItems[i]}>{arrayItems[i]}</option>)
        }
    
        return elements
    }

    makeInputs = (arrayItems) => {
        const elements = []

        for(let i in arrayItems){
            elements.push(<input key={i} className="input-group" onChange={arrayItems[i].onChange} value={arrayItems[i].value} type={arrayItems[i].type} placeholder={arrayItems[i].placeholder} />)
        }

        return elements
    }

    render() {
        const selects = this.makeSelects(this.props.selects)
        const inputs = this.makeInputs(this.props.inputs)

        return (
            <div className="Schedule-header-container">
                <form onSubmit={this.props.onSubmit} className="Schedule-header-container-form">
                    {inputs}
                    {selects}
                    <button type="submit" className="input-group transition">Add</button>
                </form>
            </div>
        )
    }
}

export default DefaultForm