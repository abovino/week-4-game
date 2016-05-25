var selectedChar;
var currentEnemy;
var currentEnemyIndex;
var enemiesOnDeck;
var defeatedArray = [];
var charCount = 4;
var characterArray = ["subzero", "scorpion", "cassie", "raiden"];
var selectedCharIndex;
var charNodeArray = [];

var fighters = {
	subzero: {
		name: "Subzero",
		hp: 140,
		attack: 16,
		baseAttack: 16,
		cap: 25,
		img: "subzero.jpg",
	}
	scorpion: {
		name: "Scorpion",
		hp: 160,
		attack: 12,
		baseAttack: 12,
		cap: 17,
		img: "scorpion.jpg"
	}
	baraka: {
		name: "Baraka",
		hp: 180,
		attack: 10,
		baseAttack: 10,
		cap: 14,
		img: "baraka.png"
	}
	raiden: {
		name: "Raiden",
		hp: 200,
		attack: 8,
		baseAttack: 8,
		cap: 12,
		img: "raiden.jpg"
	}
}