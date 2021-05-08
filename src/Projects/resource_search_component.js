import React from "react"

function ViewInformationComp(props){
    return(
        <div className="container">
                <div className="row">
                    <div className="col">
                        <div id="resaurce_name">{props.Name}</div>
                        <div id="resource_role"> {props.Role}</div>
                        <div id="resource_role_level">{props.Role_level}</div>
                        <div id="resource_skills">{props.Skills}</div>
                    </div>
                    <div className="col">
                        <div id="resource_product_name">{props.Product_Name}</div>
                        <div id="resource_product_start_date">{props.Product_start_date}</div>
                        <div id="resource_product_end_date">{props.Product_end_date} </div>
                        <div id="resource_location">{props.location}</div>
                    </div>
                </div>
                
            </div>
    )
}

function Resource_search_component(props){
    return(
        <div className="container">
            <div className="form-group">
                <label for="resource_id"> Resource </label>
                <input type="number" id="resource_id" min="1" max ="200"></input>
                <button className="btn btn-primary">Submit</button>
            </div>

                <ViewInformationComp Name={"Name"} Role={"Role"} Role_level={"Role_level"} Skills={"Skills"}Product_Name={"Product Name"}Product_start_date={"Product Start Date"}Product_end_date={"Product End Date"}location={"Location"}/>

        
                <div className="container">
                    <br></br>
                    <h6>Role Level</h6>
                    <div className="container">
                        <ul  class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-senior-tab" data-toggle="pill" href="#pills-senior" role="tab" aria-controls="pills-senior" aria-selected="true">Senior</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-mid-tab" data-toggle="pill" href="#pills-mid" role="tab" aria-controls="pills-mid" aria-selected="false">Mid</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-junior-tab" data-toggle="pill" href="#pills-junior" role="tab" aria-controls="pills-junior" aria-selected="false">Junior</a>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-senior" role="tabpanel" aria-labelledby="pills-senior-tab">.qqqqqqqqqqqqqqqqqqqqqqqqqq..</div>
                        <div class="tab-pane fade" id="pills-mid" role="tabpanel" aria-labelledby="pills-mid-tab">.sdfsdfasdfsdfsdfsafsdfsdfdfd..</div>
                        <div class="tab-pane fade" id="pills-junior" role="tabpanel" aria-labelledby="pills-junior-tab">.asdfdf..</div>
                        </div>
                    </div>
                </div>

                
                <div className="container" >
                    <h6>Roles</h6>
                    
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-engr-tab" data-toggle="pill" href="#pills-engr" role="tab" aria-controls="pills-engr" aria-selected="true">Engr</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-pm-tab" data-toggle="pill" href="#pills-pm" role="tab" aria-controls="pills-pm" aria-selected="false">P.M.</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-ux-tab" data-toggle="pill" href="#pills-ux" role="tab" aria-controls="pills-ux" aria-selected="false">U.X.</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-engr" role="tabpanel" aria-labelledby="pills-engr-tab">aaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                        <div class="tab-pane fade" id="pills-pm" role="tabpanel" aria-labelledby="pills-pm-tab">bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.</div>
                        <div class="tab-pane fade" id="pills-ux" role="tabpanel" aria-labelledby="pills-ux-tab">.mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</div>    
                    </div>    

                </div>      


                    
                </div>
  
        
    )
}

export default Resource_search_component;