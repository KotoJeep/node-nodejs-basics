import fs from "fs";
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const list = async () => {
  // Write your code here
 await fs.readdir(`${__dirName }/files`, (err, files) => {
    if (err) throw new Error('FS operation failed')
    files.forEach(file=>{
      console.log(file)
    })
  })
  
};

await list();
