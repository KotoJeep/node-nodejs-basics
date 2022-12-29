import zlib from 'zlib'
import fs from "fs"
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const decompress = async () => {
    // Write your code here
  const readStream = fs.createReadStream(`${__dirName }/files/archive.gz`)
  const writeStream = fs.createWriteStream(`${__dirName }/files/fileToCompress.txt`)
  readStream.pipe(zlib.createUnzip()).pipe(writeStream).on('finish', ()=>{
    console.log('Decompress!')
  })
};

await decompress();
