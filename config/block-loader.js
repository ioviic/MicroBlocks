var fs = require('fs'),
    path =require('path');
var root;


let loaderUtils = require("loader-utils");

// root = process.cwd();//

module.exports = function grabBlocks() {

    var p = './src/app/blocks/app/';

    fs.readdir(p, function (err, files) {
        if (err) {
            console.log(err);
            throw err;
        }

        console.log('test files'+files);

        files.map(function (file) {
            return path.join(p, file);
        }).filter(function (file) {
            return fs.statSync(file).isFile();
        }).forEach(function (file) {
            console.log("%s (%s)", file, path.extname(file));
        });
    });
    return 'module.exports=['+ JSON.stringify({ name: 'App', path: './src/app/App.js' })+']';
};
