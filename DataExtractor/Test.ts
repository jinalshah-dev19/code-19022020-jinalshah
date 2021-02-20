
const csv = require('./csv-parser'); 
const fs = require('./fs');
var fileName = "DataFile\\sample.csv"
console.log("Processing CSV File")

const getFileSize = (fileName: any) => {
  const states = fs.statSync(fileName)
  const sizeInBytes = states.size
  return sizeInBytes

}
console.log("File Size In Byes : " + getFileSize(fileName))

var noOflines=0;
fs.createReadStream(fileName)
  .pipe(csv())
  .on('headers', (header: any) =>{
    console.log("Header Info");
    console.log("*****************************************");
    console.log(header);
    console.log("*****************************************");
  })
  .on('data', (data: any) => {
      noOflines++;
  })
  .on('end', () => {
    console.log("Total no. of rows in CSV : " + noOflines)
  });

