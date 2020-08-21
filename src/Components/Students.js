import React from "react";
import "./../index.css"


var studentDetails = 
[
    {
        Fornames:"Gugulethu Lwazi",
        Surname : "Mtshali",
        Email_Address :"mtshaliamo@gmail.com",
        Date_of_Birith:"12/02/1994",
        Degree_Link:"slovoro",
        First_Name:"Gugulethu",
        Full_Name:"Gugulethu Lwazi Mtshali"

    },
    {
        Fornames:"Amo Asemahle",
        Surname : "Selai",
        Email_Address :"amo@gmail.com",
        Date_of_Birith:"24/03/1994",
        Degree_Link:"",
        First_Name:"Amo",
        Full_Name:"Amo Asemahle Mtshali"

    },
    {
        Fornames:"Mapaseka Jane",
        Surname : "Selai",
        Email_Address :"jane@gmail.com",
        Date_of_Birith:"12/02/1996",
        Degree_Link:"",
        First_Name:"Mapaseka",
        Full_Name:"Mapaseka Jane Selai"

    },
    {
        Fornames:"Mxolisi Kwazi",
        Surname : "Mtshali",
        Email_Address :"mxo@gmail.com",
        Date_of_Birith:"21/09/1996",
        Degree_Link:"",
        First_Name:"Mxolisi",
        Full_Name:"Mxolisi Kwazi Mtshali"

    },
    {
        Fornames:"Thandazile Cynthia",
        Surname : "Mtshali",
        Email_Address :"thandi@gmail.com",
        Date_of_Birith:"12/12/1990",
        Degree_Link:"",
        First_Name:"Thandazile",
        Full_Name:"Thandazile Cynthia Mtshali"

    },
    {
        Fornames:"Zakhele Minenhle",
        Surname : "Ndamane",
        Email_Address :"mazaka@gmail.com",
        Date_of_Birith:"12/01/1998",
        Degree_Link:"",
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
class Students extends React.Component{

        render(){
            
            return(
              <div className = "container">
                  {studentDetails.map((item)=>{
                      return( 
                      <div className = "studentDetails">
                         <div className = "detail"> <span clssName = "labels">Forenames</span> : {item.Fornames}</div>
                         <div className = "detail"><span clssName = "labels">Surname</span> : {item.Surname}</div>
                         <div className = "detail" id = "email"><span clssName = "labels">Email Address</span> : {item.Email_Address}</div>
                         <div className = "detail"> <span clssName = "labels">Date of Birth</span> : {item.Date_of_Birith}</div>
                         <div className = "detail"> <span clssName = "labels">Degree Link</span> : <a href="#" id = "link">{item.Degree_Link}</a></div>
                         <div className = "detail"><span clssName = "labels">Firstname</span> : {item.First_Name}</div>
                         <div className = "detail"><span clssName = "labels">Fullname</span> : {item.Full_Name}</div>
                    </div>
                      )
                  })}
              </div>
            )
        }
}

export default Students;