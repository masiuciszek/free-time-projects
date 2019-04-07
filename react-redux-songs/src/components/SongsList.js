import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongsList extends Component {
  // eslint-disable-next-line arrow-body-style
  renderList = () => {
    return this.props.songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button className="ui button primary">select</button>
        </div>
        <div className="content"> {song.title} </div>
      </div>
    ));
  };

  render() {
    // describing the mapstatetoprops func
    // this.props = { songs: state.songs };
    console.log(this.props);
    return (
      <div className="ui devided list">
        <h3>songlost</h3>
        <p>yeeeah boooi</p>
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongsList);
