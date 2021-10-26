import React, { useState } from "react";
import axios from "axios";
import "./BugForm.css";
import Sidebar from "../Sidebar/Sidebar";

export default function BugForm(props) {
	const [bugObject, setBugObject] = useState({
		name: "",
		details: "",
		steps: "",
		version: "",
		assigned: "",
		creator: "",
		priority: 0,
		date: "",
	});
	function submit(e) {
		e.preventDefault();

		const formData = {
			name: bugObject.name,
			details: bugObject.details,
			steps: bugObject.steps,
			version: bugObject.version,
			assigned: bugObject.assigned,
			creator: bugObject.creator,
			priority: bugObject.priority,
			date: bugObject.date,
		};
		console.log(formData);
		axios({
			url: "http://localhost:3500/create",
			method: "POST",
			data: formData,
		})
			.then((res) => {
				console.log("Data has been sent to the server");
				resetInputs();
			})
			.catch((err) => {
				console.log(err);
			});
	}
	function resetInputs() {
		setBugObject({
			name: "",
			details: "",
			steps: "",
			version: "",
			assigned: "",
			creator: "",
			priority: 0,
			date: "",
		});
	}
	return (
		<>
			{props.title !== "Edit Bug" && <Sidebar />}
			<div className="bug-view">
				<div className="bug-create">
					{props.title === "Edit Bug" && (
						<button className="close-button" onClick={props.close}>
							Close
						</button>
					)}
					{props.title === "Edit Bug" && <h1>{props.title}</h1>}
					<form>
						<label>Name:</label>
						<input
							name="name"
							placeholder="Bug Name"
							required
							onChange={(e) => {
								setBugObject({ ...bugObject, name: e.target.value });
							}}
							value={bugObject.name}
						/>
						<label>Details:</label>
						<textarea
							name="details"
							placeholder="Detailed description of bug"
							onChange={(e) => {
								setBugObject({ ...bugObject, details: e.target.value });
							}}
							value={bugObject.details}
						></textarea>
						<label>Steps:</label>
						<textarea
							name="steps"
							placeholder="Steps to recreate the bug"
							onChange={(e) => {
								setBugObject({ ...bugObject, steps: e.target.value });
							}}
							value={bugObject.steps}
						></textarea>
						<label>Application Version:</label>
						<input
							name="version"
							placeholder="Application Version"
							onChange={(e) => {
								setBugObject({ ...bugObject, version: e.target.value });
							}}
							value={bugObject.version}
						></input>
						<label>Priority:</label>
						<select
							name="priority"
							required
							onChange={(e) => {
								setBugObject({ ...bugObject, priority: e.target.value });
							}}
							value={bugObject.priority}
						>
							<option value="1">High</option>
							<option value="2">Mid</option>
							<option value="3">Low</option>
						</select>
						<label>Assigned:</label>
						<input
							placeholder="Assigned"
							name="assigned"
							onChange={(e) => {
								setBugObject({ ...bugObject, assigned: e.target.value });
							}}
							value={bugObject.assigned}
						></input>
						<label>Creator</label>
						<input
							placeholder="Who is reporting this bug?"
							name="creator"
							onChange={(e) => {
								setBugObject({ ...bugObject, creator: e.target.value });
							}}
							value={bugObject.creator}
						/>
						<label>Date:</label>
						<input
							type="date"
							className="bug-date"
							placeholder="Bug Date"
							onChange={(e) =>
								setBugObject({ ...bugObject, date: e.target.value })
							}
							value={bugObject.date}
						/>
						<button type="submit" onClick={submit}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
