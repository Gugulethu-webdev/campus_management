import React from "react";
import AppliedMathsandComputerScience from "./AppliedMaths and Computer Science";
import BioChemistry from "./BioChemistry";
import BotanicalScience from "./BotanicalScience";
import ComputerScience from "./ComputerScience";
import MathsDegree from "./MathsDgree";
import MechanicalScience from "./MechanicalScience";
import PhysicsDegree from './PhysicsDegree';

//import Course from "./Course"

class Degrees extends React.Component{
        
        render(){
            
            return(
                <div id = "mainCourseContent">
                    <AppliedMathsandComputerScience/>
                    <BioChemistry/>
                    <BotanicalScience/>
                    <ComputerScience/>
                    <MathsDegree/>
                    <MechanicalScience/>
                    <PhysicsDegree/>
                </div>
                
            )
        }
}

export default Degrees;