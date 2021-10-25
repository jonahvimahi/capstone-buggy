import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../Controller/Redux/BugSlice";
import BugCard from "../Bug Card/BugCard";
import BugView from "../Bug View/BugView";
import Sidebar from "../Sidebar/Sidebar";
export default function ViewBugs() {
	const [displayBug, setDisplayBug] = useState({
		name: "",
		isDisplayed: false,
	});
	const dispatch = useDispatch();
	const { bugs } = useSelector((state) => state);

	useEffect(() => {
		dispatch(getBugs());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bugs.length < 1]);

	function BugClicked(name) {
		setDisplayBug({
			isDisplayed: !displayBug.isDisplayed,
			name: name,
		});
	}

	return (
		<>
			<Sidebar />
			{bugs.map((bug, key) => (
				<BugCard key={key} bug={bug} clicked={BugClicked} />
			))}
			{displayBug.isDisplayed && (
				<BugView clicked={BugClicked} bug={bugs.filter((bug) => bug.name === displayBug.name)[0]} />
			)}
		</>
	);
}
