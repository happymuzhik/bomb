/*

LOGIC

Playfield
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
	colors:[]
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

		var Playfield = function(){
			return 1;
		};
		///////////////////////////
		var Weapon = function(){
			return 1;
		};
		/////////////////////////
		var Game = function(){
				var game = {
						players: [],
						round: 0,
						maxround: 10,
						walls: []
					};
				return game;
			};
		//////////////////////////
		var colors = [
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
		];
		var Player = function(params){
				var player = {
						name: params && params.name||'Player',
						health: 100,
						maxpower: 1000,
						color: params && params.color||'red',
						wins: 0,
						money: 0,
						weapons: []
					};
				return player;
			};
		//////////////////////////
		bomb = {
			walls: ['warp','none','accelerate','stickey','elastic'],
			weapons: [],
			players: [],
			newGame: function(){
				return 1;
			},
			addPlayer: function(params){
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
			},
			remPlayer: function(p){
				if (!this.players[p]){
					console.log('Wrong player!');
					return;
				}
				var player = this.players[p];
				this.players.splice(player,1);
				return player;
			}
		};	

		return bomb;

	};

})(window);