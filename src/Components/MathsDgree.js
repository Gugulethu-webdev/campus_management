import React from "react";

class MathsDegree extends React.Component{
    render(){
        var courses = [
            {
                name : "Applied Linear Algebra - MAT1014",
                duration:"6 Months",
                degreeItlinksTo:"Bsc Mathematics",
                Link:"https://gugulethu-webdev.github.io/courses/dist/maths1.html"
            
            },
             {
                name : "Discrete Mathematics: Combinatorics - MAT3707",
                duration:"6 months",
                degreeItlinksTo:"Bsc Mathematics",
                Link:"https://gugulethu-webdev.github.io/courses/dist/maths2.html"
            
            },{
                name : "Linear Algebra III - MAT3701",
                duration:"6 months",
                degreeItlinksTo:"Bsc Mathematics",
                Link:"https://gugulethu-webdev.github.io/courses/dist/maths3.html"
            
            },{
                name : "Complex Analysis - MAT3705",
                duration:"6 months",
                degreeItlinksTo:"Bsc Mathematics",
                Link:"https://gugulethu-webdev.github.io/courses/dist/maths4.html"
            
            }
        ]

        return (   
                    <div class ="courseDetails">
                        <h1>Bsc Mathematics</h1>
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

export default MathsDegree;