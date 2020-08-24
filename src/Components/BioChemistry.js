import React from "react";


class BioChemistry extends React.Component{
    render(){
        var courses = [
            {
                name : "Introductory Biochemistry - BCH2601",
                duration:"6 months",
                degreeItlinksTo:"Biochemistry",
                Link:"https://gugulethu-webdev.github.io/courses/dist/bio1.html"
            
            },{
                name : "Bioenergetics - BCH2602",
                duration:"6months",
                degreeItlinksTo:"Biochemistry",
                Link:"https://gugulethu-webdev.github.io/courses/dist/bio2.html"
            
            },{
                name : "Biopolymers of Heredity - BCH2603",
                duration:"6 months",
                degreeItlinksTo:"Biochemistry",
                Link:"https://gugulethu-webdev.github.io/courses/dist/bio3.html"
            
            },{
                name : "Biochemistry (Practical) - BCH2604",
                duration:"6 months",
                degreeItlinksTo:"Biochemistry",
                Link:"https://gugulethu-webdev.github.io/courses/dist/bio4.html"
            
            },{
                name : "Enzymology - BCH3701",
                duration:"6 months",
                degreeItlinksTo:"Biochemistry",
                Link:"https://gugulethu-webdev.github.io/courses/dist/bio5.html"
            
            }
        ]
        return (    
            <div class ="courseDetails">
                <h1>BioChemistry</h1>
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
                   Lectured by : Nomthandazo, Mazaka, Andrew & Pieter
               </h2>
               <hr/>
</div>
)

}
}
export default BioChemistry;