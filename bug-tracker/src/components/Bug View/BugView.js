import React, { useState } from "react";
import ViewSection from "./BV Component/BugViewSection";
import EditPanel from "../Edit Delete/EditPanel";
import BugForm from "../Bug Create/BugForm";
import "./BugView.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "../../theme";

export default function BugView(props) {
	const [displayEdit, setDisplayEdit] = useState(false);
	const bug = props.bug;
	const getBugs = props.getBugs;

	function editClicked() {
		setDisplayEdit(!displayEdit);
	}

	return (
		<>
			{!displayEdit ? (
				<div className="bug-view">
					<div className="edit-panel-container">
						<EditPanel
							getBugs={props.getBugs}
							editClicked={editClicked}
							bug={bug}
						/>
						<ThemeProvider theme={Theme}>
						<Button size="large" className="close-button" onClick={props.clicked}>
							{<CloseIcon />}
						</Button>
						</ThemeProvider>
					</div>
					<Typography variant="h3" className="bugview-title">{bug.name}</Typography>
					<ViewSection className="bug-section-id" title="id" info={bug._id} />
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

				</div>
			) : (
				<BugForm
					title="Edit Bug"
					getBugs={getBugs}
					bug={bug}
					close={editClicked}
				/>
			)}
		</>
	);
}
