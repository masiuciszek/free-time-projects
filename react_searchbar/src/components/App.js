import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const myStyle = {marginTop: '.8rem'}

class App extends React.Component {
    state = {images: [] };

     onSearchSubmit = async term => {
      const response = await unsplash
            .get('/search/photos', {
            params: {query: term},
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
             <ImageList
                 images={this.state.images}
             />
        </div>
    );

  }
}

export default App;