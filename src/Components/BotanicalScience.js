import React from "react";

class BotanicalScience extends React.Component{

    render(){
        var courses = [
            {
                name : "Introduction to Medicinal Plants - BOT2605",
                duration:"6 months",
                degreeItlinksTo:"Botanical Science",
                Link:"https://gugulethu-webdev.github.io/courses/dist/bot1.html"
            
            },{
                name : "Plant Anatomy, Structure and Function - BOT2601",
                duration:"6 months",
                degreeItlinksTo:"Botanical Science",
                Link:"https://gugulethu-webdev.github.io/courses/dist/bot2.html"
            
            },{
                name : "Systematics of Vascular Plants - BOT2602",
                duration:"6 months",
                degreeItlinksTo:"Botanical Science",
                Link:"https://gugulethu-webdev.github.io/courses/dist/bot3.html"
            
            },{
                name : "Plant Physiology, Water Relations and Plant Nutrition - BOT2603",
                duration:"6 months",
                degreeItlinksTo:"Botanical Science",
                Link:"https://gugulethu-webdev.github.io/courses/dist/bot4.html"
            
            },{
                name : "Introduction to Medicinal Plants - BOT2605",
                duration:"12 months",
                degreeItlinksTo:"Botanical Science",
                Link:"https://gugulethu-webdev.github.io/courses/dist/bot5.html"
            
            }
        ]
        return(
        <div class ="courseDetails">
                <h1>Botanical Science</h1>
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
                   Lectured by : Pinini, Mxo, Nomthandazo, Mazaka & Senamile
               </h2>
               <hr/> 
        </div>
        )
    }
}

export default BotanicalScience;

