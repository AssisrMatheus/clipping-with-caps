import * as THREE from '../lib/three';
import SHADER from './shader';
import UNIFORMS from './uniforms';

export default {
	sheet: new THREE.ShaderMaterial( {
		uniforms:       UNIFORMS.clipping,
		vertexShader:   SHADER.vertexClipping,
		fragmentShader: SHADER.fragmentClipping
	} ),
	cap: new THREE.ShaderMaterial( {
		uniforms:       UNIFORMS.caps,
		vertexShader:   SHADER.vertex,
		fragmentShader: SHADER.fragment
	} ),
	backStencil: new THREE.ShaderMaterial( {
		uniforms:       UNIFORMS.clipping,
		vertexShader:   SHADER.vertexClipping,
		fragmentShader: SHADER.fragmentClippingFront,
		colorWrite: false,
		depthWrite: false,
		side: THREE.BackSide
	} ),
	frontStencil: new THREE.ShaderMaterial( {
		uniforms:       UNIFORMS.clipping,
		vertexShader:   SHADER.vertexClipping,
		fragmentShader: SHADER.fragmentClippingFront,
		colorWrite: false,
		depthWrite: false,
	} ),
	BoxBackFace:   new THREE.MeshBasicMaterial( { color: 0xEEDDCC, transparent: true } ),
	BoxWireframe:  new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } ),
	BoxWireActive: new THREE.LineBasicMaterial( { color: 0xf83610, linewidth: 4 } ),
	Invisible: new THREE.ShaderMaterial( {
		vertexShader:   SHADER.invisibleVertexShader,
		fragmentShader: SHADER.invisibleFragmentShader
	} )
};
