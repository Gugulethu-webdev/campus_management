import React from "react";

class ComputerScience extends React.Component{

    render(){
        var courses = [
            {
                name : "Computer Algebra - APM2616",
                duration:"6 months",
                degreeItlinksTo:"Computer Science",
                Link:"https://gugulethu-webdev.github.io/courses/dist/COM1.html"
            
            },{
                name : "Computer Organisation - COS2621",
                duration:"6 months",
                degreeItlinksTo:"Computer Science",
                Link:"https://gugulethu-webdev.github.io/courses/dist/COM2.html"
            
            },{
                name : "Computer Systems: Fundamental Concepts - COS1521",
                duration:"6 months",
                degreeItlinksTo:"Computer Science",
                Link:"https://gugulethu-webdev.github.io/courses/dist/COM3.html"
            
            },{
                name : "Data Structures - COS2611",
                duration : "6 months",
                degreeItlinksTo : "Computer Science",
                Link : "https://gugulethu-webdev.github.io/courses/dist/COM4.html"
            },{
                name : "Introduction to programming I - COS1511",
                duration : "6 months",
                degreeItlinksTo : "Computer Science",
                Link : "https://gugulethu-webdev.github.io/courses/dist/COM5.html"
            }
        ]
        return(
            <div class ="courseDetails">
                <h1>Computer Science</h1>
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
                   Lectured by : Gugulethu, Jabulani, Nomthandazo & Mazaka
               </h2>
               <hr/> 
        </div>
        )
    }
}


export default ComputerScience;