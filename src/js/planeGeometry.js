import { Face3, Geometry } from "three/examples/jsm/deprecated/Geometry";

class LegacyPlaneGeometry extends Geometry {
	constructor(v0, v1, v2, v3) {
		super();

		this.vertices.push( v0, v1, v2, v3 );
		this.faces.push( new Face3( 0, 1, 2 ) );
		this.faces.push( new Face3( 0, 2, 3 ) );

		this.computeFaceNormals();
		this.computeVertexNormals();
	}
}

function PlaneGeometry(v0,v1,v2,v3) {
	return new LegacyPlaneGeometry(v0,v1,v2,v3).toBufferGeometry();
}

export default PlaneGeometry;
