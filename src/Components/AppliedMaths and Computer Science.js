import React from "react";

class AppliedMathsandComputerScience extends React.Component{
    render(){
        var courses = [
            {
                name : "Differential Equations - APM2611",
                duration : "6 months",
                degreeItlinksTo : "Applied Maths and Computer Science",
                Link : "https://gugulethu-webdev.github.io/courses/dist/AMC1.html"
            },{
                name : "Linear Algebra I - MAT1503",
                duration : "6 months",
                degreeItlinksTo : "Applied Maths and Computer Science",
                Link : "https://gugulethu-webdev.github.io/courses/dist/AMC2.html"
            },{
                name : "Introduction to programming I - COS1511",
                duration : "6 months",
                degreeItlinksTo : "Applied Maths and Computer Science",
                Link : "https://gugulethu-webdev.github.io/courses/dist/AMC3.html"
            },{
                name : "Numerical Methods I - COS26331",
                duration : "6 months",
                degreeItlinksTo : "Applied Maths and Computer Science",
                Link : "https://gugulethu-webdev.github.io/courses/dist/AMC4.html"
            }
        ]
        return (   
            <div class ="courseDetails">
                <h1>Applied Maths and Computer Science</h1>
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
                   Lectured by : Gugulethu, Jabulani, Pinini & Mxo
               </h2>
               <hr/>
</div>
)

}
}
    
export default AppliedMathsandComputerScience;