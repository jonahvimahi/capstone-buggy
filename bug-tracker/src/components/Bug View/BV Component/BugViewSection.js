import { Typography } from '@mui/material'
import React from 'react'
import './BugViewSection.css'

export default function BugViewSection(props) {
    return(
        <div className="view-section">
            <Typography className="viewsection-title">{props.title}</Typography>
            <Typography className="viewsection-p">{props.info}</Typography>
        </div>
    )
}