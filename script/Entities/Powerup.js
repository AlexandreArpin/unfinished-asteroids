ENGINE.Powerup = function(args) {

  Utils.extend(this, {
    color: "#ff0" /* default color if none is provided */
  }, args);

  this.sprite = this.sprites[this.type];
  this.width = 15;
  this.height = 15;
};

ENGINE.Powerup.prototype = {

  constructor: ENGINE.Powerup,

  collidable: true,
  radius: 7 ,

  sprites: [
    [67, 47, 15, 15],
	[67, 66, 15, 15],
	[85, 66, 15, 15],
    [103, 66, 15, 15]
  ],
  
  collision: function(object) {

    if (this.type == 3 && object instanceof ENGINE.Player) {
		object.addHealth(Math.floor(object.maxHp/2));
		this.collection.remove(this);
    }

  },

  step: function(delta) {

  },

  render: function(delta) {
	app.layer.save();

    app.layer.translate(this.x, this.y);
    app.layer.drawRegion(app.images.spritesheet, this.sprite, -this.width / 2, -this.height / 2);

    app.layer.restore();
  }

};