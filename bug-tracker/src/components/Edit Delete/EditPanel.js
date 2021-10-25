import React from 'react'
import './EditPanel.css'

export default function EditBug(props) {
    return(
        <div className="edit-panel">
            <button onClick={props.editClicked}>Edit</button>
            <button onClick={props.deleteClicked}>Delete</button>
        </div>
    )
}