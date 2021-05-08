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

                <ViewInformationComp Name={"Name"}/>
                <ViewInformationComp Role={"Role"}/>
                <ViewInformationComp Role_level={"Role_level"}/>
                <ViewInformationComp Skills={"Skills"}/>
                <ViewInformationComp Product_Name={"Product Name"}/>
                <ViewInformationComp Product_start_date={"Product Start Date"}/>
                <ViewInformationComp Product_end_date={"Product End Date"}/>
                <ViewInformationComp location={"Location"}/>
        
                <div className="container" style={{textAlign:"center"}}>
                    <h6>Role Level</h6>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="role_level" id="resource_senior" value="option1"/>
                        <label class="form-check-label" for="resource_senior">Senior</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="role_level" id="resource_mid" value="option2"/>
                        <label class="form-check-label" for="resource_mid">Mid</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="role_level" id="resource_junior" value="option3"/>
                        <label class="form-check-label" for="resource_junior">Junior</label>
                    </div>
                    <div id="role_level_result"></div>
                </div>

                <div className="container" style={{textAlign:"center"}}>
                    <h6>Roles</h6>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="role" id="resource_engr" value="option1"/>
                        <label class="form-check-label" for="resource_engr">Engr</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="role" id="resource_pm" value="option2"/>
                        <label class="form-check-label" for="resource_pm">P.M. </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="role" id="resource_ux" value="option3"/>
                        <label class="form-check-label" for="resource_ux">U.X.</label>
                    </div>
                    <div id="role_level_result"></div>
                </div>      
        
        
        </div>
  
        
    )
}

export default Resource_search_component;