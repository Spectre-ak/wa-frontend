import React from 'react';
import ReactDOM from 'react-dom';
import MaxResources from './MaxResources';
import SkillsCheckBox from './SkillsCheckBOX'
import $ from 'jquery';
import UserProfile from '../UserList'
import { render } from '@testing-library/react';
import Loader from '../Loader';

function doPostRequest(data,res) {
    ReactDOM.render(<Loader/>,document.getElementById("recommendationsResults"));

    $.ajax({
       // url: "http://localhost:8080/getV",
        url:"https://woay-backend.azurewebsites.net/recommendations",
        type: "post",
        data: (data),
        contentType: false,
        processData: false,
        success: function (response) {
            //console.log(response);
            //console.log(res);
            
//console.log(response["Senior"]!==undefined)

            //ReactDOM.render(<UserProfile data={res}/>,document.getElementById("engrResc"));
            var renderedData=[]; var data2=[];
            
            if(response["Senior"]!==undefined)
                data2=data2.concat(response["Senior"])

             //   renderedData.push(<UserProfile data={response["Senior"]}/>);

            if(response["Mid"]!==undefined)
            data2=data2.concat(response["Mid"])

             //   renderedData.push(<UserProfile data={response["Mid"]}/>);

            if(response["Junior"]!==undefined)
            data2=data2.concat(response["Junior"])

            //    renderedData.push(<UserProfile data={response["Junior"]}/>);

            if(response.length!==undefined)
                data2=data2.concat(response)

           //     renderedData.push(<UserProfile data={response}/>);
          //  console.log(renderedData)
            if(data2.length!==0)
                ReactDOM.render(<UserProfile data={data2}/>,document.getElementById("recommendationsResults"));
            else 
            ReactDOM.render(<a>No results found</a>,document.getElementById("recommendationsResults"));

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

// IL (2) ["Senior", "Mid"] 2021-06-09 


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
        this.getRecommendations = this.getRecommendations.bind(this)
    }


    render() {
        return (
            <div className="container">
                <h3>This will take user inputs and will provide best recommendations based on skills etc...</h3>

                {/* <br />
                <h5>Select Skills</h5>
                <SkillsCheckBox /> */}
                <br />

                <div class="form-group">

                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="asd">Product Location</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1Engr" value="option1"
                            ></input>
                        <label class="form-check-label" for="inliddndeRadio1">IL</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2UX" value="option2"
                             />
                        <label class="form-check-label" for="inlinefdfgRadio2">TX</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3PM" value="option3"
                             />
                        <label class="form-check-label" for="inlineRadgfdio3">AZ</label>
                    </div>
                </div>


                <br />
                <MaxResources />



                <br />
                <DateComponent />
                <br />

                <div style={{ textAlign: "center" }}>
                    <button className="btn btn-primary" onClick={this.getRecommendations}>
                        Get Recommendations
                    </button>
                </div>
                <hr />
                <div id="recommendationsResults">

                </div>


            </div>
        )
    }

    getRecommendations() {
        // var checkedBoxes = document.getElementById("skillsCheckBoxID");
        // var skills = [];
        // for (var i = 0; i <= 6; i++) {
        //     if (checkedBoxes.childNodes[i].childNodes[0].checked) {
        //         skills.push(checkedBoxes.childNodes[i].childNodes[1].innerHTML);
        //     }
        // }
        // console.log(JSON.stringify(skills));
        var location;
        if(document.getElementById("inlineRadio1Engr").checked==true){
            location="IL";
        }
        else if(document.getElementById("inlineRadio2UX").checked==true){
            location="TX";
        }
        else if(document.getElementById("inlineRadio3PM").checked==true){
            location="AZ";
        }

        var res=[];
        var allSele= document.getElementById("divFor");

        for (var i = 0; i <= allSele.childNodes.length; i++) {
            try{
                var selected=(allSele.childNodes[i].childNodes[0].childNodes[1].selectedIndex);
                if(selected===0)
                    res.push("Senior");
                else if(selected===1)
                    res.push("Mid");
                else res.push("Junior")
            }
            catch(E){
                continue;
            }
            console.log(res)
        }

        var data=new FormData();
        data.append("location",location);
        data.append("role",res);
        data.append("date",document.getElementById("prject-date-input").value);

        console.log(location,res,document.getElementById("prject-date-input").value)

        doPostRequest(data,res);
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