import React from "react"

function Location_search_component(  ){
    
    return(
        <div className="container">
            <div class="form-group">
                <label className="w-50" for="exampleFormControlSelect1">Select Location</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>All</option>
                    <option>AZ</option>
                    <option>II</option>
                    <option>TX</option>
                </select>
                <label for="exampleFormControlSelect1">Select Resource/Product</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Resources</option>
                    <option>Products</option>
                </select>
                <div style={{textAlign:"center"}}><button className="btn btn-primary">Submit</button></div>

            </div>
        </div>
        
        
        
    )
}

export default Location_search_component;