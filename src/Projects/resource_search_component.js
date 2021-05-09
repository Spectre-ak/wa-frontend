import React from "react"
import Loader from '../Loader'
import ReactDOM from "react-dom"
import $ from 'jquery'
import {m1,m2,m3,m4,m5,m6,m7,m8,f1,f2,f3,f4,f5,f6,f7,f8} from '../UserList';
import SeniorResource from './SeniorResource';
import JuniorResource from './JuniorResource';
import MidResource from './MidResource';
import EngrRole from './EngrRole';
import PmResource from './PmResource';
import UxResource from './UxResource';

function User(props){
    return(
        <div>
            <p>
             <img src={props.src} style={{borderRadius:"40px 40px 40px 40px",width:"40px",width:"40px"}} /> {props.data["Name"]}, <a>{props.data["Role"]}</a>,
             <a>{props.data["Role Level"]}</a>, <a>  {props.data["Location"]}</a> 
             <div> &nbsp;  </div>
            
            
                <p><a>Skills: {props.data["Skill 1"]} {props.data["Skill 2"]} {props.data["Skill 3"]} {props.data["Skill 4"]} </a></p> 
                
                <p>Product: {props.data["Product"]}, <a>Prod Build Location {props.data["Prod Build Location"]}</a>,
                <a>Prod Start Date: {props.data["Prod Start Date"]}</a>,  
                <a>Prod End Date: {props.data["Prod End Date"]}</a> </p>
                
                <p>Employee/ Contract: {props.data["E/C"]}</p>
                <p>Available for Other areas: {props.data["Available for Other areas"]}</p>
                <p>resource product start date: {props.data["resource product start date"]}</p>
                <p>resource product end date: {props.data["resource product end date"]}</p>
                <p> <a>Anchor: {props.data["Anchor"]} </a></p>  
                <p> <a>Work Intake Scoping: {props.data["Work Intake Scoping"]} </a></p>  
                <p> <a>Security Maven: {props.data["Work Intake Scoping"]} </a></p>

            
            </p>
        </div>
    )
}


function ViewInformationComp(props){
    return(
        <div className="container">
                <div className="row">
                    <div className="col">
                        <div id="resaurce_name">{props.Name}</div>
                        <div id="resource_role"> {props.Role}</div>
                        <div id="resource_role_level">{props.Role_level}</div>
                        <div id="resource_skills">{props.Skills}</div>
                    </div>
                    <div className="col">
                        <div id="resource_product_name">{props.Product_Name}</div>
                        <div id="resource_product_start_date">{props.Product_start_date}</div>
                        <div id="resource_product_end_date">{props.Product_end_date} </div>
                        <div id="resource_location">{props.location}</div>
                    </div>
                </div>
                
            </div>
    )
}
function doPostResource(prod){
    $.ajax({
        url:"https://woay-backend.azurewebsites.net/resources/"+prod,
        type:"get",
        success: function(res) {
            console.log(res);
            if(res["Resource "+prod]==="Does Not Exists"){
                res["Name"]="Does Not Exists";
            }
            //var productPart=res[0];
            var gender=res["Gender"];
            var male=[m1,m2,m3,m4,m5,m6,m7,m8];
            var female=[f1,f2,f3,f4,f5,f6,f7,f8];

            var imgSrc="";
            if(gender==="M"){
                imgSrc=male[Math.floor(Math.random() * 7)]
            }
            else{
                imgSrc=female[Math.floor(Math.random() * 7)]
            }

           ReactDOM.render(<User src={imgSrc} data={res}/>,document.getElementById("product_search_result_resc"));
        }
    });
}




class Resource_search_component extends React.Component{
    constructor(props){
        super(props);
        this.loadResour=this.loadResour.bind(this);
        this.vh1=this.vh1.bind(this);
        this.vh2=this.vh2.bind(this);
        this.vh3=this.vh3.bind(this);
        this.bh1=this.bh1.bind(this);
        this.bh2=this.bh2.bind(this);
        this.bh3=this.bh3.bind(this);
        
    }

    loadResour(){
        var no=document.getElementById("resource_id").value;if(no==="")return;
        console.log(no);
        ReactDOM.render(<Loader/>,document.getElementById("product_search_result_resc"));
        doPostResource(no);

    }

    componentDidMount(){
        
    }

    vh1(){
        ReactDOM.render(<SeniorResource/>,document.getElementById("pills-tabContent1"));
    }
    vh2(){
        ReactDOM.render(<MidResource/>,document.getElementById("pills-tabContent1"));
    }
    vh3(){
        ReactDOM.render(<JuniorResource/>,document.getElementById("pills-tabContent1"));
    }
    bh1(){
        ReactDOM.render(<EngrRole/>,document.getElementById("pills-tabContent2"));
    }
    bh2(){
        ReactDOM.render(<PmResource/>,document.getElementById("pills-tabContent2"));
    }
    bh3(){
        ReactDOM.render(<UxResource/>,document.getElementById("pills-tabContent2"));
    }
    render(){
        return(
            <div className="container">
                <div className="form-group">
                    <label for="resource_id"> Resource </label>
                    <input type="number" id="resource_id" min="1" max ="200"></input>
                    <button className="btn btn-primary" onClick={this.loadResour}>Submit</button>
                </div>
    
                    <div id="product_search_result_resc">

                    </div>
                    


                    <div class="row">
                        <div class="col">
                        <div className="container">
                        <br></br>
                        <h6>Role Level</h6>
                        <div className="container">
                            <ul  class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                                <li class="nav-item">
                                    <a class="nav-link active" onClick={this.vh1} id="pills-senior-tab" data-toggle="pill" href="#pills-senior" role="tab" aria-controls="pills-senior" aria-selected="true">Senior</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={this.vh2} id="pills-mid-tab" data-toggle="pill" href="#pills-mid" role="tab" aria-controls="pills-mid" aria-selected="false">Mid</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"  onClick={this.vh3} id="pills-junior-tab" data-toggle="pill" href="#pills-junior" role="tab" aria-controls="pills-junior" aria-selected="false">Junior</a>
                                </li>
                            </ul>
    
                            <div class="tab-content" id="pills-tabContent1">

                            </div>
                        </div>
                    </div>
                        </div>

                        <div class="col">
                        <div className="container" >
                        <h6>Roles</h6>
                        
                        <ul class="nav nav-pills mb-3" id="pills-tab4" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" onClick={this.bh1} id="pills-engr-tab" data-toggle="pill" href="#pills-engr" role="tab" aria-controls="pills-engr" aria-selected="true">Engr</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-pm-tab" onClick={this.bh2} data-toggle="pill" href="#pills-pm" role="tab" aria-controls="pills-pm" aria-selected="false">P.M.</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-ux-tab"  onClick={this.bh3} data-toggle="pill" href="#pills-ux" role="tab" aria-controls="pills-ux" aria-selected="false">U.X.</a>
                            </li>
                        </ul>
                         <div class="tab-content" id="pills-tabContent2">
                             
                        </div>     
    
                    </div>  
                        
                        </div>
                    
                    </div>



                    
    
                    
                        
    
    
                        
                    </div>
      
            
        )
    }
}

export default Resource_search_component;