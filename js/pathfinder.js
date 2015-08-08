// TODO: clean this up
import {Sprite} from '/js/sprite.js';
import {MaterialManager} from '/js/materialManager.js';

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomAngle() {
	return getRandomArbitrary(0, 360) * Math.PI / 180;
}

let gameElement = document.getElementById('game'),
	cameraSliderElement = document.getElementById('cameraSlider'),
	WIDTH = gameElement.offsetWidth,
	HEIGHT = 800;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 90, WIDTH/HEIGHT, 0.1, 1000 );

let renderer = new THREE.WebGLRenderer();
let canvas = renderer.domElement;
renderer.setSize( WIDTH, HEIGHT );

gameElement.appendChild(canvas);

MaterialManager.addTexture({
	texture: '/images/ships.png',
	tilesHorizontal: 4,
	tilesVerticle: 4
});

let sprite = new Sprite('/images/ships.png', 11);

sprite.selectable = true;
scene.add( sprite );

let spriteList = [];
for(let i = 0; i < 150; ++i) {
	let rad = i * 0.18 * (Math.PI / 180);
	let newSprite = sprite.clone();
	newSprite.position.set(8*Math.cos(rad - i), 8*Math.sin(rad + i), 1);
	newSprite.rotation.z = getRandomAngle();
	scene.add(newSprite);

	spriteList.push(newSprite);
}

camera.position.z = 8;

cameraSliderElement.addEventListener('input', function() {
	camera.position.z = this.value;
});

function render () {
	requestAnimationFrame( render );	
	cameraSliderElement.value = camera.position.z;
	renderer.render( scene, camera );
}

function updateIndex(sprite) {
	let index = sprite.index + 1;
	if(index > 15) {
		index = 11;
	}
	sprite.setIndex(index);
}


window.setInterval(updateIndex, 2000, sprite);
for (let i = spriteList.length - 1; i >= 0; i--) {
	window.setInterval(updateIndex, 500 + i, spriteList[i]);
}
render();