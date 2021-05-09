import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import Sidebar from './sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home/Home';
import Project from './Projects/Projects';
import Recommendations from './recommendations/Recommendations';
import Profile from './profile/Profile'
import LoginBaseContainer from './login/Login';

function checkCookie(){
  const ck=document.cookie.split(";");
  ck.forEach(element => {
      var cookoeAr=element.split("=");
      var cookieUser=cookoeAr[0];
      cookieUser=cookieUser.toString();
      console.log(cookieUser);
      
      if(cookieUser.includes("af88e4e6783735505auserID")){
        // window.location.href="http://localhost:3000";
        console.log("foind");
      }
      //alert("exe");
  });
}
//checkCookie();

console.log(window.location.href);
const ar={
  "home":"nav-link",
  "projects":"nav-link",
  "recommendations":"nav-link",
  "profile":"nav-link"
}

if(window.location.href.includes("projects")){
  ar.projects="nav-link active";
  ReactDOM.render(
    <Sidebar classnames={ar}/>,document.getElementById("sidebar")
   );
}
else if(window.location.href.includes("recommendations")){
  ar.recommendations="nav-link active";
  ReactDOM.render(
    <Sidebar classnames={ar}/>,document.getElementById("sidebar")
   );
}
else if(window.location.href.includes("profile")){
  ar.profile="nav-link active";
  ReactDOM.render(
    <Sidebar classnames={ar}/>,document.getElementById("sidebar")
   );
}
else if(window.location.href.includes("login")){
  ReactDOM.render(
    <LoginBaseContainer/>,document.getElementById("sidebar")
  );
}
else {
  ar.projects="nav-link active";
  ReactDOM.render(
    <Sidebar classnames={ar}/>,document.getElementById("sidebar")
   );
}




//ReactDOM.render(
//  <Rr/>,document.getElementById("root")
//);





/*
//ReactDOM.render(
//    <Recommendations/>,document.getElementById('root')
//);

//ReactDOM.render(<Rr/>, document.getElementById("router"));

function Rr() {
  return (
    <Router>
      <div>
               
      <Switch>
            <Route path="/home" >
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/projects">
              <Project />
            </Route>
            <Route path="/recommendations">
              <Recommendations />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

*/