import React from 'react'
import Update from './Update';
import ReactDOM from 'react-dom'
//import profile_picture from './profile_picture.png';
import profile from './profile_picture.png'
import ReactTagInput from "@pathofdev/react-tag-input";


function aaddPRevPro(){

}

function myFunction() {
    var name="name";
    var para = document.createElement("div");
    var a="<i class='fa' >&#xf0e5</i>";
    para.style.display="block";
    para.style.borderStyle="solid";
    para.style.borderRadius="3px";
    para.style.width="30%";
    para.style.textAlign="";
    para.innerHTML = name +" "+ a ;
    para.style.padding="1%";
    para.style.padding="2px";
    document.body.appendChild(para);
    document.getElementById("curre").appendChild(para)
  }

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

class Profile extends React.Component {
    constructor(props) {
        super(props);                           
        this.update=this.update.bind(this);
    }
    componentDidMount(){
        //var p_name=document.createElement("div");
        //p_name.innerHTML="Project Name";
        //var st_date=document.createElement("div");
        //st_date.innerHTML="Start Date";
        //var aa=p_name + st_date;
        //aa.appendChild(p_name);
        //document.getElementById("curre").appendChild(p_name);
        //document.getElementById("curre").appendChild(document.createElement("div").innerHTML="Project Name");
        //var start_date="Start Date";
       // var end_date="End Date";
       // var Project_name="Project Name";
       // var pro=document.createElement("div");
        //document.getElementsById("curre").appendChild(pro);
        
    }

    render() {
        return (
 
            <div className="container" id="profile-update">
                <div className="container">
                    <div className="row" >
                        <div  className="col">
                            <img className="rounded-circle border border-secondary" src={profile} alt="Profile Picture" height={100}  width={100}/>
                            <h3><a>Name</a></h3>
                            <a>Email</a>
                        </div>
                        <br></br>
                        <div className="col">
                            <h3>Skills</h3>
                            <div> <App/> </div>
                        </div>
                    </div>
                </div>
                
                <br></br>
                <div class="container">
                    <div class="row">
                        <div class="col" id="prs">
                            <h4>Previous Projects</h4>
                            <button onclick="myFunction()">Try it</button>

                        </div>
                        <div class="col" id="curre">
                            <h4>Current Projects</h4>
                        </div>
                    </div>
                </div>
                <br></br>
                <div id="update"> <button class="btn btn-primary" onClick={this.update}>Update Profile</button>  </div>
                
        </div>
        )
    }

    update(){
        ReactDOM.render(<Update name={"sdfsdf"}/>,document.getElementById("profile-update"));
    }}
export default Profile;