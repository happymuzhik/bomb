var Weapon = function(params){
	if (!params && !params.name && !params.ammunition && !params.damage && !params.radius && !params.isDefault){
		console.log('Wrong params. Set name, ammunition, damage, radius');
	}
	var weapon = {
			name: params.name,
			ammunition: params.ammunition,
			damage: params.damage,
			radius: params.radius,
			isDefault: params.isDefault
		};
	return weapon;
};