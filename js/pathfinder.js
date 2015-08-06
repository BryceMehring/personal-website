// TODO: clean this up
import {Sprite} from '/js/sprite.js';
import {Input} from '/js/input.js';

let gameElement = document.getElementById('game');
let WIDTH = gameElement.offsetWidth,
	HEIGHT = 800;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 90, WIDTH/HEIGHT, 0.1, 1000 );
let raycaster = new THREE.Raycaster();

let renderer = new THREE.WebGLRenderer();
let canvas = renderer.domElement;
renderer.setSize( WIDTH, HEIGHT );

gameElement.appendChild(canvas);

let sprite = new Sprite({
	texture: '/images/ships.png',
	tilesHorizontal: 4,
	tilesVerticle: 4,
	index: 14
});
sprite.selectable = true;
scene.add( sprite );
let newSprite = sprite.clone();
scene.add( newSprite );

camera.position.z = 8;

Input.setCanvas(canvas);
Input.setCamera(camera);

function render () {
	requestAnimationFrame( render );

	// update the picking ray with the camera and mouse position	
	raycaster.setFromCamera( Input.mouse, camera );	

	// calculate objects intersecting the picking ray
	let intersects = raycaster.intersectObjects( scene.children );

	for ( let i = 0; i < intersects.length; i++ ) {
		if(Input.mouse.down && intersects[ i ].object.selectable) {
			
			console.log('intersects');
			break;
		}
	}

	sprite.position.set(Input.worldMouse.x, Input.worldMouse.y, 4);	
	renderer.render( scene, camera );
}

function updateIndex(sprite) {
	let index = sprite.index;
	if(index >= 15) {
		index = 11;
	}
	sprite.setIndex(index + 1);
}

window.setInterval(updateIndex, 500, sprite);
window.setInterval(updateIndex, 1000, newSprite);

render();