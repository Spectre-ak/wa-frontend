import React from 'react';
import Product_search_component from './Product_search_component.js'
import Product_search_date_component from './product_date_search_component.js';
import ReactDOM from 'react-dom';
import Resource_search_component from './resource_search_component.js'
import Location_search_component from './location_search_component.js'
import General_component from './general_component.js'

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.ch1=this.ch1.bind(this);
    }
    ch1(){
        ReactDOM.render(<div><Product_search_component/><Product_search_date_component/> </div>,document.getElementById("mainRes"));
    }
    ch2(){
        ReactDOM.render(<div><Resource_search_component/></div>,document.getElementById("mainRes"));
    }
    ch3(){
        ReactDOM.render(<div><Location_search_component/> </div>,document.getElementById("mainRes"));
    }
    ch4(){
        ReactDOM.render(<div><General_component/> </div>,document.getElementById("mainRes"));
    }

    componentDidMount(){
        document.getElementById('nav-home-tab').click();
    }

    render() {

        return (
            <div className="container">
                <h3>What do you want to know about products</h3>
                

                    1. get details of a product by product name from a range of products 
                    Product 1,2,3....
                    <br/>
                    2. get details of ongoing projecs based on locations (options)

                    <br/>

                    <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" 
                        aria-controls="nav-home" aria-selected="true" onClick={this.ch1}>Products</a>
                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" a
                        ria-controls="nav-profile" aria-selected="false" onClick={this.ch2}>Resources</a>
                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" 
                        aria-controls="nav-contact" aria-selected="false" onClick={this.ch3}>Locations</a>
                        <a class="nav-item nav-link" id="nav-general-tab" data-toggle="tab" href="#nav-general" role="tab" 
                        aria-controls="nav-general" aria-selected="false" onClick={this.ch4}>General</a>
                       
                    </div>
                    </nav>

                    <div id="mainRes">

                    </div>

            </div>
        )
    }
}

export default Project;