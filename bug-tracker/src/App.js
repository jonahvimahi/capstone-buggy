import './Reset.css'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "./components/login/Login"
import Register from './components/login/Register'
import ResetPassword from "./components/login/ResetPassword";
import Dashboard from "./components/login/Dashboard";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path="/register" component={Register}/>
          <Route exact path="/reset" component={ResetPassword}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Router>
		</div>
	);
}

export default App;
