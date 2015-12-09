var Recorder = React.createClass({
  getInitialState: function () {
    return {isRecording: false, track: new Track({})};
  },

  componentDidMount: function () {
    KeyStore.on('key-update', function () {
      if (this.state.isRecording) {
        this.state.track.addNotes(KeyStore.all());
      }
    }.bind(this));
  },

  startRecording: function () {
    this.state.track.startRecording();
    this.setState({isRecording: true});
  },

  stopRecording: function () {
    this.state.track.stopRecording();
    this.setState({isRecording: false});
  },

  playRecording: function () {
    this.state.track.play();
  },

  render: function () {
    return (
      <div className="recorder">
        <div className="recorder-start" onClick={this.startRecording}>
          Record
        </div>
        <div className="recorder-play" onClick={this.playRecording}>
          Play
        </div>
        <div className="recorder-stop" onClick={this.stopRecording}>
          Stop
        </div>
      </div>
    );
  }
});
