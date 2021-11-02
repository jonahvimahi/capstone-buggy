import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import "../../Reset.css"
import { auth, db, logout } from "../../firebase";
import Sidebar from "../Sidebar/Sidebar";
import { ThemeProvider } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { Theme } from "../../theme";


function Dashboard(props) {
	const [user, loading] = useAuthState(auth);
	const [name, setName] = useState("");
	const history = useHistory();
	const fetchUserName = async () => {
		try {
			const query = await db
				.collection("users")
				.where("uid", "==", user?.uid)
				.get();
			const data = await query.docs[0].data();
			setName(data.name);
		} catch (err) {
			console.error(err);
			alert("An error occured while fetching user data");
		}
	};
	useEffect(() => {
		if (loading) return;
		if (!user) return history.replace("/");
		fetchUserName();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, loading]);
	return (
		<>
			<Sidebar />
			<div className="dashboard-container">
			<div className="profile__card">
				<ThemeProvider theme={Theme}>
				<Typography variant="h6">Logged in as:</Typography>
				<Typography variant="h4">{name}</Typography>
				<Typography variant="body1">{user?.email}</Typography>
				<Button variant="contained" onClick={logout}>
					Logout
				</Button>
				</ThemeProvider>
			</div>
			</div>
		</>
	);
}
export default Dashboard;
