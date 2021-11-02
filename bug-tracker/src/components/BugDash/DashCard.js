import React from 'react'
import './DashCard.css'
import PriorityController from '../Controller/PriorityController'
import { Typography } from '@mui/material'

export default function DashCard(props) {
    const {level, color} = PriorityController(props.priority)
    return(
        <div className="dash-card" onClick={props.clicked}>
            <Typography >Total {level}</Typography>
            <Typography style={{color:color}}>{props.count}</Typography>
        </div>
    )
}