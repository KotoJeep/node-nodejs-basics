import fs from 'fs'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const remove = async () => {
  // Write your code here
 await fs.unlink(`${__dirName }/files/fileToRemove.txt`, err => {
    if (err) {
      throw new Error('FS operation failed')
    }
  })
};

await remove();
