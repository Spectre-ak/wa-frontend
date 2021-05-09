import React from 'react';
import ReactDOM from 'react-dom';
import MaxResources from './MaxResources';
import SkillsCheckBox from './SkillsCheckBOX'
import $ from 'jquery';

function doPostRequest(data) {
    $.ajax({
        url: "http://localhost:8080/getV",
       // url:"https://woay-backend.azurewebsites.net/recommendations",
        type: "post",
        data: (data),
        contentType: false,
        processData: false,
        success: function (response) {
            console.log(response);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
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
                        <label class="form-check-label" for="inliddndeRadio1Engr">IL</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2UX" value="option2"
                             />
                        <label class="form-check-label" for="inlinefdfgRadio2UX">TX</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3PM" value="option3"
                             />
                        <label class="form-check-label" for="inlineRadgfdio3PM">AZ</label>
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

        doPostRequest(data);
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
