import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const myStyle = {marginTop: '.8rem'}

class App extends React.Component {
    state = {images: [] };

     onSearchSubmit = async (term) => {
      const response = await axios
            .get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers:{
                Authorization: 'Client-ID 75d047aef42b61cef743a5a1f0b3578f3189bb4b2e43aa8161e3e6a63764150e'
            }
        })
        console.log(response.data.results);
        this.setState({images:response.data.results});
    }
    render(){
    return(
        <div className="ui container" style={myStyle}>
            <Navbar/>
            <SearchBar
             label="Form images"
             onSubmit={this.onSearchSubmit}/>
             Found: { this.state.images.length} Images
        </div>
    );

  }
}

export default App;