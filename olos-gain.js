(function(params){

  Polymer('olos-gain', {

    // inputs and outputs
    output: null,

    rootfolder: '../olos-gain/',

    publicMethods: ['setupGain', 'setGain'],
    // audioParams: ['gainNode'],

    ready: function() {
      var self = this;
      self._audioContext = audioContext;

      self.slider = self.$.gainAmountSlider;

      self.gainNode = audioContext.createGain();

      self.setupGain();
    },

    setGain: function(e, detail) {
      var now = audioContext.currentTime;
      this.output.gain.linearRampToValueAtTime(this.gainValue, now + 0.0001);
      // this.output.gain.cancelScheduledValues(now + 0.00011);
    },

    // publicly editable
    setupGain: function() {
      this.output = this.input = this.gainNode;
      this.gainParam = this.output.gain;

      this.slider.min = 0;
      this.slider.max = 1;
      this.slider.step = 0.01;
    },

    animate: function() {
      // TO DO
    },

    dispose: function() {
      var self = this;

      // remove audio elements
      var nodes = ['inputAudio'];
      for (var i = 0; i < nodes.length; i++) {
        try {
          var node = self[nodes[i]];
          node.disconnect();
          node = null;
        } catch(e) { }
      }
    },

  });

})();