import {MaterialManager} from '/js/materialManager.js';

export class Sprite extends THREE.Sprite {
	constructor(texture, index = 0) {
		super(MaterialManager.getMaterial(texture, index));

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