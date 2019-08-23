import React, { Component } from 'react'

import './Row.css'
import './../../index.css'

class Row extends Component{

    makeCells = (arrayItems, onClick, index) => {
        const elements = []
    
        for(let i in arrayItems){
            elements.push(<td className="Cell-row" key={i}>{arrayItems[i]}</td>);
        }
    
        elements.push(<td>
            <button className="Cell-remove-button transition" onClick={() => {onClick(index)}}>X</button>
        </td>)
    
        return elements
    }

    render() {
        const elements = this.makeCells(this.props.items, this.props.onClick, this.props.index)

        return (
            <tr className="transition Cell">
                {elements}
            </tr>
        )
    }
}

export default Row