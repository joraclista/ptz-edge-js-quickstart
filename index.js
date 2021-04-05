
const ptz = require("@joraclista/ptz-edge-js");

console.log('ptz functions:');
console.log(ptz);
ptz.getCameraZoomInfo('PTZ Pro 2', function(error, result) {
        if (error) throw error;
        console.log('Camera Zoom Info : ' + JSON.stringify(result));
		return true;
    });