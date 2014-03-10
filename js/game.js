var game = new Phaser.Game(2500, 2500, Phaser.AUTO, '', {
	preload: preload,
	create: create,
	update: update
});

function preload() {
	game.load.spritesheet('dude', '../images/zombie-baby.png', 64, 64);
	game.load.spritesheet('attackingDude', '../images/attacking.png', 64, 64);
	game.load.spritesheet('tanHuman', '../images/tan-baby.png', 64, 64);
	game.load.spritesheet('brownHuman', '../images/brown-baby.png', 64, 64);
	game.load.spritesheet('whiteHuman', '../images/white-baby.png', 64, 64);
	game.load.spritesheet('turnedZombie', '../images/turned-baby.png', 64, 64);
}

function create() {
	// The player and its settings
	player = game.add.sprite(100, 100, 'dude');

	player.body.collideWorldBounds = true;

	//  Our two animations, walking left and right.
	player.animations.add('walking', [0, 1, 2, 3], 10, true);
}

function update() {}