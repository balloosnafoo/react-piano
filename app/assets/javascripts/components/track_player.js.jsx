var TrackPlayer = React.createClass({
  playTrack: function () {
    this.props.track.play();
  },

  render: function () {
    return (
      <div className="track-player">
        <div className="track-title">
          {this.props.track.name}
        </div>
      <div className="play-button" onClick={this.playTrack}>(play)</div>
      </div>
    );
  }
});
