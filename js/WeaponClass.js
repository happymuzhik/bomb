var Weapon = function(){
	if (!params && !params.name && !params.ammunition && !params.ammunition && !params.radius){
		console.log('Wrong params. Set name, ammunition, damage, radius');
	}
	var weapon = {
			name: params.name,
			ammunition: params.ammunition,
			damage: params.damage,
			radius: params.radius
		};
	return weapon;
};