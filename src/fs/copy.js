import fs from 'fs'
import path from 'path'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const copy = async () => {
  await fs.mkdir(path.join(`${__dirName}/files_copy`), err => {
    if (err) {
      throw new Error('FS operation failed')
    }
  })
  
  const files = fs.readdirSync(`${__dirName}/files`)
  files.forEach(file => {
    fs.copyFile(`${__dirName}/files/${file}`, `${__dirName}/files_copy/${file}`, err => {
      if (err) {
        throw err
      }
    })
    
  })
};

copy();

