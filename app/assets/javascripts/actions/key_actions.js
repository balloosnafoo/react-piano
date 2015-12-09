KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({
      actionType: "ADD_KEY",
      noteName: key
    });
  },

  keyReleased: function (key) {
    AppDispatcher.dispatch({
      actionType: "REMOVE_KEY",
      noteName: key
    });
  }
};
