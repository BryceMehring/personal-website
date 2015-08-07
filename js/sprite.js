import {MaterialManager} from '/js/materialManager.js';

export class Sprite extends THREE.Sprite {
	constructor(params) {
		let index = params.index || 0;
		super(MaterialManager.getMaterial(params.texture, index));

		this.texture = params.texture;
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
			object = new Sprite({
				texture: this.texture,
				index: this.index
			});
		}

		return super.clone(object, ...params);
	}
}