import React from "react";



var lecturerDetails = 
[
    {
        Fornames:"Gugulethu Lwazi",
        Surname : "Mtshali",
        Email_Address :"mtshaliamo@gmail.com",
        Date_of_Birith:"12/02/1994",
        List_of_Degrees:"Applied Maths and Computer Science, Bsc Computer Science",
        First_Name:"Gugulethu",
        Full_Name:"Gugulethu Lwazi Mtshali"

    },
    {
        Fornames:"Jabulani Mjey",
        Surname : "Madonsela",
        Email_Address :"mjey@gmail.com",
        Date_of_Birith:"24/03/1994",
        List_of_Degrees:"Applied Maths and Computer Science, Bsc Computer Science",
        First_Name:"Jabulani",
        Full_Name:"Jabulani Mjey Madonsela"

    },
    {
        Fornames:"Pinini Jane",
        Surname : "Selaisami",
        Email_Address :"jane@gmail.com",
        Date_of_Birith:"12/02/1990",
        List_of_Degrees:"Applied Maths and Computer Science, Botanical Science",
        First_Name:"Pinini",
        Full_Name:"Pinini Jane Selaisami"

    },
    {
        Fornames:"Mxo Gorrila",
        Surname : "Mtshali",
        Email_Address :"g-man@gmail.com",
        Date_of_Birith:"21/09/1996",
        List_of_Degrees:"Applied Maths and Computer Science, Botanical Science",
        First_Name:"Mxolisi",
        Full_Name:"Mxolisi Gorrila Mtshali"

    },
    {
        Fornames:"Nomthandazo Thandy",
        Surname : "Zwane",
        Email_Address :"thandy@gmail.com",
        Date_of_Birith:"12/12/1969",
        List_of_Degrees:"BioChemistry, Botanical Science, Bsc Computer Science",
        First_Name:"Nomthandazo",
        Full_Name:"Nomthandazo Thandy Zwane"

    },
    {
        Fornames:"Mazaka Skholiwe",
        Surname : "Ndams",
        Email_Address :"skholiwe@gmail.com",
        Date_of_Birith:"12/01/1988",
        List_of_Degrees:"BioChemistry, Botanical Science, Bsc Computer Science",
        First_Name:"Zakhele",
        Full_Name:"Zakhele Minenhle Ndamane"

    },
    {
        Fornames:"Senamile Andy",
        Surname : "Nkwanyana",
        Email_Address :"andy@gmail.com",
        Date_of_Birith:"30/09/2000",
        List_of_Degrees:"BioChemistry, Botanical Science, Bsc Computer Science",
        First_Name:"Senamile",
        Full_Name:"Senamile Andy Nkwanyana"

    },
    {
        Fornames:"Andrew",
        Surname : "Adams",
        Email_Address :"andrew@gmail.com",
        Date_of_Birith:"13/01/2002",
        List_of_Degrees:"BioChemistry, Mechanical Science",
        First_Name:"Andrew",
        Full_Name:"Andrew Adamsa"

    },
    {
        Fornames:"Pieter Mtshilibe",
        Surname : "Genis",
        Email_Address :"pieter@gmail.com",
        Date_of_Birith:"24/05/2001",
        List_of_Degrees:"BioChemistry, Bsc Mathematics,  Mechanical Science, Physics Degree",
        First_Name:"Pieter",
        Full_Name:"Pieter Mtshilibe Genis"

    },
    {
        Fornames:"Star Ringo",
        Surname : "Naidoo",
        Email_Address :"star@gmail.com",
        Date_of_Birith:"20/09/1994",
        List_of_Degrees:"Bsc Mathematics, Mechanical Science, Physics Degree",
        First_Name:"Star",
        Full_Name:"Star Ringo Naidoo"

    },
    {
        Fornames:"James",
        Surname : "Rubert",
        Email_Address :"james@gmail.com",
        Date_of_Birith:"27/02/1991",
        List_of_Degrees:"Bsc Mathematics, Mechanical Science, Physics Degree",
        First_Name:"James",
        Full_Name:"James Rubert"

    },
    {
        Fornames:"Rassie Peter",
        Surname : "Erasmus",
        Email_Address :"rassie@gmail.com",
        Date_of_Birith:"12/12/1986",
        List_of_Degrees:"Bsc Mathematics , Mechanical Science, Physics Degree",
        First_Name:"Rassie",
        Full_Name:"Rassie Peter Erasmus"

    }
]
class Lecturers extends React.Component{

        render(){
            
            return(
              <div className = "container">
                  {lecturerDetails.map((item)=>{
                      return( 
                      <div className = "lecturerDetails">
                         <div className = "detail"> <span>Forenames</span> : {item.Fornames}</div>
                         <div className = "detail"> <span>Surname</span> : {item.Surname}</div>
                         <div className = "detail" id = "email"> <span>Email Address </span> : {item.Email_Address}</div>
                         <div className = "detail"> <span>Date of Birth</span> : {item.Date_of_Birith}</div>
                         <div className = "detail"><span> List of Degrees</span> : {item.List_of_Degrees}</div>
                         <div className = "detail"><span> Firstname</span> : {item.First_Name}</div>
                         <div className = "detail"><span> Fullname</span> : {item.Full_Name}</div>
                    </div>
                      )
                  })}
              </div>
            )
        }
}

export default Lecturers;
