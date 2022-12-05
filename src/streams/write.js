import fs from 'fs'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const write = async () => {
    // Write your code here
  const writableStream = fs.createWriteStream(`${__dirName }/files/fileToWrite.txt`)
  
  process.stdin.on('data', function (data) {
    writableStream.write(data)
    process.stdout.write(data)
  })

};
await write();
