import React from 'react'
import ReactDOM from 'react-dom'
import Update from './Update.js';
import im1 from './1.jpg'


class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.back=this.back.bind(this);
        //this.saveNewData=this.saveNewData.bind(this);

    }

    render() {
        return (
            <div className="container" id="prev" style={{color:"white",backgroundColor:"black"}}>
                <div>
                    <h3>Choose Avatar</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col"><img src={im1} className="avatar"></img></div>
                            <div className="col"><img src="./2.jpg"></img></div>
                            <div className="col"><img src="./3.jpg"></img></div>
                            <div className="col"><img src="./4.jpg"></img></div>
                        </div>
                        <div className="row">
                            <div className="col"><img src="./5.jpg"></img></div>
                            <div className="col"><img src="./6.jpg"></img></div>
                            <div className="col"><img src="./7.jpg"></img></div>
                            <div className="col"><img src="./8.jpg"></img></div>
                        </div>
                        <div className="row">
                            <div className="col"><img src="./9.jpg"></img></div>
                            <div className="col"><img src="./10.jpg"></img></div>
                            <div className="col"><img src="./11.jpg"></img></div>
                            <div className="col"><img src="./12.jpg"></img></div>
                        </div>
                        <div className="row">
                            <div className="col"><img src="./13.jpg"></img></div>
                            <div className="col"><img src="./14.jpg"></img></div>
                            <div className="col"><img src="./16.jpg"></img></div>
                            <div className="col"><img src="./15.jpg"></img></div>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary" onClick={this.back}>Back</button> 
                </div>
            </div>
               
            
        )
    }

    back(){
        ReactDOM.render(<Update name={document.getElementById("prev").value}/>,document.getElementById("ind"));
    }

}




export default Picture;