const sendCommand = require('../bose.sendCommand.js');
const SoundTouch = require('node-soundtouch');

module.exports = function playPlaylist(params){
	var preset = "Preset"+params.identifier;
    return sendCommand('pressKey', params, [SoundTouch.Key[preset]]);
};