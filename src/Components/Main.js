/*esling-disable*/
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./Stylesheets/stylesheet.css";
import Home from "./Pages/Home";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div className="main-page">
            <div className="header">
              {/*https://cssgradient.io/
              same
              */}
              <p>Title</p>
            </div>
            <div className="main-page-content">
              <div className="navbar">
                <nav>
                  <ul>
                    <li>
                      <NavLink className="navlinks" to="/home">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navlinks" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navlinks" to="/users">
                        Users
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <div className="content">
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/home">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
