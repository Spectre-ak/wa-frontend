import React from 'react'
import "@pathofdev/react-tag-input/build/index.css";
import { useState, Fragment } from "react";


const ProjectInput = () => {
    var currHack=document.createElement("pre");
    currHack.id="ProjectInputIDRecommendations";currHack.style.display="none";
    document.body.appendChild(currHack);
    const [inputFields, setInputFields] = useState([
        {
            junior: false, mid: false, senior: false,
            engr:false,ux:false,pm:false
        }
        
    ]);

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({
            junior: false, mid: false, senior: false,
            engr:false,ux:false,pm:false
        });
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "projectName") {
            values[index].projectName = event.target.value;
        }
        else if (event.target.name === "startDate") {
            values[index].startDate = event.target.value;
        }
        else if (event.target.name === "endDate") {
            values[index].endDate = event.target.value;
        }
        else if (event.target.id === "inlineRadio1") {
            values[index].junior = true;
            values[index].mid = false;
            values[index].senior = false;
        }
        else if (event.target.id === "inlineRadio2") {
            values[index].mid = true;
            values[index].senior = false;
            values[index].junior = false;
        }
        else if (event.target.id === "inlineRadio3") {
            values[index].senior = true;
            values[index].junior = false;
            values[index].mid = false;
        }
        else if (event.target.id === "inlineRadio1Engr") {
            values[index].engr = true;
            values[index].pm = false;
            values[index].ux = false;
        }else if (event.target.id === "inlineRadio2UX") {
            values[index].ux = true;
            values[index].pm = false;
            values[index].engr = false;
        }else if (event.target.id === "inlineRadio3PM") {
            values[index].pm = true;
            values[index].engr = false;
            values[index].ux = false;
        }
        setInputFields(values);
        console.log("inputFields", inputFields);
        var currHack=document.getElementById("ProjectInputIDRecommendations");
        //currHack.id="ProjectInputIDRecommendations";currHack.style.display="none";
        currHack.innerHTML=JSON.stringify(inputFields);
        
    
    };

    const handleSubmit = e => {
        e.preventDefault();
        
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <h5>Add Number of Resources based on role and level</h5>
            
                <div className="">
                    {inputFields.map((inputField, index) => (
                        <Fragment key={`${inputField}~${index}`}>

                            <div class="form-group">

                                <div class="form-check form-check-inline">
                                    <label class="form-check-label" for="asd">Product Location</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1Engr" value="option1"
                                        onChange={event => handleInputChange(index, event)} value={inputField.engr} ></input>
                                    <label class="form-check-label" for="inliddndeRadio1">IL</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2UX" value="option2"
                                        onChange={event => handleInputChange(index, event)} value={inputField.ux} />
                                    <label class="form-check-label" for="inlinefdfgRadio2">TX</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3PM" value="option3"
                                        onChange={event => handleInputChange(index, event)} value={inputField.pm} />
                                    <label class="form-check-label" for="inlineRadgfdio3">AZ</label>
                                </div>
                            </div>

                            <div>
                            
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label" for="asd">Role level</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1"
                                        onChange={event => handleInputChange(index, event)} value={inputField.junior} ></input>
                                    <label class="form-check-label" for="inliddndeRadio1">Junior</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2"
                                        onChange={event => handleInputChange(index, event)} value={inputField.mid} />
                                    <label class="form-check-label" for="inlinefdfgRadio2">Mid</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="option3"
                                        onChange={event => handleInputChange(index, event)} value={inputField.senior} />
                                    <label class="form-check-label" for="inlineRadgfdio3">Senior</label>
                                </div>
                            </div>



                            <div className="form-group col-sm-2">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    onClick={() => handleRemoveFields(index)}
                                >
                                    -
                      </button>
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    onClick={() => handleAddFields()}
                                >
                                    +
                      </button>
                            </div>


                        </Fragment>
                    ))}
                </div>
                
                <br />
                <pre>
                    {JSON.stringify(inputFields)}
                </pre>
                </form>
        </>
    );
};

export default function MaxResources() {
    return (
        <div>

            <ProjectInput />

        </div>
    )
}