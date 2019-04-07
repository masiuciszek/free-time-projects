// reducers
import { combineReducers } from 'redux';

// eslint-disable-next-line arrow-body-style
const songsReducer = () => {
  return [
    { title: 'Candy shop', duration: '3:45' },
    { title: 'Sen o Warszawie', duration: '2:55' },
    { title: 'Equal in love', duration: '4:17' },
    { title: 'Loves comes again', duration: '5:48' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED ') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSongReducer,
});
