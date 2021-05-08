import LoaderButton from '../LoaderButton';
import React from "react"
import ReactDOM from "react-dom"
import Loader from '../Loader';
import $ from 'jquery'
import UserProfile from '../UserList';

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
                console.log(res);
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
                console.log(res);
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
                console.log(res);
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
                console.log(res);
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
                        console.log(res[i])
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
                        console.log(res[i])
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
                        console.log(res[i])
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