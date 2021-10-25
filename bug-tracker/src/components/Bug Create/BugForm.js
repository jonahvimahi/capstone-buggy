import React, { useState } from "react";
import "./BugForm.css";
import bugModel from "../Models/BugModel";
import Sidebar from "../Sidebar/Sidebar";

export default function BugForm(props) {
	const [bugObject, setBugObject] = useState(new bugModel(props.bug));

	function inputChange(e) {
		setBugObject({
			...bugObject,
			[e.target.name]: e.target.value,
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
							type="text"
							name="name"
							placeholder="Bug Name"
							required
							onChange={inputChange}
							value={bugObject.name}
						/>
						<label>Details:</label>
						<textarea
							name="details"
							placeholder="Detailed description of bug"
							onChange={(e) => setBugObject(e.target.value)}
							value={bugObject.details}
						></textarea>
						<label>Steps:</label>
						<textarea
							name="details"
							placeholder="Steps to recreate the bug"
							onChange={(e) => setBugObject(e.target.value)}
							value={bugObject.steps}
						></textarea>
						<label>Priority:</label>
						<select
							name="priority"
							required
							onChange={inputChange}
							value={bugObject.priority}
						>
							<option value="1">High</option>
							<option value="2">Mid</option>
							<option value="3">Low</option>
						</select>
						<label>Assigned:</label>
						<select
							name="assigned"
							onChange={inputChange}
							value={bugObject.assigned}
						>
							<option>Jonah Vimahi</option>
						</select>
						<label>Application Version:</label>
						<input
							name="version"
							placeholder="Application Version"
							onChange={inputChange}
							value={bugObject.version}
						></input>
						<label>Date:</label>
						<input
							type="date"
							className="bug-date"
							placeholder="Bug Date"
							value={bugObject.date}
						/>
						<button type="submit">{props.title}</button>
					</form>
				</div>
			</div>
		</>
	);
}
