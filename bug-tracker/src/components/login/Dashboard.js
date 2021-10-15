import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, db, logout } from "../../firebase";
import { Link } from "react-router-dom";
function Dashboard() {
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
		<div className="dashboard">
			<div className="dashboard__container">
				Logged in as
				<div>{name}</div>
				<div>{user?.email}</div>
				<button className="dashboard__btn" onClick={logout}>
					Logout
				</button>
				<Link to="/home">
					<button className="dashboard__btn">
						Home
					</button>
				</Link>
			</div>
		</div>
	);
}
export default Dashboard;
