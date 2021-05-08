import React from "react"
import Loader from '../Loader'
import ReactDOM from "react-dom"
import $ from 'jquery'
import UserProfile from '../UserList';

function doPost(){
    $.ajax({
        url:"https://woay-backend.azurewebsites.net/mid",
        type:"get",
        success: function(res) {
            console.log(res);
            var productPart=res[0];
            ReactDOM.render(<UserProfile data={res}/>,document.getElementById("resourceMid"));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ReactDOM.render(<i>Some error Occurred </i>,document.getElementById("resourceMid"));
            console.log(textStatus, errorThrown);
        }


    });
}

class MidResource extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(props){
        ReactDOM.render(<Loader/>,document.getElementById("resourceMid"));
        doPost();
    }
    render(){
        return(
            <div id="resourceMid">

            </div>
        )
    }
}

export default MidResource;
