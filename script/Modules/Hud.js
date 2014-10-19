app.game.hud = {

  render: function(delta) {

	var colors = [
		"#08f",
		"#E82843",
	  ];
	
	for( var i=0; i < app.game.players.length; i++ ) {
		var player = app.game.players[i];
		
		this.renderBar(16, 16 * (i+1), 80, 6, player.hp / player.maxHp, colors[player.team]);
		this.renderScore(640-2, 22 * (i+1), player.score, colors[player.team]);
	}
	
	
	
  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);

  },

  renderScore: function(x, y, score, color) {

    app.layer
	  .fillStyle(color)
	  .font("16px Arial")
	  .textAlign("right")
	  .fillText("Score: " + score, x, y);
  }
};