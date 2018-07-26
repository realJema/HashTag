import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import News from './pages/News';
import Jobs from './pages/Jobs';
import Locator from './pages/Locator';


import Login from './actions/Login';
import Sign_up from './actions/Sign_up';
import TagsSelection from './actions/Tags';

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div className="main">
            <div className="main_menu">
              <ul className="website_list">
                <h2><NavLink exact to="/"><span className="color hash">#</span>HASH<span className="color">TAG</span></NavLink></h2>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/jobs">Jobs</NavLink></li>
                <li><NavLink to="/locator">Locator</NavLink></li>
              </ul>
              <ul className="website_list">
                <li><a className="create_post" >POST</a></li>
                <li><NavLink to="/sign_up">SIGN UP</NavLink></li>
                <li><NavLink to="/login">LOGIN IN</NavLink></li>
              </ul>
            </div>
            <div className="page_frame">
              <Route exact path="/" component={News}/>
              <Route path="/news" component={News}/>
              <Route path="/jobs" component={Jobs}/>
              <Route path="/locator" component={Locator}/>
              <Route path="/sign_up" component={Sign_up}/>
              <Route path="/login" component={Login}/>
              <Route path="/tags" component={TagsSelection}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }


  export default Main;