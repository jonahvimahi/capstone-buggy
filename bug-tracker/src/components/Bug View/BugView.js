import React, { useState } from "react";
import ViewSection from "./BV Component/BugViewSection";
import BugModel from "../Models/BugModel";
import { markComplete } from "../Controller/Redux/BugSlice";
import EditPanel from "../Edit Delete/EditPanel";
import BugForm from "../Bug Create/BugForm";
import "./BugView.css";

export default function BugView(props) {
	const bug = new BugModel(props.bug);
	const [displayEdit, setDisplayEdit] = useState(false);
	function editClicked() {
		setDisplayEdit(!displayEdit);
	}
	function deleteClicked() {}

	return (
		<>
		{ !displayEdit ? 

			(<div className="bug-view">
			<EditPanel
				editClicked={editClicked}
				deleteClicked={deleteClicked}
				bugs={bug}
			/>
			<button className="close-button" onClick={props.clicked}>
				Close
			</button>
			<h1>{bug.name}</h1>
			<ViewSection
				classname="bug-section-title"
				title="Details"
				info={bug.details}
			/>
			<ViewSection
				classname="bug-section-title"
				title="Steps"
				info={bug.steps}
			/>
			<ViewSection
				classname="bug-section-title"
				title="Priority"
				info={bug.priority}
			/>
			<ViewSection
				classname="bug-section-title"
				title="Creator"
				info={bug.creator}
			/>
			<ViewSection
				classname="bug-section-title"
				title="App Version"
				info={bug.version}
			/>
			<ViewSection
				classname="bug-section-title"
				title="Date Created"
				info={bug.date}
			/>
			<button
				className="complete-button"
				onClick={() => {
					dispatchEvent(markComplete());
				}}
			>
				Mark Complete
			</button>
		</div>) 
		: (
		<BugForm title="Edit Bug" bug={bug} close={editClicked} />
		)}
		</>
	)}
