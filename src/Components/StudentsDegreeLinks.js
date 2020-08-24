import React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import "./../index.css"



class StudentsDegreeLinks extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    
        return(
            <HashRouter>
                
                <div className = "slovo">
                    
                <NavLink to = {this.props.DegreeLink} >{this.props.DegreeLink}</NavLink>
                    
                </div>
                <div className = "content">
                    <Route  path = {this.props.DegreeLink} component = {this.props.Degree} />

                </div>
            
            </HashRouter>
        )
    }
}

export default StudentsDegreeLinks;