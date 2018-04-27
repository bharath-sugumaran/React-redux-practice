import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { browserHistory } from "react-router";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import "../styles/styles.css"; //Webpack can import CSS files too!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CoursePage from "./components/course/CoursePage";


render(
  <Router history ={browserHistory}>
  <App>
    <Switch>
       <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path ="/course" component ={CoursePage}/>
         </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);
