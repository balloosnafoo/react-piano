(function (root) {
  var _keys = [];

  var KeyStore = root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _keys.slice();
    },

    add: function (note) {
      _keys.push(note);
    },

    delete: function (note) {
      while (_keys.indexOf(note) !== -1) {
        _keys.splice(_keys.indexOf(note), 1);
      }
    },

    clear: function () {
      _keys.splice(0);
    },
  });

  AppDispatcher.register(function (payload) {
    switch(payload.actionType) {
      case "ADD_KEY":
        KeyStore.add(payload.noteName);
        KeyStore.emit('key-update');
        break;
      case "REMOVE_KEY":
        KeyStore.delete(payload.noteName);
        KeyStore.emit('key-update');
        break;
    }
  });
})(this);
