import React from 'react'
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import profile from './profile_picture.png'
import "@pathofdev/react-tag-input/build/index.css";
import { useState, Fragment } from "react";
import ProjectInput from './ProjectInput';

function pro(){
    return(
            <div className="container" style={{textAlign:"center"}}id="profile-update">
                <div className="container" >
                    <div className="row" >
                        <div className="col">
                            <img className="rounded-circle border border-secondary" src={profile} alt="Profile Picture" height={150}  width={150}/>
                            <h3>Name</h3>
                            <h6>Email</h6>
                            <br></br>
                            <h4>Skills</h4>
                            <div id="profile_skills"></div>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
    )

}

function checkCookie(){
    const ck=document.cookie.split(";");
    var fl=false;
    ck.forEach(element => {
        var cookoeAr=element.split("=");
        var cookieUser=cookoeAr[0];
        cookieUser=cookieUser.toString();
        console.log(cookieUser);
        
        if(cookieUser.includes("af88e4e6783735505auserID")){
          //window.location.href="http://localhost:3000/login";
          console.log("found");
          fl=true;
        }
        //alert("exe");
    });
    if(fl)
        return "true";
    else return "false";
  }
  //checkCookie();

function App() {
    const [tags, setTags] = React.useState(["html"])
    return (
        <ReactTagInput
            tags={tags}
            onChange={(newTags) => {
                const setArr = new Set(newTags);
                const newArr = [];
                for (const k in setArr.values()) {
                    //console.log(k);
                    newArr.push(k);
                }
                setArr.forEach(v => newArr.push(v));

                //console.log(setArr,newArr);
                setTags(newArr);
                // console.log(newTags)

            }}
        />
    )
}


class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        const res=checkCookie();
        console.log(res);
        if(res.includes("false")){
            //alert(res);
            //window.location.href="http://localhost:3000/login";
            window.location.href="https://woay.azurewebsites.net/login";
        }
        
    }

    render() {
        return (
            <div className="container">
                <pro/>
            </div>
        )
    }

}


const Ex = () => {
};

export default Profile;
