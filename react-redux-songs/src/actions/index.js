// action creator
// eslint-disable-next-line arrow-body-style
export const selectSong = song => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
