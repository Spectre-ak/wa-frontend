import Home from '../home/Home';
import Project from '../Projects/Projects';
import Recommendations from '../recommendations/Recommendations';
import Profile from '../profile/Profile'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  

function Sidebar(props) {
    console.log(props.classnames.home);
    return (
        <Router>
          <div>
            <div className="container">
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <a class="navbar-brand abs" href="#">Workflow Analyzer</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                <ul class="navbar-nav nav nav-pills" id="pills-tab" role="tablist">
                      
                      <li class="nav-item">
                          <Link to="/projects" class={props.classnames.projects}  id="pills-project-tab" data-toggle="pill"  role="tab" aria-controls="pills-project" aria-selected="false">Projects</Link>
                      </li>
                      <li class="nav-item">
                          <Link to="/recommendations" class={props.classnames.recommendations}  id="pills-recommendations-tab" data-toggle="pill" role="tab" aria-controls="pills-recommendations" aria-selected="false">Recommendations</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/profile" class={props.classnames.profile}  id="pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="pills-profile" aria-selected="false">Profile</Link>
                      </li>
                    </ul>
                    
                </div>
            </nav>
            </div>         

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
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

export default Sidebar;
/*

  extras

  
            <nav class="navbar navbar-light navbar-expand-md bg-light">
                <a class="navbar-brand d-inline" href=""></a>
                <button class="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="navbar-collapse collapse justify-content-start align-items-start w-100" id="collapsingNavbar2">
                    <ul class="navbar-nav nav nav-pills mx-auto text-md-center text-left" id="pills-tab" role="tablist">
                      <li class="nav-item">
                          <Link to="/home" class={props.classnames.home} id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
                      </li>
                      <li class="nav-item">
                          <Link to="/projects" class={props.classnames.projects}  id="pills-project-tab" data-toggle="pill"  role="tab" aria-controls="pills-project" aria-selected="false">Projects</Link>
                      </li>
                      <li class="nav-item">
                          <Link to="/recommendations" class={props.classnames.recommendations}  id="pills-recommendations-tab" data-toggle="pill" role="tab" aria-controls="pills-recommendations" aria-selected="false">Recommendations</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/profile" class={props.classnames.profile}  id="pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="pills-profile" aria-selected="false">Profile</Link>
                      </li>
                    </ul>
                    
                </div>
            </nav>




            <div className="container">
                this is the navbar which is to be placed sideways more like a collapsable side bar
                <hr></hr>
                <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <Link to="/home" class={props.classnames.home} id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/projects" class={props.classnames.projects}  id="pills-project-tab" data-toggle="pill"  role="tab" aria-controls="pills-project" aria-selected="false">Projects</Link>
                </li>
                <li class="nav-item">
                    <Link to="/recommendations" class={props.classnames.recommendations}  id="pills-recommendations-tab" data-toggle="pill" role="tab" aria-controls="pills-recommendations" aria-selected="false">Recommendations</Link>
                </li>
                <li class="nav-item">
                   <Link to="/profile" class={props.classnames.profile}  id="pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="pills-profile" aria-selected="false">Profile</Link>
                </li>
                </ul>
                
                
            </div>


            */