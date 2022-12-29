import fs from 'fs'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const read = async () => {
    // Write your code here
  fs.readFile(`${__dirName }/files/fileToRead.txt`, 'utf-8', (err, data)=>{
    if (err){
      throw new Error('FS operation failed')
    }
    console.log(data)
  })
  
};

await read();
