import * as THREE from '../lib/three';
import MATERIAL from './material';

let SelectionBoxLine = function ( v0, v1, f0, f1, selection ) {
	var lineGeometry = new THREE.Geometry();
	lineGeometry.vertices.push( v0, v1 );
	lineGeometry.computeLineDistances();
	lineGeometry.dynamic = true;
	selection.lineGeometries.push( lineGeometry );

	this.line = new THREE.LineSegments( lineGeometry, MATERIAL.BoxWireframe );
	selection.displayMeshes.add( this.line );

	f0.lines.push( this );
	f1.lines.push( this );
};

SelectionBoxLine.prototype = {
	constructor: SelectionBoxLine,
	setHighlight: function ( b ) {
		this.line.material = b ? MATERIAL.BoxWireActive : MATERIAL.BoxWireframe;
	}
};

export default SelectionBoxLine;
