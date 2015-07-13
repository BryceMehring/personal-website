// TODO: clean this up

class Sprite extends THREE.Mesh {
	constructor(params) {
		let textureMap = THREE.ImageUtils.loadTexture(params.texture);
		super(Sprite.geometry, new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureMap, alphaTest: 0.80} ));

		this.textureMap = textureMap;
		this.texture = params.texture;
		this.tilesHorizontal = params.tilesHorizontal;
		this.tilesVerticle = params.tilesVerticle;
		this.textureMap.wrapS = this.textureMap.wrapT = THREE.RepeatWrapping;

		this.textureMap.repeat.set(1 / this.tilesHorizontal, 1 / this.tilesVerticle);
		this.setIndex(params.index || 0);
	}

	setIndex(index) {
		let column = index % this.tilesHorizontal;
		let row = Math.floor( index / this.tilesHorizontal );
		this.textureMap.offset.set(column / this.tilesHorizontal, row / this.tilesVerticle);

		this.index = index;

		return this;
	}

	clone(object, ...params) {
		if(object === undefined) {
			object = new Sprite({
				texture: this.texture,
				tilesHorizontal: this.tilesHorizontal,
				tilesVerticle: this.tilesVerticle,
				index: this.index
			});
		}

		return super.clone(object, ...params);
	}
};

Sprite.geometry = new THREE.BoxGeometry( 1, 1, 0, 1, 1, 0 );

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let mouseWorld = new THREE.Vector3();

let renderer = new THREE.WebGLRenderer();
let canvas = renderer.domElement;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( canvas );

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
	mouse.x = ( (event.pageX - canvas.offsetLeft) / window.innerWidth ) * 2 - 1;
	mouse.y = - ( (event.pageY - canvas.offsetTop) / window.innerHeight ) * 2 + 1;

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
};

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