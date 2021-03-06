import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BugForm.css";
import Sidebar from "../Sidebar/Sidebar";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "../../theme";
import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";

export default function BugForm(props) {
	const getBugs = props.getBugs;
	const [bugObject, setBugObject] = useState({
		name: "",
		details: "",
		steps: "",
		version: "",
		assigned: "",
		creator: "",
		priority: 1,
		date: "",
	});
	useEffect(() => {
		if (props.bug) {
			setEditBug();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	function setEditBug() {
		setBugObject({
			name: props.bug.name,
			details: props.bug.details,
			steps: props.bug.steps,
			version: props.bug.version,
			assigned: props.bug.assigned,
			creator: props.bug.creator,
			priority: props.bug.priority,
			date: props.bug.date,
		});
	}
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
	function updateBug() {
		console.log(props.bug);

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
		axios
			.put(`http://localhost:3500/viewbugs/?id=${props.bug._id}`, formData) // ({
			.then((res) => {
				console.log("Data has been sent to the server");
				getBugs();
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
			<div className="bugCard-container">
				<div className="bug-view">
					<div className="bug-create">
						{props.title === "Edit Bug" && (
							<>
								<ThemeProvider theme={Theme}>
									<div className="edit-panel">
									<div className="edit-close">
										<Button
											size="large"
											className="close-button"
											onClick={props.close}
										>
											{<CloseIcon />}
										</Button>
									</div>
									<div className="edit-title">
									<Typography variant="h3">{props.title}</Typography>
									</div>
									</div>
								</ThemeProvider>
							</>
						)}
						<ThemeProvider theme={Theme}>
							<form>
								<TextField
									autoComplete="off"
									variant="standard"
									name="name"
									helperText="Title"
									onChange={(e) => {
										setBugObject({ ...bugObject, name: e.target.value });
									}}
									value={bugObject.name}
								/>

								<TextField
									autoComplete="off"
									variant="standard"
									name="details"
									helperText="Detailed description of bug"
									onChange={(e) => {
										setBugObject({ ...bugObject, details: e.target.value });
									}}
									value={bugObject.details}
								></TextField>
								<TextField
									autoComplete="off"
									variant="standard"
									name="steps"
									helperText="Steps to recreate bug"
									onChange={(e) => {
										setBugObject({ ...bugObject, steps: e.target.value });
									}}
									value={bugObject.steps}
								></TextField>

								<TextField
									autoComplete="off"
									variant="standard"
									name="version"
									helperText="Application Version"
									onChange={(e) => {
										setBugObject({ ...bugObject, version: e.target.value });
									}}
									value={bugObject.version}
								></TextField>
								<Select
									size="small"
									label="Priority"
									InputLabelProps={{
										style: { fontSize: 16, color: "white" },
										shrink: true,
									}}
									onChange={(e) => {
										setBugObject({ ...bugObject, priority: e.target.value });
									}}
									value={bugObject.priority}
								>
									<MenuItem value={1}>High Priority</MenuItem>
									<MenuItem value={2}>Medium Priority</MenuItem>
									<MenuItem value={3}>Low Priority</MenuItem>
								</Select>
								<TextField
									autoComplete="off"
									variant="standard"
									helperText="Assigned"
									name="assigned"
									onChange={(e) => {
										setBugObject({ ...bugObject, assigned: e.target.value });
									}}
									value={bugObject.assigned}
								></TextField>
								<TextField
									autoComplete="off"
									variant="standard"
									helperText="Who is reporting this bug?"
									name="creator"
									onChange={(e) => {
										setBugObject({ ...bugObject, creator: e.target.value });
									}}
									value={bugObject.creator}
								/>

								<TextField
									autoComplete="off"
									size="small"
									label="Date"
									type="date"
									InputLabelProps={{
										style: { fontSize: 16 },
										shrink: true,
									}}
									onChange={(e) =>
										setBugObject({ ...bugObject, date: e.target.value })
									}
									value={bugObject.date}
								/>
								{props.title !== "Edit Bug" && (
									<Button type="submit" onClick={submit}>
										Submit
									</Button>
								)}
								{props.title === "Edit Bug" && (
									<>
											<Button
												size="large"
												className="update-button"
												onClick={() => {
													updateBug();
												}}
											>
												Update
											</Button>
									</>
								)}
							</form>
						</ThemeProvider>
					</div>
				</div>
			</div>
		</>
	);
}
