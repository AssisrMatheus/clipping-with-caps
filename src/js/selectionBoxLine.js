import * as THREE from 'three';
import MATERIAL from './material';
import { Geometry } from "three/examples/jsm/deprecated/Geometry";

class SelectionBoxLine {
	constructor(v0, v1, f0, f1, selection) {
		var lineGeometry = new Geometry();
		lineGeometry.vertices.push( v0, v1 );
		lineGeometry.dynamic = true;
		lineGeometry = lineGeometry.toBufferGeometry();
		selection.lineGeometries.push( lineGeometry );

		this.line = new THREE.LineSegments( lineGeometry, MATERIAL.BoxWireframe );
		this.line.computeLineDistances();
		selection.displayMeshes.add( this.line );

		f0.lines.push( this );
		f1.lines.push( this );
	}

	setHighlight ( b ) {
		this.line.material = b ? MATERIAL.BoxWireActive : MATERIAL.BoxWireframe;
	}
}

export default SelectionBoxLine;
