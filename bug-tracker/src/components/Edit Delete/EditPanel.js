import React from "react";
import "./EditPanel.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
			<button onClick={props.editClicked}>Edit</button>
			<button onClick={() => deleteClicked()}><Link to='/home'>Delete </Link></button>
		</div>
	);
}
