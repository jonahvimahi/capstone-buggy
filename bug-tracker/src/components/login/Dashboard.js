import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import "../../Reset.css"
import { auth, db, logout } from "../../firebase";
import Sidebar from "../Sidebar/Sidebar";
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
				<h1 className="title">Logged in as:</h1>
				<h2>{name}</h2>
				<h3>{user?.email}</h3>
				<button className="dashboard__btn" onClick={logout}>
					Logout
				</button>
			</div>
			</div>
		</>
	);
}
export default Dashboard;
