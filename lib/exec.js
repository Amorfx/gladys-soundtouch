var shared = require('./shared.js');
var setVolume = require('./music/bose.music.setVolume.js');

module.exports = function exec(params){
    params.volume = params.state.value;
    return setVolume(params);
};