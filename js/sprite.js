import {MaterialManager} from '/js/materialManager.js';

export class Sprite extends THREE.Mesh {
	constructor(texture, index = 0) {
		super(Sprite.geometry, MaterialManager.getMaterial(texture, index));

		this.texture = texture;
		this.index = index;
	}

	setIndex(index) {
		if(index !== this.index) {
			this.material = MaterialManager.getMaterial(this.texture, index);
			this.index = index;
		}
		
		return this;
	}

	clone(object, ...params) {
		if(object === undefined) {
			object = new Sprite(this.texture, this.index);
		}

		return super.clone(object, ...params);
	}
}
Sprite.geometry = new THREE.BoxGeometry( 1, 1, 0, 1, 1, 0 );