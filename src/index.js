import './css/caps.css';
import './lib/ColladaLoader';
import './lib/OrbitControls';

import './js/threeExtensions';

import CAPS from './js/caps';

const info = document.createElement('div');
info.id = 'info';
info.innerHTML = `Clipping with caps.<br/><a href="https://github.com/assisrmatheus/clipping-with-caps">Source code</a>.`;
document.body.appendChild(info);

const controls = document.createElement('div');
controls.id = 'controls';
controls.innerHTML = `<label><input id="showCaps" type="checkbox" checked /> Show caps</label>`;
document.body.appendChild(controls);

new CAPS.Simulation();
