import React from "react"

function Product_search_date_component(  ){
    
    return(
        <div>
            <div className="container">
                <label> Project Start Date: </label>
                <input className="form-row-group" type="date"></input>

                <label>  Project End Date: </label>
                <input className="form-row-group" type="date"></input>

                <div style={{textAlign:"center"}}><button className="btn btn-primary">Submit</button></div>
                
                <div id="product_search_date">

                </div>
            </div>
        </div>
        
        
        
    )
}

export default Product_search_date_component;