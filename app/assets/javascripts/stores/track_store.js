(function (root) {
  var _tracks = [];

  var TrackStore = root.TrackStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _tracks.slice();
    },

    add: function (track) {
      _tracks.push(track);
    },

    delete: function (track) {
      _tracks.splice(_tracks.indexOf(track), 1);
    }
  });

  AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case "SAVE_TRACK":
        TrackStore.add(payload.track);
        TrackStore.emit("track-update");
        break;
      case "DELETE_TRACK":
        TrackStore.delete(payload.track);
        TrackStore.emit("track-update");
        break;
    }
  });
})(this);
