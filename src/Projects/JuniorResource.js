import React from "react"
import Loader from '../Loader'
import ReactDOM from "react-dom"
import $ from 'jquery'
import UserProfile from '../UserList';

function doPost(){
    $.ajax({
        url:"https://woay-backend.azurewebsites.net/junior",
        type:"get",
        success: function(res) {
            console.log(res);
            var productPart=res[0];
            ReactDOM.render(<UserProfile data={res}/>,document.getElementById("resourceJunior"));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ReactDOM.render(<i>Some error Occurred </i>,document.getElementById("resourceJunior"));
            console.log(textStatus, errorThrown);
        }


    });
}

class JuniorResource extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(props){
        ReactDOM.render(<Loader/>,document.getElementById("resourceJunior"));
        doPost();
    }
    render(){
        return(
            <div id="resourceJunior">

            </div>
        )
    }
}

export default JuniorResource;
