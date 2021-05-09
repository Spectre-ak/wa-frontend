import React from "react"
import ReactDOM from "react-dom"
import $ from 'jquery'
import Loader from "../Loader";

function ProjectDisplay2(props){
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


class ProjectDisplayList2 extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var arr=this.props.data;
        var eles=[];
        var ci=1;
       // console.log(arr);
        alert(arr);
        arr.forEach(element => {
           // console.log(element);
            eles.push(<ProjectDisplay2 name={element["Product"]} full={element} key={ci}/>);ci++;
        });

        ReactDOM.render(eles,document.getElementById("DivIdHolder"));
       // ReactDOM.render(<a>Submit</a>,document.getElementById("loaderBse"));
    }
    render(){
        return(
            <div id="DivIdHolder">
cv
            </div>
        )
    }
}


function make(start1,start2){
    console.log(start1,start2);
    
    $.ajax({
        //url: "http://localhost:8080/getRecommendations",
        url:"https://woay-backend.azurewebsites.net/projects?startDate="+start1+"&endDate="+start2,
        type: "get",
        
        success: function (response) {
            //console.log(response);
           // ReactDOM.render(<ProjectDisplayList2 data={response}/>,document.getElementById("resultDiv"));

            var eles=[];
            var ci=1;
           
            response.forEach(element => {
                //console.log(element);
                eles.push(<ProjectDisplay2 name={element["Product"]} full={element} key={ci}/>);ci++;
            });

            ReactDOM.render(eles,document.getElementById("resultDiv"));


        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });

}

class Product_search_date_component extends React.Component{
    constructor(props){
        super(props);
        this.hal=this.hal.bind(this);
    }
    hal(){
        //document.getElementById("resultDiv").innerHTML="";
        make(document.getElementById('date1').value,document.getElementById('date2').value)
        ReactDOM.render(<Loader/>,document.getElementById("resultDiv"));
    }
    render(){
        return(
            <div>
                <div className="container">
                    <label> Project Start Date: </label>
                    <input className="form-row-group" type="date" id="date1"></input>
    
                    <label>  Project End Date: </label>
                    <input className="form-row-group" type="date" id="date2"></input>
    
                    
                    <div id="product_search_date">
                    <div style={{textAlign:"center"}}>
                        
                        <button className="btn btn-primary" onClick={this.hal}>Submift</button></div>
                    </div>
    
                    <div id="resultDiv">
    
                    </div>
                </div>
            </div>
            
            
            
        )
    }
}

export default Product_search_date_component;