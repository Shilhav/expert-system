module.exports.getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};

module.exports.getRandomFloat = function(min, max) {
	return Math.random() * (max - min) + min;
};