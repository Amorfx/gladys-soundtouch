const sendCommand = require('../bose.sendCommand.js');

module.exports = function getPlaying(params){
    return sendCommand('getNowPlaying', params, []).then(function(dataTrack){
    	if(dataTrack.playStatus == "PLAY_STATE"){
    		return {playing: true};
    	}
    	return {playing: false};
    });
};
