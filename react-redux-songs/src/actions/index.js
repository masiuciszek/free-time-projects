// action creator

// eslint-disable-next-line arrow-body-style
export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
// return an action
