import React from "react";

class MechanicalScience extends React.Component{

    render(){
        var courses = [
            {
                name : "Calculus Methods and Mechanics CMM 1003",
                duration : "6 months",
                degreeItlinksTo : "Mechanical Science Degree",
                Link : "https://gugulethu-webdev.github.io/courses/dist/MEC1.html"
            },{
                name : "Ordinary Differential Equations - MAT3706",
                duration : "6 months",
                degreeItlinksTo : "Mechanical Science Degree",
                Link : "https://gugulethu-webdev.github.io/courses/dist/MEC2.html"
            },{
                name : "Special Relativity and Riemannian Geometry - APM3713",
                duration : "6 months",
                degreeItlinksTo : "Mechanical Science",
                Link : "https://gugulethu-webdev.github.io/courses/dist/MEC3.html"
            },{
                name : "Theoretical Computer Science I - COS1501",
                duration : "6 months",
                degreeItlinksTo : "Mechanical Science Degree",
                Link : "https://gugulethu-webdev.github.io/courses/dist/MEC4.html"
            }
        ]

        return(
            <div class ="courseDetails">
                <h1>Mechanical Science</h1>
                <hr/>
                <h2>Duration : 4 years</h2>
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
                   Lectured by : Andrew, Pieter, Star, James & Rassie
               </h2>
               <hr/> 
        </div>
        )
    }
}

export default MechanicalScience;