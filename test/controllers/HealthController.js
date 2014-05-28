'use strict';

var os = require('os');

exports.render = function (req, res) {
        res.json(200, {
            name: "TestApp",
            system: os.type() + " v" + os.release()
    });
};

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
        return 'n/a';
    }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};