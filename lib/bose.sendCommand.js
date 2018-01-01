var Promise = require('bluebird');
var shared = require('./shared.js');

module.exports = function sendCommand(functionName, params, paramsArray) {
    return new Promise(function(resolve, reject){
        if(!shared.instances[params.deviceType.device]) return reject(`No Bose with deviceId ${params.deviceType.device}`);

        paramsArray = paramsArray || [];

        // add callback to paramsArray
        paramsArray.push(function(err, result){
            if(err) return reject(err);

            resolve(result);
        });

        // call the bose Device function
        shared.instances[params.deviceType.device][functionName].apply(shared.instances[params.deviceType.device], paramsArray);
    });
};