import React from "react";

var courseInfomation = [
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
    },
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

},{
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

},{
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

},{
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
},{
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
},{
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
function Course(){
    return(
        <div id = "mainCourseContent">
            {courseInfomation.map((item)=>{
                return(
                    <div class ="courseDetails">
                        <h2><a href = {item.Link}>{item.name}</a></h2>
                        <br/>
                        <h3>
                            <span>Duration</span> : {item.duration}
                        </h3>
                        <h4>
                <span>Linked to</span><strong>: {item.degreeItlinksTo}</strong>
                        </h4>

                    </div>
                )
            })}
        </div>
    )
}

export default Course;