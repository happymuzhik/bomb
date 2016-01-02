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
			newGame: function(){
				var game = {};
				game.players = [];
				game.addPlayer = function(params){
					// if ( params && params.color ){
					// 	for (var i = 0; i < colors.length; i++){
					// 		if (colors[i] == params.color){
					// 			console.log('Choose another color, please.');
					// 			return;
					// 		}
					// 	}					
					// }
					var preset = {
						name: params && params.name||('Player ' + (this.players.length + 1)),
						color: ''
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
				return game;
			}
		};	

		return bomb;

	};

})(window);