const sendCommand = require('../bose.sendCommand.js');
const SoundTouch = require('node-soundtouch');

module.exports = function next(params){
    return sendCommand('pressKey', params, [SoundTouch.Key.NextTrack]);
};