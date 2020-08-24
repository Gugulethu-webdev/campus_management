import React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import AppliedMathsandComputerScience from "./AppliedMaths and Computer Science";
import BioChemistry from "./BioChemistry";
import BotanicalScience from "./BotanicalScience";
import ComputerScience from "./ComputerScience";
import MathsDegree from "./MathsDgree";
import MechanicalScience from "./MechanicalScience";
import PhysicsDegree from './PhysicsDegree';
import Home from "./Home";
import Degrees from "./Degrees";
import Students from "./Students";
import Lecturers from "./Lecturers";
import Courses from "./Course";
import "./../index.css";



class NavComponent extends React.Component{

    render(){
        return(
            <HashRouter>
                <div>
                <div className = "nav-bar">
                    <NavLink exact to = "/" ClassName = "active">HOME</NavLink>
                    <NavLink to = "/Degrees" >DEGREES</NavLink>
                    <NavLink to = "/Courses" >COURSES</NavLink>
                    <NavLink to = "/Lecturers" >LECTURERS</NavLink>
                    <NavLink to = "/Students" >STUDENTS</NavLink>
                    
                </div>
                <div className = "content">
                    <Route exact path = "/" component = {Home} />
                    <Route  path = "/Degrees" component = {Degrees} />
                    <Route  path = "/Courses" component = {Courses} />
                    <Route  path = "/Lecturers" component = {Lecturers} />
                    <Route  path = "/Students" component = {Students} />
                    
                </div>
                <div id = "slovo">
                    <Route   path = "/AppliedMaths&ComputerScience" component = {AppliedMathsandComputerScience}/>
                    <Route   path = "/BioChemistry" component = {BioChemistry}/>
                    <Route   path = "/BotanicalScience" component = {BotanicalScience}/>
                    <Route   path = "/BscMathematics" component = {MathsDegree}/>
                    <Route   path = "/ComputerScience" component = {ComputerScience}/>
                    <Route   path = "/MechanicalScience" component = {MechanicalScience}/>
                    <Route   path = "/PhysicsDegree" component = {PhysicsDegree}/>
                </div>
            </div>
            </HashRouter>
            
        )
    }
}

export default NavComponent;