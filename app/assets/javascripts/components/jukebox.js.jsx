var Jukebox = React.createClass({
  getInitialState: function () {
    return {selectedTrack: -1, tracks: TrackStore.all()};
  },

  componentDidMount: function () {
    TrackStore.on('track-update', function () {
      this.setState({tracks: TrackStore.all()});
    }.bind(this));
  },

  playRecording: function () {
    this.state.track.play();
  },

  render: function () {
    var selectedTrack;
    if (this.state.selectedTrack !== -1) {
      selectedTrack = (
        <div>this.state.tracks[this.state.selectedTrack].name</div>
      );
    } else {
      selectedTrack = <div>Jukebox is empty</div>;
    }
    return (
      <div className="jukebox">
        { selectedTrack }
        <div className="play">
          Play
        </div>
        <div className="delete">
          Delete
        </div>
      </div>
    );
  }
});
