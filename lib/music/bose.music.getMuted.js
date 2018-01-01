const sendCommand = require('../bose.sendCommand.js');

module.exports = function getMuted(params){
    var volumePromise = sendCommand('getVolume', params, []);

    volumePromise.then(function(dataVolume){
    	if(dataVolume.actualVolume == 0) return {muted: true};

    	return {muted: false}; 
    });
};