import React, { Component } from 'react';

class Test extends Component{
    state = {
        name: ''
    }
    handleClick(e){



    }
    render(){
        return(
            <div>
                <h1> {this.props.title} </h1>
                <h4> {this.state.name} </h4>
                <button onClick={this.handleClick}> {this.props.btn} </button>
            </div>
        );
    }
}


export default Test;