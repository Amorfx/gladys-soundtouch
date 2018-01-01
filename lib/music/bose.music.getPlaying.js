const sendCommand = require('../bose.sendCommand.js');

module.exports = function getPlaying(params){
    var trackPromise = sendCommand('getNowPlaying', params, []);

    trackPromise.then(function(dataTrack){
    	if(dataTrack.playStatus == "PLAY_STATE"){
    		return {playing: true};
    	}

    	return {playing: false};
    });
};