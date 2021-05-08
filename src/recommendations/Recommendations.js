import React from 'react';
import ReactDOM from 'react-dom';
import MaxResources from './MaxResources';
import SkillsCheckBox from './SkillsCheckBOX'
import $ from 'jquery';

function doPostRequest(data){
    $.ajax({
        url:"http://localhost:8080/getRecommendations",
       // url:"https://woay.azurewebsites.net/getRecommendations",
        type:"post",
        data:data,
        contentType:false,
        processData:false,
        success:function(response) {
            console.log(response);
             
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
	       console.log(textStatus,errorThrown);
	    }
    });
}

function DateComponent() {
    return (

        <div class="form-group row">
            <label for="example-date-input" class="col-2 col-form-label">Date by which resources needed</label>
            <div class="col-5">
                <input class="form-control" type="date" id="prject-date-input" />
            </div>
        </div>
    )
}

class Recommendations extends React.Component {
    constructor(props) {
        super(props);
        this.getRecommendations=this.getRecommendations.bind(this)
    }


    render() {
        return (
            <div className="container">
                <h3>This will take user inputs and will provide best recommendations based on skills etc...</h3>

                <br />
                <h5>Select Skills</h5>
                <SkillsCheckBox />
                <br />
                <MaxResources />
                <br />
                <DateComponent/>
                <br />

                <div style={{textAlign:"center"}}>
                    <button className="btn btn-primary"  onClick={this.getRecommendations}>
                        Get Recommendations
                    </button>
                </div>
                <hr/>
                <div id="recommendationsResults">

                </div>


            </div>
        )
    }

    getRecommendations(){
        var checkedBoxes=document.getElementById("skillsCheckBoxID");
        var skills=[];
        for(var i=0;i<=6;i++){
            if(checkedBoxes.childNodes[i].childNodes[0].checked){
                skills.push(checkedBoxes.childNodes[i].childNodes[1].innerHTML);
            }
        }
        console.log(JSON.stringify(skills));
        var resources=document.getElementById("ProjectInputIDRecommendations").innerHTML;
        console.log(resources)
        var date=document.getElementById("prject-date-input").value;
        console.log(date);

        var formdata=new FormData();
        formdata.append("skills",JSON.stringify(skills));
        formdata.append("resourcesDemand",resources);
        formdata.append("date",date);

        doPostRequest(formdata);
    }   
}

export default Recommendations;
/*

FROM node:alpine as builder
WORKDIR './app'
COPY package.json .
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

*/