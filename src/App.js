import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/siteheader'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'


export default function App() {
  return (
    <Router>
        <div>
			<Header />

			<nav id='navbar'>
					<ul>
						<li>
							<Link to="/">About Me</Link>
						</li>
						<li>
							<Link to="/portfolio">Portfolio</Link>
						</li>
						<li>
							<Link to="/resume">Resume</Link>
						</li>
					</ul>
			</nav>

			<div id='content'>
				<Switch>
					<Route path="/portfolio">
						<Portfolio />
					</Route>
					<Route path="/resume">
						<Resume />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</div>
    </Router>
  	)
}