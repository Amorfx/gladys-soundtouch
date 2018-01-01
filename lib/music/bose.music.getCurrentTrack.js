const sendCommand = require('../bose.sendCommand.js');

module.exports = function getCurrentTrack(params){
    return sendCommand('getNowPlaying', params, []).then( function(dataTrack){
	dataTrack.title = dataTrack.track;
	return dataTrack;
    } );
};
