const sendCommand = require('../bose.sendCommand.js');
const SoundTouch = require('node-soundtouch');

module.exports = function stop(params){
    return sendCommand('pressKey', params, [SoundTouch.Key.Stop]);
};