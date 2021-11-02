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
					<Button variant="contained">
						<Link to="/profile" className="nav-link">
							Profile
						</Link>
					</Button>
					<Button variant="contained">
						<Link to="/home" className="nav-link">
							Home
						</Link>
					</Button>
					<Button variant="contained">
						<Link to="/viewbugs" className="nav-link">
							View Bugs
						</Link>
					</Button>
					<Button variant="contained">
						<Link to="/create" className="nav-link">
							Create Bug
						</Link>
					</Button>
				</ul>
			
			<div className="logout">
				<Button variant="contained" onClick={logout}>
					Log-out
				</Button>
			</div>
			</ThemeProvider>
		</div>
	);
}
