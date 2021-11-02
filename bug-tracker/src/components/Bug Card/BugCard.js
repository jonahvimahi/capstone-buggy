import React from "react";
import "./BugCard.css";
import PriorityController from "../Controller/PriorityController";
import { Typography } from "@mui/material";

export default function BugCard(props) {
	const { name, priority, version } = props.bug;
	const { level, color } = PriorityController(priority);
	function Clicked() {
		props.clicked(name);
	}
	return (
				<div className="bug-card" onClick={Clicked}>
					<Typography className="name">{name}</Typography>
					<Typography className="priority" style={{ color: color }}>{level}</Typography>
					<Typography className="version">{version}</Typography>
				</div>
	);
}
