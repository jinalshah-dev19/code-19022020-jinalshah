import * as fs from 'fs';



if(!fs.existsSync('./DataFile/sample.csv')){
    console.log('File not found inside DataFile folder');
}else{
    console.log('File Found');
}