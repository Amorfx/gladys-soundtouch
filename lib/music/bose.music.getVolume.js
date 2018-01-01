const sendCommand = require('../bose.sendCommand.js');

module.exports = function getVolume(params){
    var trackPromise = sendCommand('getVolume', params, []).then(function(dataVolume){
    	return { volume => dataVolume.actualVolume }
    });
};