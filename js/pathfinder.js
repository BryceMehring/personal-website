// TODO: clean this up
import {Sprite} from '/js/sprite.js';
import {MaterialManager} from '/js/materialManager.js';

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
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

MaterialManager.addTexture({
  texture: '/images/space-station.png',
  tilesHorizontal: 2,
  tilesVerticle: 2
});

let sprite = new Sprite('/images/ships.png', 11);
sprite.position.set(2, 2, 5);

sprite.selectable = true;
scene.add( sprite );

let spaceStationGroup = new THREE.Object3D();
scene.add(spaceStationGroup);

for(let i = 0; i < 4; ++i) {
  let spaceStation = new Sprite('/images/space-station.png', getRandomInt(1, 4));
  let scale = getRandomArbitrary(2, 3);
  spaceStation.position.set(getRandomArbitrary(-4, 4), getRandomArbitrary(-4, 4), getRandomArbitrary(2, 4));
  spaceStation.scale.set(scale, scale, 1);
  spaceStation.rotation.z = getRandomAngle();
  spaceStation.userData = {
    rotationSpeed: getRandomArbitrary(-0.004, -0.01)
  }
  spaceStationGroup.add(spaceStation);
}

spaceStationGroup.children[0].position.set(0, 0, 5);

let spriteList = [];
for(let i = 0; i < 150; ++i) {
	let rad = i * 0.18 * (Math.PI / 180);
	let newSprite = sprite.clone();
	newSprite.position.set(8*Math.cos(rad - i), 8*Math.sin(rad + i), 1);
	newSprite.rotation.z = getRandomAngle();
  newSprite.setIndex(getRandomInt(11, 16));
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
  spaceStationGroup.rotation.z += 0.001;
  spaceStationGroup.children.forEach(function(station) {
    station.rotation.z += station.userData.rotationSpeed;
  });
	renderer.render( scene, camera );
}

function updateIndex(sprite, min, max) {
	let index = sprite.index + 1;
	if(index > max) {
		index = min;
	}
	sprite.setIndex(index);
}

function updateColor(sprite) {
	let randomVertex = getRandomInt(0, sprite.geometry.bufferLength);
	sprite.geometry.setVertexColor(randomVertex, {
		r: Math.random(),
		g: Math.random(),
		b: Math.random()
	});
}

spaceStationGroup.children.forEach(function(station) {
  window.setInterval(updateIndex, 2000, station, 1, 3);
});
window.setInterval(updateColor, 2000, sprite);

render();
