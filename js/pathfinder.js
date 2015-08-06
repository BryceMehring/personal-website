// TODO: clean this up

import {Sprite} from '/js/sprite.js';

let gameElement = document.getElementById('game');
let WIDTH = gameElement.offsetWidth,
	HEIGHT = 800;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 90, WIDTH/HEIGHT, 0.1, 1000 );
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let mouseWorld = new THREE.Vector3();

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

function onMouseMove( event ) {
	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components
	mouse.x = ( (event.pageX - canvas.offsetLeft) / WIDTH ) * 2 - 1;
	mouse.y = - ( (event.pageY - canvas.offsetTop) / HEIGHT ) * 2 + 1;

	mouseWorld.set(mouse.x, mouse.y, 0.5);
	mouseWorld.unproject(camera);
	let dir = mouseWorld.sub( camera.position ).normalize();
	let distance = -camera.position.z / dir.z;
	mouseWorld = camera.position.clone().add( dir.multiplyScalar( distance ) );
}

function onMouseUpDown( event ) {
	mouse.down = event.type === 'mousedown';
	mouse.up = !mouse.down;
}

function render () {
	requestAnimationFrame( render );

	// update the picking ray with the camera and mouse position	
	raycaster.setFromCamera( mouse, camera );	

	// calculate objects intersecting the picking ray
	let intersects = raycaster.intersectObjects( scene.children );

	for ( let i = 0; i < intersects.length; i++ ) {
		if(mouse.down && intersects[ i ].object.selectable) {
			
			console.log('intersects');
			break;
		}
	}

	sprite.position.set(mouseWorld.x, mouseWorld.y, 4);	
	renderer.render( scene, camera );
}

canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mouseup', onMouseUpDown);
canvas.addEventListener('mousedown', onMouseUpDown);

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