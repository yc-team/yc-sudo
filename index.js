'use strict';

module.exports = function(msg){

    msg = msg || 'You are not allowed to run this app with root permissions.Use sudo first';

    //getuid 0
    if (process.getuid() === 0) {
        console.error(msg);
        //why 77
        process.exit(77);
    }

};