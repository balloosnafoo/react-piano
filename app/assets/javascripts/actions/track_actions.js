TrackActions = {
  saveTrack: function (track) {
    AppDispatcher.dispatch({
      actionType: "SAVE_TRACK",
      payload: track
    });
  },

  deleteTrack: function (track) {
    AppDispatcher.dispatch({
      actionType: "DELETE_TRACK",
      payload: track
    });
  },
};
