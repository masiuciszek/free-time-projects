// reducers
import { combineReducers } from 'redux';

// eslint-disable-next-line arrow-body-style
const songsReducer = () => {
  return [
    {
      title: 'house music',
      duration: '3:45',
      video: 'https://www.youtube.com/embed/lG5SKOFMc9k',
    },
    {
      title: 'Sen o Warszawie',
      duration: '2:55',
      video: 'https://www.youtube.com/embed/ePNUSmH3dMI',
    },
    {
      title: 'Dni ktory nie znamy',
      duration: '4:17',
      vodeo: 'https://www.youtube.com/embed/oG6pEolAKm8',
    },
    {
      title: 'Byłaś serca biciem',
      duration: '5:48',
      video: 'https://www.youtube.com/embed/EhFUzyiFvvI',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
