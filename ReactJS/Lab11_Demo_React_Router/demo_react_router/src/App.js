import "./App.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import AccountManagement from "./Component/AccountManagement";
import DepartmentManagement from "./Component/DepartmentManagement";
import Login from "./Component/Login";
import Sign_Up from "./Component/Sign_up";
import AccountDetail from "./Component/AccountDetail";
function App() {
  return (
    <div className="App">
      <div className="row">
        <nav
          className="navbar navbar-inverse"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <Link
                activeStyle={{ backgroundColor: "blue" }}
                className="navbar-brand"
                to="/"
                exact
              >
                VTI ACADEMY
              </Link>
            </div>
            <ul class="nav navbar-nav">
              <li>
                <NavLink activeStyle={{ backgroundColor: "blue" }} to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ backgroundColor: "red" }}
                  to="/about"
                  exact
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ backgroundColor: "yellow" }}
                  to="/AccountManagement"
                  exact
                >
                  AccountManagement
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="select"
                  to="/DepartmentManagement"
                  exact
                >
                  DepartmentManagement
                </NavLink>
              </li>
              <li>
                <Link to="/">Đào tạo doanh nghiệp</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/Sign_Up">
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </Link>
              </li>
              <li>
                <Link to="/Login">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route
            path="/AccountManagement"
            component={AccountManagement}
            exact
          />
          <Route
            path="/AccountManagement/:ID"
            component={AccountDetail}
            exact
          />
          <Route
            path="/DepartmentManagement"
            component={DepartmentManagement}
            exact
          />
          <Route path="/Login" component={Login} exact />
          <Route path="/Sign_Up" component={Sign_Up} exact />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
