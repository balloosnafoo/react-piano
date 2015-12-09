var Jukebox = React.createClass({
  getInitialState: function () {
    return {selectedTrack: -1, tracks: TrackStore.all()};
  },

  componentDidMount: function () {
    TrackStore.on('track-update', function () {
      this.setState({
        tracks: TrackStore.all(),
        selectedTrack: TrackStore.all().length - 1
      });
    }.bind(this));
  },

  playRecording: function () {
    this.state.tracks[this.state.selectedTrack].play();
  },

  render: function () {
    var selectedTrack;
    if (this.state.selectedTrack !== -1) {
      selectedTrack = (
        <div>{this.state.tracks[this.state.selectedTrack].name}</div>
      );
    } else {
      selectedTrack = <div>Jukebox is empty</div>;
    }
    return (
      <div className="jukebox">
        { selectedTrack }
        <div className="play" onClick={this.playRecording}>
          Play
        </div>
        <div className="delete">
          Delete
        </div>
      </div>
    );
  }
});
