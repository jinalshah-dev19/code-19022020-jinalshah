"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
if (!fs.existsSync('./DataFile/sample.csv')) {
    console.log('File not found inside DataFile folder');
}
else {
    console.log('File Found');
}
