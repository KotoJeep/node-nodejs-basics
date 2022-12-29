import fs from 'fs'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const read = async () => {
  // Write your code here
  const readableStream = fs.createReadStream(`${__dirName }/files/fileToRead.txt`, 'utf-8')
  readableStream.on('data', chunk => process.stdout.write(chunk))
};

await read();
