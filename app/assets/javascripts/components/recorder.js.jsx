var Recorder = React.createClass({
  getInitialState: function () {
    return {
      isRecording: false,
      track: new Track({}),
      title: ""
    };
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

  saveRecording: function () {
    TrackActions.saveTrack(this.state.track);
  },

  updateTitle: function (e) {
    this.setState({title: e.currentTarget.value});
    this.state.track.setName(this.state.title);
  },

  render: function () {
    return (
      <div className="recorder">
        <div className="recorder-start" onClick={this.startRecording}>
          Record
        </div>
        <div className="recorder-stop" onClick={this.stopRecording}>
          Stop
        </div>
        <input type="text"
               className="title-input"
               value={this.title}
               onChange={this.updateTitle}/>
        <div className="recorder-save" onClick={this.saveRecording}>
          Save
        </div>
      </div>
    );
  }
});
