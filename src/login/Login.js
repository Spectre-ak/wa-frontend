import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import LoaderButtom from '../LoaderButton';
import Loader from '../Loader';

function CreateCookie(userID,imgUrl){
    document.cookie = "af88e4e6783735505auserID="+userID+"; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
    document.cookie = "img="+imgUrl+"; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
    window.location.href="https://woay-backend.azurewebsites.net/profile";
}
function checkCookie(){
    const ck=document.cookie.split(";");
    ck.forEach(element => {
        var cookoeAr=element.split("=");
        var cookieUser=cookoeAr[0];
        cookieUser=cookieUser.toString();
        console.log(cookieUser);
        
        if(cookieUser.includes("af88e4e6783735505auserID")){
            console.log("found");
            return true;
        }
        //alert("exe");
    });
   
    return false;
  }

function doPost(data) {
    
    $.ajax({
        url:"https://woay-backend.azurewebsites.net/signInGoogle",
        type:"post",
        data:data,
        contentType:false,
        processData:false,
        success:function(response) {
            console.log(response);
            try{
                ReactDOM.render(<div>Create Account</div>,document.getElementById("createAccButton"));
            }
            catch(e){
                try{
                    ReactDOM.render(<div>Login</div>,document.getElementById("accLoginButton"));
                }
                catch(e1){
                    
                }
            }
            if(response==="email_in_use")
                document.getElementById("msg").innerHTML="Email Id is already in use";
            else if(response==="user_invalid")
                document.getElementById("msg").innerHTML="Email or password incorrect";  
            else
                CreateCookie(response);
                try{
                    ReactDOM.render(<h3>Sign In/Up</h3>,document.getElementById("googleLoader"));
                }catch(e){}
                
            
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
	       console.log(textStatus,errorThrown);
	    }
    });
}


class LoginBaseContainer extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {
        const res=checkCookie();
        if(res){
            window.location.href="https://woay-backend.azurewebsites.net/profile";
        }
        else    
            ReactDOM.render(<Login />, document.getElementById("loginContainer"));
    }
    render() {
        return (
            <section style={{ marginTop: "10%" }}>
                <div class="container" >
                    <div class="row justify-content-center" id="loginContainer">

                    </div>
                </div>
            </section>
        )
    }
}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onClickGsignIn = this.onClickGsignIn.bind(this);
        this.onNormalLogin = this.onNormalLogin.bind(this);
        
    }
    onClickGsignIn() {
        const name = document.getElementById("credName").innerHTML;
        const profileUrl = document.getElementById("credProfileurl").innerHTML;
        const emailID = document.getElementById("credEmailId").innerHTML;
        console.log(name,profileUrl,emailID);
        if(emailID===undefined || emailID===null){
            document.getElementById("msg").innerHTML="Cannot use this email id";
            return;
        }
        var data=new FormData();
        data.append("type","gsign");
        data.append("name",name);  document.cookie = "name="+name+"; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
        data.append("profilePicLink",profileUrl); document.cookie = "img="+profileUrl+"; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
        data.append("email",emailID); document.cookie = "img="+emailID+"; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
        data.append("pass","gsign");
        doPost(data);
        ReactDOM.render(<Loader/>,document.getElementById("googleLoader"));
    }
    
    onNormalLogin() {
        ReactDOM.render(<SimpleLogin />, document.getElementById("loginContainer"));
    }
    componentDidMount(){
        document.getElementById("signinupform").addEventListener("submit",(e)=>{
            e.preventDefault();
            const name=e.target.name.value;
            const email=e.target.email.value;
            const pass=e.target.pass.value;
            const passCnf=e.target.cnfPass.value;
            if(pass!==passCnf){
                document.getElementById("msg").innerHTML="Passwords does not match";
                return;
            }
            var data=new FormData();
            data.append("type","accCreate");
            data.append("name",name);
            data.append("pass",pass);
            data.append("email",email);
            data.append("profilePicLink","prolink");
            ReactDOM.render(<LoaderButtom/>,document.getElementById("createAccButton"));
            doPost(data);
        });
        document.getElementById("googleJjSmVgyd0p3pXB1rRibZUAYo").addEventListener("click",(e)=>{
            this.onClickGsignIn();
        });
    }
    render() {
        return (
            <div class="col-12 col-md-8 col-lg-8 col-xl-6" >
                <div class="row">
                    <div class="col text-center">
                        <div id="googleLoader">
                        <h3>Sign In/Up</h3>
                        </div>
                        

                        <div class="g-signin2" data-onsuccess="onSignIn"></div>
                    </div>
                </div>
                <form id="signinupform">
                    <div class="row align-items-center">
                        <div class="col mt-4">
                            <input type="text" class="form-control" name="name" id="fullName" placeholder="Full Name" required />
                        </div>
                    </div>
                    <div class="row align-items-center mt-4">
                        <div class="col">
                            <input type="email" id="email" class="form-control" name="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div class="row align-items-center mt-4">
                        <div class="col">
                            <input type="password" class="form-control" id="pass" name="pass" placeholder="Password" required />
                        </div>
                        <div class="col">
                            <input type="password" class="form-control" id="cnfPass" name="cnfPass" placeholder="Confirm Password" required />
                        </div>
                    </div>
                    <div class="row justify-content-start mt-4">
                        <div class="col">

                            <p id="msg"></p>
                            <button class="btn btn-primary mt-4" id="createAccButton">Create Account</button>
                            <button class="btn btn-primary mt-4" onClick={this.onNormalLogin} style={{ marginLeft: "6px" }}>Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    
}

class SimpleLogin extends React.Component {
    constructor(props) {
        super(props);
        this.backToLoginComponent = this.backToLoginComponent.bind(this);

    }
    backToLoginComponent() {
        window.location.href = "https://woay-backend.azurewebsites.net/login";
        // window.location.href="https://";
    }
    componentDidMount() {
        document.getElementById("defLogInForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const emailID = document.getElementById("email").value;
            const pass = document.getElementById("pass").value;
            console.log(emailID, pass);
            var data=new FormData();
            data.append("type","defLogin");
            data.append("email",emailID);
            data.append("pass",pass);
            //data.append("name","name");
            //data.append("profilePicLink","");
            ReactDOM.render(<LoaderButtom/>,document.getElementById("accLoginButton"));
            doPost(data);
        });
    }
    render() {
        return (
            <div class="col-12 col-md-8 col-lg-8 col-xl-6" >
                <div class="row">
                    <div class="col text-center">
                        <h3>Login</h3>

                    </div>
                </div>
                <form id="defLogInForm">
                    <div class="row align-items-center mt-4">
                        <div class="col">
                            <input type="email" id="email" class="form-control" placeholder="Email" required />
                        </div>
                    </div>
                    <div class="row align-items-center mt-4">
                        <div class="col">
                            <input type="password" class="form-control" id="pass" placeholder="Password" required />
                        </div>
                    </div>
                    <div class="row justify-content-start mt-4">
                        <div class="col">

                            <p id="msg"></p>
                            <button class="btn btn-primary mt-4" onClick={this.backToLoginComponent}>Back</button>
                            <button class="btn btn-primary mt-4" id="accLoginButton" style={{ marginLeft: "6px" }}>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default LoginBaseContainer;
