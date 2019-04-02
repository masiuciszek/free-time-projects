import React from 'react';


const SearchBar = props => {
    return(
        <div>
             <label> {props.title} </label>
               <input
                    type="text"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.handleChange}
                    onSubmit={props.onSubmit}
               />
        </div>
    )
}

export default SearchBar;