import React from 'react'
import './DashCard.css'
import PriorityController from '../Controller/PriorityController'

export default function DashCard(props) {
    const {level, color} = PriorityController(props.priority)
    return(
        <div className="dash-card" style={{color:color}} onClick={props.clicked}>
            <h2>Total: {level}</h2>
            <p>{props.count}</p>
        </div>
    )
}