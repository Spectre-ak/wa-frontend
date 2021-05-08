import React from 'react'
import "@pathofdev/react-tag-input/build/index.css";
import { useState, Fragment } from "react";


const ProjectInput = () => {

    const [inputFields, setInputFields] = useState([
        { projectName: "asd", startDate: "d", endDate: "asd" }

    ]);

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ projectName: "", startDate: "", endDate: "" });
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

        setInputFields(values);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("inputFields", inputFields);
    };

    return (
        <>
            <h1>projects</h1>
            <form onSubmit={handleSubmit}>
                <div className="">
                    {inputFields.map((inputField, index) => (
                        <Fragment key={`${inputField}~${index}`}>

                            <div class="form-group">

                                <label for="example-month-input" >Project Name</label>

                                <input class="form-control" type="text" name="projectName" value={inputField.projectName}
                                    id="projectName" onChange={event => handleInputChange(index, event)} />

                                <label for="example-month-input" >Start date</label>
                                <div className="col-12">
                                    <input class="form-control" type="month" name="startDate" id="startDate" value={inputField.startDate}
                                        id="start-month-input" onChange={event => handleInputChange(index, event)} />
                                </div>
                                <label for="example-month-input" >End date</label>
                                <div class="col-12">
                                    <input class="form-control" type="month" name="endDate" id="endDate" value={inputField.endDate}
                                        id="end-month-input" onChange={event => handleInputChange(index, event)} />
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label class="form-check-label" for="inlineRadio1">1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label class="form-check-label" for="inlineRadio2">2</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                    <label class="form-check-label" for="inlineRadio3">3</label>
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
                <div className="submit-button">
                    <button
                        className="btn btn-primary mr-2"
                        type="submit"
                        onSubmit={handleSubmit}
                    >
                        Save
                </button>
                </div>
                <br />
                <pre>
                    {JSON.stringify(inputFields, null, 2)}
                </pre>
            </form>
        </>
    );
};

export default function MaxResources() {
    return (
        <div>

            <ProjectInput />
            <h5>Max no of resources</h5>
            <br />

            <div class="form-check" id="maxNoOfResources">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    Below 3
                            </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label class="form-check-label" for="flexRadioDefault2">
                    Below 5
                            </label>

            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                <label class="form-check-label" for="flexRadioDefault3">
                    Above 5
                                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                <label class="form-check-label" for="flexRadioDefault3">
                    Above 5
                                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                <label class="form-check-label" for="flexRadioDefault3">
                    Above 5
                                </label>
            </div>
        </div>
    )
}