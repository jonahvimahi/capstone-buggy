import React from "react";
import "./EditPanel.css";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "../../theme";

export default function EditBug(props) {
	function deleteClicked() {
		axios
			.delete(`http://localhost:3500/viewbugs/delete/?id=${props.bug._id}`)
			.then((res) => {
				console.log("good going");
			})
			.catch(() => {
				console.log("its not working dummy");
			});
			
			props.getBugs()
	}

	return (
		<div className="edit-panel">
			<ThemeProvider theme={Theme}>
			<Button startIcon={<EditIcon/>} onClick={props.editClicked}>Edit</Button>
			<Button startIcon={<DeleteIcon />} onClick={() => deleteClicked()}><Link className="delete-btn" to='/home'>Delete</Link></Button>
			</ThemeProvider>
		</div>
	);
}
