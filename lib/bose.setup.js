var SoundTouch = require('node-soundtouch');
var Promise = require('bluebird');
var init = require('./bose.init.js');

module.exports = function setup(){
    
    SoundTouch.DiscoveryService.searchForDevices().then(function(foundDevices){
        if(foundDevices.length == 0){
            return;
        }

        Promise.map(foundDevices, function(currentDevice){
            var newDevice = {
                device: {
                    name: `Bose `+currentDevice.name,
                    protocol: `wifi`,
                    service: `bose-soundtouch`,
                    identifier: `${currentDevice.ipAddress}`
                },
                types: [{
                    name: 'Music',
                    type: 'music',
                    identifier: 'music',
                    sensor: false,
                    min: 0,
                    max: 0
                }]
            };

            gladys.device.create(newDevice)
                .then(() => init());
        });
    });

    return Promise.resolve();
};