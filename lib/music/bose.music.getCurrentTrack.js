const sendCommand = require('../bose.sendCommand.js');

module.exports = function getCurrentTrack(params){
    var trackPromise = sendCommand('getNowPlaying', params, []);

    trackPromise.then(function(dataTrack){
    	return {track: dataTrack.track};
    });
};