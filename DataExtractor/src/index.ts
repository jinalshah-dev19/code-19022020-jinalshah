import * as csv from 'csv-parser';
import * as fs from 'fs';
const fileName = 'src\\DataFile\\sample.csv';
console.log('Processing CSV File');

const getFileSize = (fileName: any) => {
  const states = fs.statSync(fileName);
  const sizeInBytes = states.size;
  return sizeInBytes;
};
console.log('File Size In Byes : ' + getFileSize(fileName));

let noOflines = 0;
fs.createReadStream(fileName)
  .pipe(csv())
  .on('headers', (header: any) => {
    console.log('Header Info');
    console.log('*****************************************');
    console.log(header);
    console.log('*****************************************');
  })
  .on('data', (data: any) => {
    noOflines++;
  })
  .on('end', () => {
    console.log('Total no. of rows in CSV : ' + noOflines);
  });
