import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="page-contents">
			<section id="nav">
				<div className="navDiv"></div>
				<div className="navDiv">
					<h1>Bug-Tracker</h1>
				</div>
				<div className="navBtns navDiv">
					<button className="navBtn" id="projects">
						{" "}
						Projects{" "}
					</button>

					<Link to="/dashboard">
						{" "}
						<button className="navBtn" id="profile">
							{" "}
							Profile{" "}
						</button>
					</Link>

					<button className="navBtn" id="newBug">
						{" "}
						New Bug{" "}
					</button>
				</div>
			</section>
		</div>
	);
}
export default Home;
