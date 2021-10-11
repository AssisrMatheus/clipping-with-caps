import * as THREE from '../lib/three';
import PlaneGeometry from "./planeGeometry";
import MATERIAL from './material';

let SelectionBoxFace = function ( axis, v0, v1, v2, v3, selection ) {
	var frontFaceGeometry = new PlaneGeometry( v0, v1, v2, v3 );
	frontFaceGeometry.dynamic = true;
	selection.meshGeometries.push( frontFaceGeometry );

	var frontFaceMesh = new THREE.Mesh( frontFaceGeometry, MATERIAL.Invisible );
	frontFaceMesh.axis = axis;
	frontFaceMesh.guardian = this;
	selection.touchMeshes.add( frontFaceMesh );
	selection.selectables.push( frontFaceMesh );

	var backFaceGeometry = new PlaneGeometry( v3, v2, v1, v0 );
	backFaceGeometry.dynamic = true;
	selection.meshGeometries.push( backFaceGeometry );

	var backFaceMesh = new THREE.Mesh( backFaceGeometry, MATERIAL.BoxBackFace );
	selection.displayMeshes.add( backFaceMesh );

	this.lines = [];
};

SelectionBoxFace.prototype = {
	constructor: SelectionBoxFace,
	rayOver: function () {
		this.highlightLines( true );
	},
	rayOut: function () {
		this.highlightLines( false );
	},
	highlightLines: function ( b ) {
		for ( var i = 0; i < this.lines.length; i++ ) {
			this.lines[ i ].setHighlight( b );
		}
	}
};

export default SelectionBoxFace;
