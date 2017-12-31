var shared = require('./shared.js');
var SoundTouch = require('node-soundtouch');
var BoseDevice = SoundTouch.Device;


module.exports = function init() {
    return gladys.device.getByService({service: 'bose-soundtouch'})
      .then((devices) => {

          // reset all instances 
          shared.instances = {};

          // foreach device, create an instance
          devices.forEach(function(device){

              // separate IP and port
              //var infos = device.identifier.split(':');
              shared.instances[device.id] = BoseDevice.create(device.identifier);
          });
      });
};