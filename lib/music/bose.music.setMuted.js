const sendCommand = require('../bose.sendCommand.js');

module.exports = function setMuted(params){
	if(params.muted){
		return sendCommand('setVolume', params, 0)
    	.then((muted) => {true});
	}else{
		return sendCommand('setVolume', params, 30)
    	.then((muted) => {false});
	}
};