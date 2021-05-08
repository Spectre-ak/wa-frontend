import React from 'react'
import ReactDOM from 'react-dom'
import "@pathofdev/react-tag-input/build/index.css";
import { useState, Fragment } from "react";

var inde = 1;
function Compo(props){
    return(
        <div id={props.id}>
                        <label for={props.id}>Choose a role</label>

                        <select name={props.id} id={props.id}>
                            <option value="volvo">Senior</option>
                            <option value="saab">Mid</option>
                            <option value="mercedes">Junior</option>
                        </select>
                    </div>
    )
}

class ProjectInput extends React.Component {
    constructor(props) {
        super(props);
        this.add=this.add.bind(this);
        this.rem=this.rem.bind(this);
        
    }

    add(){
        var ele=document.getElementById("ops" +1);
        console.log(ele);inde++;//<Compo id={"ops"+inde}/>
        var ele=document.createElement("div");
        ele.id="ops"+inde;

        document.getElementById("divFor").appendChild(ele);
        ReactDOM.render(<Compo id={"ops"+inde}/>,document.getElementById("ops"+inde))

    }

    rem(){
        var cn=document.getElementById("divFor").childNodes;
        console.log(cn.length)
        console.log(cn[cn.length-1]);
        var idForRmeo=cn[cn.length-1].id;
        document.getElementById(idForRmeo).remove();
        console.log(cn)
    }

    render() {
        return (
            <div>
                <div id="divFor">
                    
                    <div id="ops22">
                    <div id="ops22">
                        <label for={"ops" + inde}>Choose a role</label>

                        <select name={"ops" + inde} id={"ops" + inde}>
                            <option value="volvo">Senior</option>
                            <option value="saab">Mid</option>
                            <option value="mercedes">Junior</option>
                        </select>
                    </div>
                    </div>

                </div>

                <button className="btn btn-primary" onClick={this.add}>
                    Add
                </button>

                <button style={{marginLeft:"3px"}} className="btn btn-primary" onClick={this.rem}>
                    Remove
                </button>

            </div>


        )
    }
}


export default function MaxResources() {
    return (
        <div>

            <ProjectInput />

        </div>
    )
}