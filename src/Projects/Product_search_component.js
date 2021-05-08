import { render } from "@testing-library/react";
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
                <div class="row">
                    <div class="col">
                        <p>Project buuld location: {props.full["Prod Build Location"]}</p>
                        <p>Product Start DateL: {props.full["Prod Start Date"]}</p>
                        <p>Product End DateL: {props.full["Prod End Date"]}</p>

                        
                    </div>

                    <div class="col">
                        
                    <UserProfile data={props.pro}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


function makePost(prod){
    $.ajax({
        url:"https://woay-backend.azurewebsites.net/projects/"+prod,
        type:"get",
        success: function(res) {
            console.log(res);
            var productPart=res[0];
            ReactDOM.render(<ProjectDisplay name={productPart["Product"]} full={productPart} pro={res[1]}/>,document.getElementById("product_search_result"));
        }


    });
}


class Product_search_component  extends React.Component{
    constructor(props){
        super(props);
        this.getRes=this.getRes.bind(this);
    }

    getRes(){
        ReactDOM.render(<Loader/>,document.getElementById("product_search_result"));
        var product=0;
        var no=document.getElementById("product_list");
        for(var i=0;i<=no.childNodes.length;i++){
            try{
                //console.log(no.childNodes[i].childNodes[0])
                if(no.childNodes[i].childNodes[0].checked==true){
                    product=(no.childNodes[i].childNodes[1].innerHTML);
                }
            }
            catch(e){

            }
            
        }
        try{
            product=product.split(" ")[1];
            console.log(product)
            makePost(product);
        }
        catch(e){

        }
       
    }
    
    render(){
        return(
            <div  id="product_list" className="form-check container">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Product 1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">Product 2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label class="form-check-label" for="inlineRadio3">Product 3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option1"/>
                    <label class="form-check-label" for="inlineRadio4">Product 4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option1"/>
                    <label class="form-check-label" for="inlineRadio5">Product 5</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option1"/>
                    <label class="form-check-label" for="inlineRadio6">Product 6</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option1"/>
                    <label class="form-check-label" for="inlineRadio7">Product 7</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option1"/>
                    <label class="form-check-label" for="inlineRadio8">Product 8</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" value="option1"/>
                    <label class="form-check-label" for="inlineRadio9">Product 9</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" value="option1"/>
                    <label class="form-check-label" for="inlineRadio10">Product 10</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio11" value="option1"/>
                    <label class="form-check-label" for="inlineRadio11">Product 11</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio12" value="option1"/>
                    <label class="form-check-label" for="inlineRadio12">Product 12</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio13" value="option1"/>
                    <label class="form-check-label" for="inlineRadio13">Product 13</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio14" value="option1"/>
                    <label class="form-check-label" for="inlineRadio14">Product 14</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio15" value="option1"/>
                    <label class="form-check-label" for="inlineRadio15">Product 15</label>
                </div>
                <br></br>
                <div style={{textAlign:"center"}}><button className="btn btn-primary" onClick={this.getRes}>Submit</button></div>
             
                
                <div id="product_search_result">

                </div>
            </div>
        )
    }
}

export default Product_search_component;
