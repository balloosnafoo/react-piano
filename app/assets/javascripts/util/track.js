(function () {
  var Track = window.Track = function (attributes) {
    this.name = attributes.name;
    this.roll = [];
  };

  Track.prototype.setName = function (name) {
    this.name = name;
  };

  Track.prototype.startRecording = function () {
    this.roll = [];
    this.startTime = Date.now();
  };

  Track.prototype.stopRecording = function () {
    this.addNotes([]);
  };

  Track.prototype.addNotes = function (notes) {
    this.roll.push({
      timeSlice: Date.now() - this.startTime,
      notes: notes
    });
  };

  Track.prototype.play = function () {
    if (this.intervalId) return;

    var playbackTime = Date.now();
    var currentNote = 0;
    var currentlyPlaying = [];
    this.intervalId = setInterval(function () {

      if (currentNote < this.roll.length) {
        if (Date.now() - playbackTime > this.roll[currentNote].timeSlice) {
          currentlyPlaying.forEach( function (note) {
            KeyActions.keyReleased(note);
          });
          currentlyPlaying.slice(0);
          this.roll[currentNote].notes.forEach( function (note) {
            KeyActions.keyPressed(note);
            currentlyPlaying.push(note);
          });
          currentNote++;
        }
      } else {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }.bind(this), 100);
  };
})();
