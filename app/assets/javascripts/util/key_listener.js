Keys = {
  65: "G",  // a
  87: "G#", // w
  83: "A",  // s
  69: "A#", // e
  68: "B",  // d
  82: "C",  // r
  70: "C#", // f
  84: "D"   // t
};

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

$(document).on("keydown", function (e) {
  if (Object.keys(Keys).indexOf(e.keyCode.toString()) !== -1 ) {
    KeyActions.keyPressed(Keys[e.keyCode]);
  }
});

$(document).on("keyup", function (e) {
  if (Object.keys(Keys).indexOf(e.keyCode.toString()) !== -1 ) {
    KeyActions.keyReleased(Keys[e.keyCode]);
  }
});