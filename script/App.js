var app = playground({

  width: 640,
  height: 480,

  scaleToFit: true,

  smoothing: false,

  create: function() {

    this.loadImages("spritesheet");
	this.loadImages("coins");
	
	this.loadSounds("asteroid-crush");
	this.loadSounds("asteroid-hit");
	this.loadSounds("coin");
	this.loadSounds("shoot");
  },

  ready: function() {

    this.game.start();

    this.setState(this.game);

  },

  step: function(delta) {

  },

  render: function(delta) {

    this.layer.clear("#008");

  },

  mousedown: function(event) {

  },

  mouseup: function(event) {

  },

  mousemove: function(event) {

  },

  keydown: function(event) {

  },

  keyup: function(event) {

  }

});
