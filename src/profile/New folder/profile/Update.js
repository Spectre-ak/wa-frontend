import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './Profile';

import profile from './profile_picture.png'
import "@pathofdev/react-tag-input/build/index.css";

import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import { useState, Fragment } from "react";
  

function App() {
    const [tags, setTags] = React.useState(["html"])
    return (
        <ReactTagInput
            tags={tags}
            onChange={(newTags) => {
                const setArr=new Set(newTags);
                const newArr=[];
                for (const k in setArr.values()) {
                    //console.log(k);
                    newArr.push(k);
                }
                setArr.forEach(v => newArr.push(v));

                //console.log(setArr,newArr);
                setTags(newArr); 
               // console.log(newTags)

            }}
        />
    )
}



class Update extends React.Component {
    constructor(props) {
        super(props);
        this.back=this.back.bind(this);
        this.saveNewData=this.saveNewData.bind(this);

    }

    render() {
        return (
            <div className="container" id="ind" style={{color:"white",backgroundColor:"black"}}>
            <form>
                <div className="form-row" id="u_top_div">

                <div class="container">
                    <div class="row">
                        <div class="col">
                        <img  className="rounded-circle border border-secondary" src={profile} alt="Profile Picture" height={100}  width={100}/>
                            
                            <p>User Email</p>
                        
                            <input className="form-control border border-primary" type="" name="name" placeholder="name" ></input> 
                        <hr/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text">Short Bio</span>
                            </div>
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                                </div>
                        </div>
                        <div class="col">
                        <h5>Skills</h5>
                        <div>
                            <App/>

                        </div>
                        <hr/>
                        <h5>Experience</h5>
                        <div className="form-check">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label class="form-check-label" for="inlineRadio1">0-1 yrs</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label class="form-check-label" for="inlineRadio2">1 - 5</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">5 - 10</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">10+</label>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>


                    
                </div>
                <br></br>
                <div class="container">
                    <div class="row">
                        <div class="col">
                        <h3>Previous Projects</h3>
                        <Ex/>
                        </div>
                        <div class="col">
                        <h3>Current Projects</h3>
                        <Ex/>
                        </div>
                        
                    </div>
                </div>


                <br></br>
                <div id="save">
                    <button class="btn btn-primary" onClick={this.back}>Back</button> 
                    <button class="btn btn-primary" onClick={this.saveNewData} style={{marginLeft:"4px"}}>Save</button> 
                </div>
                
            </form>      
            </div>
               
            
        )
    }

    back(){
        ReactDOM.render(<Profile name={document.getElementById("ind").value}/>,document.getElementById("profile-update"));
    }
    saveNewData(){
        //save data
    }
    profile(){
        //ReactDOM.render(<Picture name={document.getElementById("ind").value}/>,document.getElementById("prev"));
        ReactDOM.render(<Modal/>,document.getElementById("modalDivID"));
        document.getElementById("modalID").click();
    }

}

function Modal(){
    return(
    <div style={{color:"whai",backgroundColor:"black"}}>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id="modalID"
        style={{display:"none"}}>
        Launch demo modal
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>

    )
}

const Ex = () => {
    const [inputFields, setInputFields] = useState([
        {projectName: "asd", startDate: "d", endDate: "asd" }
        
    ]);

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({projectName: "", startDate: "", endDate: "" });
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
            <form onSubmit={handleSubmit}>
                <div className="">
                    {inputFields.map((inputField, index) => (
                        <Fragment key={`${inputField}~${index}`}>

                            <div class="form-group">

                                <label for="example-month-input" >Project Name</label>

                                <input  class="form-control" type="text" name="projectName" value={inputField.projectName}
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


export default Update;