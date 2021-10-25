import "./Reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import ResetPassword from "./components/login/ResetPassword";
import Profile from "./components/login/Dashboard";
import Home from "./components/Home/Home";
import ViewBugs from "./components/ViewBugs/ViewBugs";
import Create from "./components/Bug Create/BugForm";
function App() {
	// const
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/reset" component={ResetPassword} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/viewbugs" component={ViewBugs} />
					<Route exact path="/create" component={Create} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
