import React from 'react';
import { connect } from 'react-redux';

const SongDisplay = ({ song }) => {
  if (!song) {
    return <div>Selet a song please!</div>;
  }
  return (
    <div className="details">
      <h2>Details for:</h2>
      <p>{song.title}</p>
      <p>{song.duration}</p>
      <iframe src={song.video} width="420" height="315" />
    </div>
  );
};

const mapStateToProps = state => ({ song: state.selectedSong }); //  reducers , second function

export default connect(mapStateToProps)(SongDisplay);
