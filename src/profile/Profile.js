import React from 'react'
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { useState, Fragment } from "react";
import ProjectInput from './ProjectInput';
import profile from './profile_picture.png'



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
            window.location.href="http://localhost:3000/login";
        }

        var ck=document.cookie.split(";");
        console.log(ck);
        
    }

    render() {
        return (
            <div className="container">
                <br/><br></br>
                
            <div className="container" id="profile-update">
                <div className="container">
                    <div className="row" >
                        <div  className="col">
                            <img className="rounded-circle border border-secondary" src={profile} alt="Profile Picture" height={100}  width={100}/>
                            <h3><a>Name</a></h3>
                            <a>Email</a>
                        </div>
                        <br></br>
                        <div className="col">
                            <h3>Skills</h3>
                            <div> <App/> </div>
                        </div>
                    </div>
                </div>
               
                
        </div>
                

            </div>
        )
    }

}


const Ex = () => {
};

export default Profile;
