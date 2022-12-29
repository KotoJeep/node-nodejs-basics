import zlib from 'zlib'
import fs from "fs"
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const compress = async () => {
  // Write your code here
  
  const gzip = zlib.createGzip()
  const file = `${__dirName }/files/fileToCompress.txt`
  const readStream = fs.createReadStream(file)
  const output = fs.createWriteStream(`${__dirName }/files/archive.gz`)
  readStream.pipe(gzip).pipe(output).on('finish', () => {
    console.log('compress!')
  })
  
};

await compress();
