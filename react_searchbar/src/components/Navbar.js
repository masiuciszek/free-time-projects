import React from 'react';
import Main from '../Main';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const myStyle = {marginTop: '.8rem'}

class Navbar extends React.Component {
    render(){
    return(
        <div className="ui container" style={myStyle}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/main">Main Component</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/main" exact component={Main} />
                </div>
            </Router>
        </div>
    );

  }
}

export default Navbar;