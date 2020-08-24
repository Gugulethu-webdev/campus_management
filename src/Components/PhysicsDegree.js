import React from "react";

var courses = [
    {
        name:"Physics Practical Work I - PHY1503",
        duration : "12 months",
        degreeItlinksTo : "Physics Degree",
        Link : "https://gugulethu-webdev.github.io/courses/dist/phy1.html"
    },{
        name:"Mechanics (Physics) - PHY1505",
        duration : "6 months",
        degreeItlinksTo : "Physics Degree",
        Link : "https://gugulethu-webdev.github.io/courses/dist/phy2.html"
    },{
        name:"Electromagnetism and Heat (Fisika) - PHY1506",
        duration : "6 months",
        degreeItlinksTo : "Physics Degree",
        Link : "https://gugulethu-webdev.github.io/courses/dist/phy3.html"
    },{
        name:"Modern Physics - PHY1604",
        duration : "6 months",
        degreeItlinksTo : "Physics Degree",
        Link : "https://gugulethu-webdev.github.io/courses/dist/phy4.html"
    }    
]

class PhysicsDegree extends React.Component{
    render(){
        return(
            <div class ="courseDetails">
                <h1>Physics Degree</h1>
                <hr/>
                <h2>Duration : 3 years</h2>
                <hr/>
                <h2>list of courses</h2>
               {courses.map((course)=>{
                   return(
                       <ul>
                           <li>
                               - <a href = {course.Link}>{course.name}</a>
                           </li>
                       </ul>
                   )
               })} 
               <hr/>
               <h2>
                   Lectured by : Pieter, Star, James & Rassie
               </h2>
               <hr/> 
        </div>
        )
    }
}

export default PhysicsDegree;