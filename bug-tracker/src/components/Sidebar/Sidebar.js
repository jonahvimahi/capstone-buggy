import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../firebase";
import "./Sidebar.css";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "../../theme";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<ThemeProvider theme={Theme}>
				<ul>
					<h1 className="brand">Bug-Tracker</h1>
						<Link to="/profile" className="nav-link">
					<Button className="nav-btn" size="large" variant="contained">
							Profile
					</Button>
						</Link>
						<Link to="/home" className="nav-link">
					<Button className="nav-btn" size="large" variant="contained">
							Home
					</Button>
						</Link>
						<Link to="/viewbugs" className="nav-link">
					<Button className="nav-btn" size="large" variant="contained">
							View Bugs
					</Button>
						</Link>
						<Link to="/create" className="nav-link">
					<Button className="nav-btn" size="large" variant="contained">
							Create Bug
					</Button>
						</Link>
				</ul>
			
			<div className="logout">
				<Button className="nav-btn" size="large" variant="contained" onClick={logout}>
					Log-out
				</Button>
			</div>
			</ThemeProvider>
		</div>
	);
}
