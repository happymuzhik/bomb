/*

LOGIC

Playfield{
	size:{
		width: 640px
		height: 480px
	}
}
Weapon
Player={
	name
	health
	maxpower
	color
	wins
	money
	weapons:[]
}
Round
Game={
	players:[],
	round
	maxround
	walls:[]
}

bomb:{
	colors:{}
	weapons:[]
	walls:[]
	currentGame
	newGame:{		
		walls:[]
		players:[]
		round={
			winner
			wall
		}
	}
}

FUCK LOGIC

*/
;(function(window){

	window.Bomb = function(){

		bomb = {
			colors: {
				"red": {				
					used:false	
				},
				"blue": {
					used:false
				},
				"green": {
					used:false
				},
				"yellow": {
					used:false
				},
				"black": {
					used:false
				},
				"orange": {
					used:false
				},
				"brown": {
					used:false
				}
			},
			walls: ['warp','none','accelerate','stickey','elastic'],
			weapons: [],
			currentGame: false,		
			newGame: function(){
				var game = {};
				game.players = [];
				game.addPlayer = function(params){
					var wrong_clr = true, wrong_name = true;
					if ( params && params.color ){
						for (k in bomb.colors){
							if ( (k == params.color) && (!bomb.colors[k].used) ){
								bomb.colors[k].used = true;
								wrong_clr = false;
								console.log('wrong_clr - '+wrong_clr);
							}							
						}
						if ( wrong_clr ) {
							console.log('Choose another color, please.');
							return;
						}			
					}else{
						console.log('Incorrect params.');
						return;
					}
					var preset = {
						name: params && params.name||('Player ' + (this.players.length + 1)),
						color: params && params.color||''
					}
					var player = new Player(preset);
					this.players.push(player);
					return player;
				};
				game.remPlayer = function(p){
					if (!this.players[p]){
						console.log('Wrong player!');
						return;
					}
					var player = this.players[p];
					this.players.splice(player,1);
					return player;
				};
				this.currentGame = game;
				return game;
			}
		};	

		return bomb;

	};

})(window);