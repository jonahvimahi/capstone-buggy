import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../firebase";
import "./Sidebar.css";
export default function Sidebar() {
	return (
		<div className="sidebarDiv">
		<div className="sidebar">
			<ul>
			<h1 className="brand">Bug-Tracker</h1>
				<li>
					<Link to="/profile" className="nav-link">
						Profile
					</Link>
				</li>
				<li>
					<Link to="/home" className="nav-link">
						Home
					</Link>
				</li>
				<li>
					<Link to="/viewbugs" className="nav-link">
						View Bugs
					</Link>
				</li>
				<li>
					<Link to="/create" className="nav-link">
						Create Bug
					</Link>
				</li>
			</ul>
			<div className="logout">
				<button className="logout_btn" onClick={logout}>
					Log-out
				</button>
			</div>
		</div>
		</div>
	);
}
