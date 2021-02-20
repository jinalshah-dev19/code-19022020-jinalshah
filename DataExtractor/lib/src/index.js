"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csv = require("csv-parser");
var fs = require("fs");
var fileName = 'src\\DataFile\\sample.csv';
console.log('Processing CSV File');
var getFileSize = function (fileName) {
    var states = fs.statSync(fileName);
    var sizeInBytes = states.size;
    return sizeInBytes;
};
console.log('File Size In Byes : ' + getFileSize(fileName));
var noOflines = 0;
fs.createReadStream(fileName)
    .pipe(csv())
    .on('headers', function (header) {
    console.log('Header Info');
    console.log('*****************************************');
    console.log(header);
    console.log('*****************************************');
})
    .on('data', function (data) {
    noOflines++;
})
    .on('end', function () {
    console.log('Total no. of rows in CSV : ' + noOflines);
});
