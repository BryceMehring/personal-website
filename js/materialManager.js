export class MaterialManager {
	/* params = {
		key: unique value which identifies the texture + material
		texture: texture name,
		normal: normal map texture (optional),
		tilesHorizontal: number tiles horizontal (optional),
		tilesVerticle: number tiles vertile (optional),
		specular: Specular color of the material, i.e., how shiny the material is and the color of its shine. (optional),
		shininess: How shiny the specular highlight is; a higher value gives a sharper highlight. (optional),
		color: Diffuse color of the material. (optional)
	}*/
	static addTexture(params) {
		params.tilesHorizontal = params.tilesHorizontal || 1;
		params.tilesVerticle = params.tilesVerticle || 1;

		let repeatHorizontal = 1 / params.tilesHorizontal,
			repeatVertical = 1 / params.tilesVerticle;

		MaterialManager.cache[params.key] = [];
		for(let i = 0; i < params.tilesVerticle; ++i) {
			for(let j = 0; j < params.tilesHorizontal; ++j) {

				let index = i * params.tilesHorizontal + j,
					offsetX = j / params.tilesHorizontal,
					offsetY = i / params.tilesVerticle,
					materialType = THREE.MeshBasicMaterial,
					textures = {
						textureMap: THREE.ImageUtils.loadTexture(params.texture)
					};

				if(params.normal) {
					materialType = THREE.MeshPhongMaterial;
					textures.normalMap = THREE.ImageUtils.loadTexture(params.normal);
				}

				let material = new materialType( {
					map: textures.textureMap,
					normalMap: textures.normalMap || null,
					transparent: true,
					alphaTest: 0.01,
					specular: params.specular || null,
					shininess: params.shininess || null,
					color: params.color || 0xffffffff,
					vertexColors: THREE.VertexColors
				});

				for(let key in textures) {
					let texture = textures[key];
					texture.wrapS = texture.wrapT = MaterialManager.textureWrapMode;
					texture.repeat.set(repeatHorizontal, repeatVertical);
					texture.offset.set(offsetX, offsetY);
				}

				MaterialManager.cache[params.key][index] = material;
			}
		}
	}

	static getMaterial(key, index) {
		return MaterialManager.cache[key][index];
	}
}
MaterialManager.cache = {};
MaterialManager.textureWrapMode = THREE.RepeatWrapping; // TODO: maybe we could do something else with this?
