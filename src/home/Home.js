import React from 'react';

function Project() {
    return (
        <div class="card">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

const arr=[];
arr.push(<Project/>);
arr.push(<Project/>);
arr.push(<Project/>);


class Home extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
      //  window.history.pushState('','','/home');
    }
   
    
    render() {
        return (
            <div className="container">
                <h2>All active projects</h2>
                {arr}
            </div>
        )

    }
}

export default Home;