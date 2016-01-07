var Player = function(params){
	var player = {
			name: params && params.name||'Player',
			health: 100,
			maxpower: 1000,
			color: params && params.color||'red',
			wins: 0,
			money: 0,
			weapons: params && params.weapons||[]
		};
	return player;
};