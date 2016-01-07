/*

LOGIC

Playfield{
	size:{
		width: 640px
		height: 480px
	}
}
Weapon={
	name
	ammunition
	damage
	radius
}
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
	weapons:{
		addWeapon
		remWeapon
		weaponList:[]
	}
	walls:[]
	currentGame
	newGame:{		
		walls:[]
		players:{
			addPlayer
			remPlayer
			playerList:[]
		}
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
			weapons: {
				addWeapon: function(params){

				},
				remWeapon:function(weapon){

				},
				weaponList: []
			},
			currentGame: false,		
			newGame: function(){
				var game = {};
				game.players = {
					playerList: []
				};
				game.players.addPlayer = function(params){
					var wrong_clr = true;
					if ( params && params.color ){
						for (k in bomb.colors){
							if ( (k == params.color) && (!bomb.colors[k].used) ){
								bomb.colors[k].used = true;
								wrong_clr = false;
							}							
						}
						if ( wrong_clr ) {
							console.log('Choose another color, please.');
							return;
						}			
					}else{
						for (k in bomb.colors){
							if ( !bomb.colors[k].used ){
								bomb.colors[k].used = true;								
								params = {color:k};	
								break;					
							}							
						}						
					}
					if ( params && params.name ){
						for ( var i = 0; i < this.playerList.length; i++ ){
							if ( this.playerList[i].name == params.name ){
								console.log('Choose another name, please.');
								return;
							}
						}
					}
					var preset = {
						name: params && params.name||('Player ' + (this.playerList.length + 1)),
						color: params.color
					}
					var player = new Player(preset);
					this.playerList.push(player);
					return player;
				};
				game.players.remPlayer = function(p){
					if (!this.playerList[p]){
						console.log('Wrong player!');
						return;
					}
					var player = this.playerList[p];
					this.playerList.splice(player,1);
					return player;
				};
				this.currentGame = game;
				return game;
			}
		};	

		return bomb;

	};

})(window);
;(function(window){
	window.bombGame = new Bomb();
	window.bombGame.newGame();
	window.bombGame.currentGame.players.addPlayer();
	window.bombGame.currentGame.players.addPlayer();
	window.bombGame.currentGame.players.addPlayer();
})(window);