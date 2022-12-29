import fs from 'fs'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const rename = async () => {
 await fs.rename(`${__dirName }/files/wrongFilename.txt`, `${__dirName }/files/properFilename.md`, err => {
  if (err){
    throw new Error('FS operation failed')
  }
  })
};

await rename();
