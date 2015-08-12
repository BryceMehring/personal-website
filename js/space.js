// TODO: clean this up
import {Sprite} from '/js/sprite.js';
import {MaterialManager} from '/js/materialManager.js';

function getRandomAngle() {
    return THREE.Math.randFloat(0, 2*Math.PI);
}

let gameElement = document.getElementById('game'),
	WIDTH = window.innerWidth,
	HEIGHT = window.innerHeight;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 90, WIDTH/HEIGHT, 0.1, 1000 );
camera.position.z = 8;

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
  normal: '/images/space-station-normal.png',
  tilesHorizontal: 2,
  tilesVerticle: 2
});

let directionalLight = new THREE.DirectionalLight( 0xbbffff, 0.4 );
directionalLight.position.set( 1, 1, 2 );
scene.add( directionalLight );

let sprite = new Sprite('/images/ships.png', 11);
sprite.position.set(2, 2, 5);

sprite.selectable = true;
scene.add( sprite );

let spaceStationGroup = new THREE.Object3D();
scene.add(spaceStationGroup);

for(let i = 0; i < 4; ++i) {
  let spaceStation = new Sprite('/images/space-station.png', THREE.Math.randInt(1, 4));
  let scale = THREE.Math.randFloat(2, 3);
  spaceStation.position.set(THREE.Math.randFloat(-4, 4), THREE.Math.randFloat(-4, 4), THREE.Math.randFloat(2, 4));
  spaceStation.scale.set(scale, scale, 1);
  spaceStation.rotation.z = getRandomAngle();
  spaceStation.userData = {
    rotationSpeed: THREE.Math.randFloat(-0.004, -0.01)
  };
  spaceStationGroup.add(spaceStation);
}

spaceStationGroup.children[0].position.set(0, 0, 5);

let spriteList = [];
for(let i = 0; i < 150; ++i) {
	let rad = i * 0.18 * (Math.PI / 180);
	let newSprite = sprite.clone();
	newSprite.position.set(8*Math.cos(rad - i), 8*Math.sin(rad + i), 1);
	newSprite.rotation.z = getRandomAngle();
	newSprite.setIndex(THREE.Math.randInt(11, 16));
	scene.add(newSprite);

	spriteList.push(newSprite);
}

function render () {
	requestAnimationFrame( render );
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
	let randomVertex = THREE.Math.randInt(0, sprite.geometry.bufferLength);
	sprite.geometry.setVertexColor(randomVertex, {
		r: Math.random(),
		g: Math.random(),
		b: Math.random()
	});
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function onWheelEvent(event) {
  let deltaY = event.deltaY > 0 ? 1 : -1;
  camera.position.z += deltaY;
}

gameElement.addEventListener('wheel', onWheelEvent, false);
window.addEventListener( 'resize', onWindowResize, false );

spaceStationGroup.children.forEach(function(station) {
  window.setInterval(updateIndex, 2000, station, 1, 3);
});
window.setInterval(updateColor, 2000, sprite);
render();
