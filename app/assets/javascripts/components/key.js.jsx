var Key = React.createClass({
  getInitialState: function () {
    return {pressed: false};
  },

  componentDidMount: function () {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.on('key-update', function () {
      if (KeyStore.all().indexOf(this.props.noteName) !== -1) {
        this.note.start();
        this.setState({pressed: true});
      } else {
        this.note.stop();
        this.setState({pressed: false});
      }
    }.bind(this));
  },

  render: function () {
    var classString = "key" + (this.state.pressed ? " pressed" : "" );
    return (
      <div className={classString}>

      </div>
    );
  },
});
