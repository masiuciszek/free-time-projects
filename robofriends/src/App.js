import React, {Component} from 'react';
import CardList from '../src/components/CardList';
import Scroll from '../src/components/Scroll';
import SearchBox from '../src/components/SearchBox';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }

    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(users => this.setState({robots: users}))
        .catch(err => {
            console.error(err);
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})

        }


    render() {
        const filtredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())

        });
        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {

    return (
        <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList robots={filtredRobots}/>
        </Scroll>
        </div>
      );
    }
    }
}

export default App;