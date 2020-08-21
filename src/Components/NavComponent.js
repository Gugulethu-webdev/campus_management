import React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./Home";
import Degrees from "./Degrees";
import Students from "./Students"
import Lecturers from "./Lecturers";
import Courses from "./Course"
import "./../index.css";



class NavComponent extends React.Component{

    render(){
        return(
            <HashRouter>
                <div>
                <div className = "nav-bar">
                    <NavLink exact to = "/" ClassName = "active">HOME</NavLink>
                    <NavLink to = "/Lecturers" >LECTURERS</NavLink>
                    <NavLink to = "/Students" >STUDENTS</NavLink>
                    <NavLink to = "/Degrees" >DEGREES</NavLink>
                    <NavLink to = "/Courses" >COURSES</NavLink>
                </div>
                <div className = "content">
                    <Route exact path = "/" component = {Home} />
                    <Route  path = "/Lecturers" component = {Lecturers} />
                    <Route  path = "/Students" component = {Students} />
                    <Route  path = "/Degrees" component = {Degrees} />
                    <Route  path = "/Courses" component = {Courses} />
                    
                </div>
            </div>
            </HashRouter>
            
        )
    }
}

export default NavComponent;