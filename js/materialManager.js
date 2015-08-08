export class MaterialManager {
	/* params = {
		texture: "texture name",
		tilesHorizontal: "num tiles horizontal",
		tilesVerticle: "num tiles vertile",
	}*/
	static addTexture(params) {
		MaterialManager.cache[params.texture] = [];
		for(let i = 0; i < params.tilesVerticle; ++i) {
			for(let j = 0; j < params.tilesHorizontal; ++j) {
				let index = i * params.tilesHorizontal + j;
				let material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture(params.texture), transparent: true, alphaTest: 0.01} );
				material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
				material.map.repeat.set(1 / params.tilesHorizontal, 1 / params.tilesVerticle);
				material.map.offset.set(j / params.tilesHorizontal, i / params.tilesVerticle);
				MaterialManager.cache[params.texture][index] = material;
			}
		}
	}

	static getMaterial(texture, index) {
		return MaterialManager.cache[texture][index];
	}
}
MaterialManager.cache = {};