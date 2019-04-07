import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongsList extends Component {
  renderList = () =>
    this.props.songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
          >
            {song.title}
          </button>
        </div>
        <div className="content"> {/* <p>{song.title} </p>{' '} */}</div>
      </div>
    ));

  render() {
    // describing the mapstatetoprops func
    // this.props = { songs: state.songs };
    console.log(this.props);
    return (
      <div className="ui devided list songlist">
        <h3>songlist</h3>
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps,
  { selectSong } // action
)(SongsList); // component
