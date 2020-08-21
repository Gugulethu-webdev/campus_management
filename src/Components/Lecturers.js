import React from "react";



var lecturerDetails = 
[
    {
        Fornames:"Gugulethu Lwazi",
        Surname : "Mtshali",
        Email_Address :"mtshaliamo@gmail.com",
        Date_of_Birith:"12/02/1994",
        List_of_Degrees:"",
        First_Name:"Gugulethu",
        Full_Name:"Gugulethu Lwazi Mtshali"

    },
    {
        Fornames:"Jabulani Mjey",
        Surname : "Madonsela",
        Email_Address :"mjey@gmail.com",
        Date_of_Birith:"24/03/1994",
        List_of_Degrees:"",
        First_Name:"jabulani",
        Full_Name:"Jabulani Mjey Madonsela"

    },
    {
        Fornames:"Pinini Jane",
        Surname : "Selaisami",
        Email_Address :"jane@gmail.com",
        Date_of_Birith:"12/02/1990",
        List_of_Degrees:"",
        First_Name:"Pinini",
        Full_Name:"Pinini Jane Selaisami"

    },
    {
        Fornames:"Mxo Gorrila",
        Surname : "Mtshali",
        Email_Address :"g-man@gmail.com",
        Date_of_Birith:"21/09/1996",
        List_of_Degrees:"",
        First_Name:"Mxolisi",
        Full_Name:"Mxolisi Gorrila Mtshali"

    },
    {
        Fornames:"Nomthandazo thandy",
        Surname : "Zwane",
        Email_Address :"thandy@gmail.com",
        Date_of_Birith:"12/12/1969",
        Degr:"",
        First_Name:"Nomt",
        Full_Name:"Thandazile Cynthia Mtshali"

    },
    {
        Fornames:"Mazaka Skholiwe",
        Surname : "Ndams",
        Email_Address :"skholiwe@gmail.com",
        Date_of_Birith:"12/01/1988",
        List_of_Degrees:"",
        First_Name:"Zakhele",
        Full_Name:"Zakhele Minenhle Ndamane"

    },
    {
        Fornames:"Sanele Phelelane",
        Surname : "Buthelezi",
        Email_Address :"sanele@gmail.com",
        Date_of_Birith:"30/09/2000",
        Degree_Link:"",
        First_Name:"Sanele",
        Full_Name:"Sanele Phelelane Buthelezi"

    },
    {
        Fornames:"Senamile Magugwana",
        Surname : "Buthelezi",
        Email_Address :"sena@gmail.com",
        Date_of_Birith:"13/01/2002",
        Degree_Link:"",
        First_Name:"Senamile",
        Full_Name:"Senamile Magugwana buthelezi"

    },
    {
        Fornames:"Emihle Asiphe",
        Surname : "Masondo",
        Email_Address :"emi@gmail.com",
        Date_of_Birith:"24/05/2001",
        Degree_Link:"",
        First_Name:"Emihle",
        Full_Name:"Emihle Asiphe Masondo"

    },
    {
        Fornames:"Owami Tubulo",
        Surname : "Maviso",
        Email_Address :"owami@gmail.com",
        Date_of_Birith:"20/09/2000",
        Degree_Link:"",
        First_Name:"Owami",
        Full_Name:"Owami Tubulo Mavuso"

    },
    {
        Fornames:"Nondumiso Fanelesbonge",
        Surname : "Mtshali",
        Email_Address :"ndumi@gmail.com",
        Date_of_Birith:"27/02/1991",
        Degree_Link:"",
        First_Name:"Nondumiso",
        Full_Name:"Nondumiso Fanelesbonge"

    },
    {
        Fornames:"Ayanda Zama",
        Surname : "Mtshali",
        Email_Address :"zama@gmail.com",
        Date_of_Birith:"12/12/1986",
        Degree_Link:"",
        First_Name:"Ayanda",
        Full_Name:"Ayanda Zama Mtshali"

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
                         <div className = "detail" id = "email"> <span>Email Address</span> : {item.Email_Address}</div>
                         <div className = "detail"> <span>Date of Birth</span> : {item.Date_of_Birith}</div>
                         <div className = "detail"><span> List of Degrees</span> : {item.Degree_Link}</div>
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
