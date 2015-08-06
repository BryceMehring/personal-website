export class Sprite extends THREE.Mesh {
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
}
Sprite.geometry = new THREE.BoxGeometry( 1, 1, 0, 1, 1, 0 );