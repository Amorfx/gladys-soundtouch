
module.exports = function (sails) {

    var setup = require('./lib/bose.setup.js');
    var init = require('./lib/bose.init.js');
    var music = require('./lib/music/index.js');

    gladys.on('ready', function(){
        init();
    });
      
    return {
        setup, 
        init,
        //music
    };
};