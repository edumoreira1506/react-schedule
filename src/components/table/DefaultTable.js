import React, { Component } from 'react'
import Row from './Row'

import './../schedule/Schedule.css'
import './../../index.css'

class DefaultTable extends Component {

    makeElementsHead = (arrayItems) => {
        const elementsHead = []
    
        for(let i in arrayItems){
            elementsHead.push(<td key={i} className="Cell-row">{arrayItems[i]}</td>)
        }
    
        return elementsHead
    }
    
    makeElementsBody = (arrayItems, onClick) => {
        const elements = []
    
        for(let i in arrayItems){
            const fields = []
    
            for(let j in arrayItems[i]){
                fields.push(arrayItems[i][j])
            }
    
            elements.push(<Row key={i} onClick={onClick} items={fields} index={i} />)
        }
    
        return elements
    }

    render() {
        const elementsHead = this.makeElementsHead(this.props.itemsHead)
        const elementsBody = this.makeElementsBody(this.props.items, this.props.onClick)

        return (
            <table className="Schedule-table">
                <thead className="Schedule-table-thead transition">
                    <tr>{elementsHead}</tr>
                </thead>
                <tbody className="Schedule-table-tbody">{elementsBody}</tbody>
            </table>
        )
    }
}

export default DefaultTable
