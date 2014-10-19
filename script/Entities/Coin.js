ENGINE.Coin = function(args) {

  Utils.extend(this, {
    color: "#ff0" /* default color if none is provided */
  }, args);

  this.width = 10;
  this.height = 10;
  this.delta = 0;
  this.animationTick = 0;
};

ENGINE.Coin.prototype = {

  constructor: ENGINE.Coin,

  collidable: true,

  radius: 3,

  collision: function(object) {

    if (object instanceof ENGINE.Player) {
		app.playSound("coin");
		object.addScore(5);
		this.collection.remove(this);
    }

  },

  step: function(delta) {

  },

  render: function(delta) {
	app.layer.save();

    app.layer.translate(this.x, this.y);
	var sprite = [this.animationTick * this.width, 0, this.width, this.height];
    app.layer.drawRegion(app.images.coins, sprite, -this.width / 2, -this.height / 2);

    app.layer.restore();
	this.delta += delta
	
	//Animation step every 0.05 seconds
	if(this.delta > 0.05){
		this.animationTick = (this.animationTick + 1) % 7;
		this.delta = 0;
	}
  }

};