var Organ = React.createClass({
  render: function () {
    return (
      <div className="organ">
        {
          this.props.keys.map(function (k) {
            return <Key noteName={k}/>;
          })
        }
        <Recorder/>
      </div>
    );
  }
});
