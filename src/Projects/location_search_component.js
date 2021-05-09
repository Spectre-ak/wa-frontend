import LoaderButton from '../LoaderButton';
import React from "react"
import ReactDOM from "react-dom"
import Loader from '../Loader';
import $ from 'jquery'
import {m1,m2,m3,m4,m5,m6,m7,m8,f1,f2,f3,f4,f5,f6,f7,f8} from '../UserList';

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

      //  console.log(this.props.data);
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
        //console.log(users)
        ReactDOM.render(users,document.getElementById("userDetailsGame"));
        
    }

    render(){
        return(
            <div id="userDetailsGame">

            </div>
        )
    }
}


function ProjectDisplay(props){
    return(
        <div>
            <h5>{props.name}</h5>
            <div class="container">
                <p>Project buuld location: {props.full["Prod Build Location"]}</p>
                <p>Product Start DateL: {props.full["Prod Start Date"]}</p>
                <p>Product End DateL: {props.full["Prod End Date"]}</p>

                        
            </div>
        </div>
    )
}


class ProjectDisplayList extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var arr=this.props.data;
        var eles=[];
        arr.forEach(element => {
            eles.push(<ProjectDisplay name={element["Product"]} full={element}/>)
        });

        ReactDOM.render(eles,document.getElementById("DivIdHolder"));
       // ReactDOM.render(<a>Submit</a>,document.getElementById("loaderBse"));
    }
    render(){
        return(
            <div id="DivIdHolder">

            </div>
        )
    }
}

function procce(){

}

function doPost(locationIndex,type){
    if(locationIndex==="All" && type==="resources"){
        $.ajax({
            url:"https://woay-backend.azurewebsites.net/all",
            type:"get",
            success: function(res) {
                //console.log(res);
                var productPart=res[0];
                ReactDOM.render(<UserProfile data={res}/>,document.getElementById("locationBasedResults"));
            }
        });
    }
    
    else if(locationIndex==="AZ" && type==="resources"){
        $.ajax({
            url:"https://woay-backend.azurewebsites.net/all",
            type:"get",
            success: function(res) {
                //console.log(res);
                var filteredRes=[];
                res.forEach(element => {
                    if(element["Location"]==="AZ")
                        filteredRes.push(element);
                });
                var productPart=res[0];
                ReactDOM.render(<UserProfile data={filteredRes}/>,document.getElementById("locationBasedResults"));
            }
        });
    }
    else if(locationIndex==="IL" && type==="resources"){
        $.ajax({
            url:"https://woay-backend.azurewebsites.net/all",
            type:"get",
            success: function(res) {
               // console.log(res);
                var filteredRes=[];
                res.forEach(element => {
                    if(element["Location"]==="IL")
                        filteredRes.push(element);
                });
                var productPart=res[0];
                ReactDOM.render(<UserProfile data={filteredRes}/>,document.getElementById("locationBasedResults"));
            }
        });
    }
    else if(locationIndex==="TX" && type==="resources"){
        $.ajax({
            url:"https://woay-backend.azurewebsites.net/all",
            type:"get",
            success: function(res) {
              //  console.log(res);
                var filteredRes=[];
                res.forEach(element => {
                    if(element["Location"]==="TX")
                        filteredRes.push(element);
                });
                var productPart=res[0];
                ReactDOM.render(<UserProfile data={filteredRes}/>,document.getElementById("locationBasedResults"));
            }
        });
    }
    else if(locationIndex==="TX" && type==="products"){
        $.ajax({
            url:"https://woay-backend.azurewebsites.net/projects/",
            type:"get",
            success: function(res) {
                //console.log(res);
                var arr=[];
                for(var i=1;i<17;i++){
                    if(res[i]["Prod Build Location"]==="TX"){
                        arr.push(res[i]);
                        //console.log(res[i])
                    }
                }
                ReactDOM.render(<ProjectDisplayList data={arr}/>,document.getElementById("locationBasedResults"));
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                console.log(textStatus,errorThrown);
             }
        });

        
    }
    else if(locationIndex==="AZ" && type==="products"){
        $.ajax({
            url:"https://woay-backend.azurewebsites.net/projects/",
            type:"get",
            success: function(res) {
                //console.log(res);
                var arr=[];
                for(var i=1;i<17;i++){
                    if(res[i]["Prod Build Location"]==="AZ"){
                        arr.push(res[i]);
                        //console.log(res[i])
                    }
                }
                ReactDOM.render(<ProjectDisplayList data={arr}/>,document.getElementById("locationBasedResults"));
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                console.log(textStatus,errorThrown);
             }
        });
    }
    else if(locationIndex==="IL" && type==="products"){
        $.ajax({
            url:"https://woay-backend.azurewebsites.net/projects/",
            type:"get",
            success: function(res) {
                //console.log(res);
                var arr=[];
                for(var i=1;i<17;i++){
                    if(res[i]["Prod Build Location"]==="IL"){
                        arr.push(res[i]);
                        //console.log(res[i])
                    }
                }
                ReactDOM.render(<ProjectDisplayList data={arr}/>,document.getElementById("locationBasedResults"));
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                console.log(textStatus,errorThrown);
             }
        });

    }
    else if(locationIndex==="All" && type==="products"){

        $.ajax({
            url:"https://woay-backend.azurewebsites.net/projects/",
            type:"get",
            success: function(res) {
                //console.log(res);

                ReactDOM.render(<ProjectDisplayList data={res}/>,document.getElementById("locationBasedResults"));
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                console.log(textStatus,errorThrown);
             }
        });

        
    }

}
class Location_search_component extends React.Component{
    constructor(propos){
        super(propos);
        this.submit=this.submit.bind(this);
    }

    submit(){
        var locationIndex=(document.getElementById("location").selectedIndex);
        var type=(document.getElementById("type").selectedIndex);
        
        locationIndex=["All","AZ","IL","TX"][locationIndex];
        type=["resources","products"][type];

        console.log(locationIndex,type);
        ReactDOM.render(<Loader/>,document.getElementById("locationBasedResults"));
        //ReactDOM.render(<a>wait</a>,document.getElementById("loaderBse"));
        doPost(locationIndex,type);
    }

    render(){
        return(
            <div className="container">
                <div class="form-group">
                    <label className="w-50" for="exampleFormControlSelect1">Select Location</label>
                    <select class="form-control" id="location">
                        <option>All</option>
                        <option>AZ</option>
                        <option>IL</option>
                        <option>TX</option>
                    </select>
                    <label for="exampleFormControlSelect1">Select Resource/Product</label>
                    <select class="form-control" id="type">
                        <option>Resources</option>
                        <option>Products</option>
                    </select>
                    <div style={{textAlign:"center"}}>
                        
                        <button className="btn btn-primary" id="loaderBse" onClick={this.submit}>Submit</button></div>

                </div>

                <div id="locationBasedResults">

                </div>
            </div>
            
            
            
        )
    }
}

export default Location_search_component;