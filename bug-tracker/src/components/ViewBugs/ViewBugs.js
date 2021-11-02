import axios from "axios";
import React, { useState, useEffect } from "react";
import BugCard from "../Bug Card/BugCard";
import BugView from "../Bug View/BugView";
import Sidebar from "../Sidebar/Sidebar";
import "./ViewBugs.css";

export default function ViewBugs() {
	const [displayBug, setDisplayBug] = useState({
		name: "",
		isDisplayed: false,
	});
	const [holdBugs, setHoldBugs] = useState([]);
	useEffect(() => {
		getBugs();
	}, []);

	function BugClicked(name) {
		setDisplayBug({
			isDisplayed: !displayBug.isDisplayed,
			name: name,
		});
	}
	function getBugs() {
		axios
			.get("http://localhost:3500/viewbugs")
			.then((res) => {
				setHoldBugs(res.data);
			})
			.catch(() => {
				console.log("its not working dummy");
			});
	}

	return (
		<>
			<Sidebar />

			<div className="bugCard-container">
				{ !displayBug.isDisplayed ? holdBugs.map((bug, key) => (
					<BugCard key={key} bug={bug} clicked={BugClicked} />
				)): null}
				{displayBug.isDisplayed && (
					<BugView
						getBugs={getBugs}
						clicked={BugClicked}
						bug={holdBugs.filter((bug) => bug.name === displayBug.name)[0]}
					/>
				)}
			</div>
		</>
	);
}
