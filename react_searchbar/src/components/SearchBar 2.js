import React from 'react'
import SearchBarChild from './SearchBarChild';


class SearchBar extends React.Component{
    state = {term : ''};

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
             <form className="ui form" onSubmit={this.onFormSubmit} >
              <div className="field">
                <label> {this.props.label} </label>
                <input
                    type="text"
                    onChange={e => this.setState({term: e.target.value})}
                    value={this.state.term}
                />
                </div>
            </form>
            </div>
        );
    }
}

export default SearchBar;

