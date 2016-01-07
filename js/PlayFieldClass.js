var Playfield = function(params){
	var playfield = {
		dom: {}
	};
	playfield.size = {
		width: params.width||640,
		height: params.height||480
	};

	playfield.dom.conteiner = document.createElement('div');
	playfield.dom.conteiner.setAttribute('id', 'Bomb_wrapper');
	playfield.dom.playfield = document.createElement('div');
	playfield.dom.playfield.setAttribute('id', 'Bomb_playfield');

	playfield.dom.playfield.style.width = playfield.size.width + 'px';
	playfield.dom.playfield.style.height = playfield.size.height + 'px';
	playfield.dom.playfield.style.marginLeft = '-'+(playfield.size.width/2)+'px';
	playfield.dom.playfield.style.marginTop = '-'+(playfield.size.height/2)+'px';

	playfield.dom.conteiner.appendChild(playfield.dom.playfield);
	document.body.appendChild(playfield.dom.conteiner);

	playfield.prototype.createGround = function() {
		var P = this;
	};

	return playfield;
};