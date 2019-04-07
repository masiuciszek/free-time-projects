import React from 'react';
import SongDisplay from './SongDisplay';
import SongsList from './SongsList';
import selectSong from '../actions';

const App = () => (
  <div className="ui container grid">
    <div className="ui row">
      <div className="column eight wide">
        <SongsList />
      </div>
      <div className="column eight wide">
        <SongDisplay />
      </div>
    </div>
  </div>
);

export default App;
