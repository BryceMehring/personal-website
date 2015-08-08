export class ColorPlane extends THREE.PlaneBufferGeometry {
	constructor(...params) {
		super(...params);

		let positionAttribute = this.getAttribute('position');
		this.bufferLength = positionAttribute.array.length / positionAttribute.itemSize;

		let colorBuffer = new Float32Array(3*this.bufferLength);
		for(let i = 0, len = colorBuffer.length; i < len; ++i) {
			colorBuffer[i] = 1;
		}

		this.addAttribute('color', new THREE.BufferAttribute(colorBuffer, 3));
	}

	setColor(color) {
		let colorAttribute = this.getAttribute('color');
		for(let i = 0; i < this.bufferLength; ++i) {
			this.setColorAttribute(i, color, colorAttribute);
		}
		colorAttribute.needsUpdate = true;
	}

	setVertexColor(index, color) {
		let colorAttribute = this.getAttribute('color');
		this.setColorAttribute(index, color, colorAttribute);

		colorAttribute.needsUpdate = true;
	}

	setColorAttribute(index, color, colorAttribute) {
		colorAttribute.setX(index, color.r);
		colorAttribute.setY(index, color.g);
		colorAttribute.setZ(index, color.b);
	}
}