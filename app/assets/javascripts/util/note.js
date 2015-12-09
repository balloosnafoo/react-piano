(function (){
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();

  // frequency is measured in Hz
  var Note = window.Note = function (freq) {
    var osc = this.oscillatorNode = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);

    var gainNode = this.gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);

    this.oscillatorNode.connect(this.gainNode);
  };

  Note.prototype.start = function () {
    this.gainNode.gain.value = 0.3;
  };

  Note.prototype.stop = function () {
    this.gainNode.gain.value = 0;
  };
})();
