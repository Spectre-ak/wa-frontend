import React from "react"
import ReactDOM from "react-dom"
import f1 from './F/4.jpg';
import f2 from './F/6.jpg';
import f3 from './F/5.jpg';
import f4 from './F/7.jpg';
import f5 from './F/12.jpg';
import f6 from './F/13.jpg';
import f7 from './F/14.jpg';
import f8 from './F/15.jpg';

import m1 from './M/1.jpg';
import m2 from './M/2.jpg';
import m3 from './M/3.jpg';
import m4 from './M/8.jpg';
import m5 from './M/9.jpg';
import m6 from './M/10.jpg';
import m7 from './M/11.jpg';
import m8 from './M/16.jpg';
import { data } from "jquery";

// Accessibility: ""
// Anchor: "Y"
// Available for Other areas: "N"
// Color (Y/N): "Y"
// DevSecOps: ""
// E/C: "E"
// Education Track: ""
// Gender: "M"
// Interviewer: "Y"
// Location: "IL"
// Name: "Resource 3"
// Prod Build Location: "AZ"
// Prod End Date: "12/24/21"
// Prod Start Date: "01/24/21"
// Product: "Product 2"
// Role: "Engr"
// Role Level: "Senior"
// Security Maven: ""
// Skill 1: "Legacy Java"
// Skill 2: "Cloud "
// Skill 3: "IBM/Websphere"
// Skill 4: "Angular"
// Start Date: "01/01/18"
// Vendor: ""
// Work Intake Scoping: ""
// resource product end date: "12/24/21"
// resource product start date: "01/24/21"

function User(props){
    return(
        <div>
            <p>
             <img src={props.src} style={{borderRadius:"40px 40px 40px 40px",width:"40px",width:"40px"}} /> {props.data["Name"]}, <a>{props.data["Role"]}</a>,
             <a>{props.data["Role Level"]}</a>, <a>  {props.data["Location"]}</a> 
             <div> &nbsp;  </div>
            
            <details><summary style={{outline: "none"}}>Read More</summary>
                <p><a>Skills: {props.data["Skill 1"]} {props.data["Skill 2"]} {props.data["Skill 3"]} {props.data["Skill 4"]} </a></p> 
                
                <p>Product: {props.data["Product"]}, <a>Prod Build Location {props.data["Prod Build Location"]}</a>,
                <a>Prod Start Date: {props.data["Prod Start Date"]}</a>,  
                <a>Prod End Date: {props.data["Prod End Date"]}</a> </p>
                
                <p>Employee/ Contract: {props.data["E/C"]}</p>
                <p>Available for Other areas: {props.data["Available for Other areas"]}</p>
                <p>resource product start date: {props.data["resource product start date"]}</p>
                <p>resource product end date: {props.data["resource product end date"]}</p>
                <p> <a>Anchor: {props.data["Anchor"]} </a></p>
                
            </details>
            </p>
        </div>
    )
}

class UserProfile extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        var male=[m1,m2,m3,m4,m5,m6,m7,m8];
        var female=[f1,f2,f3,f4,f5,f6,f7,f8];

        console.log(this.props.data);
        var userArr=this.props.data;
        var counter=1;

        var users=[];
        userArr.forEach(element => {
            var gender=element["Gender"];
            var imgSrc="";
            if(gender==="M"){
                imgSrc=male[Math.floor(Math.random() * 7)]
            }
            else{
                imgSrc=female[Math.floor(Math.random() * 7)]
            }
            counter++;
            users.push(<User src={imgSrc} data={element} key={counter}/>)
        });

        ReactDOM.render(users,document.getElementById("userDetailsGame"));
        
    }

    render(){
        return(
            <div id="userDetailsGame">

            </div>
        )
    }
}

export default UserProfile;
export {m1,m2,m3,m4,m5,m6,m7,m8,f1,f2,f3,f4,f5,f6,f7,f8};