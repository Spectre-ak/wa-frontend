import React from "react"
import Loader from '../Loader'
import ReactDOM from "react-dom"
import $ from 'jquery'
import UserProfile from '../UserList';

function doPost(){
    $.ajax({
        url:"https://woay-backend.azurewebsites.net/pm",
        type:"get",
        success: function(res) {
           // console.log(res);
            var productPart=res[0];
            ReactDOM.render(<UserProfile data={res}/>,document.getElementById("pmresc"));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ReactDOM.render(<i>Some error Occurred </i>,document.getElementById("pmresc"));
            console.log(textStatus, errorThrown);
        }


    });
}

class PmResource extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(props){
        ReactDOM.render(<Loader/>,document.getElementById("pmresc"));
        doPost();
    }
    render(){
        return(
            <div id="pmresc">

            </div>
        )
    }
}

export default PmResource;
