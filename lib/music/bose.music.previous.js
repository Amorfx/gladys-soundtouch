const sendCommand = require('../bose.sendCommand.js');
const SoundTouch = require('node-soundtouch');

module.exports = function previous(params){
    return sendCommand('pressKey', params, [SoundTouch.Key.PreviousTrack]);
};