import React from 'react';

import SongsList from './SongsList';

const App = () => (
  <div style={styles} className="ui container grid">
    <div className="ui row">
      <div className="column eight wide">
        <SongsList />
      </div>
    </div>
  </div>
);
const styles = {
  background: '#ccc',
};
export default App;
