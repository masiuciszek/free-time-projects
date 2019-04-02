import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const myStyle = {marginTop: '.8rem'}

class Main extends React.Component {


    render(){
    return(
        <div className="ui container" style={myStyle}>
                <h1>Main</h1>
        </div>
    );

  }
}

export default Main;