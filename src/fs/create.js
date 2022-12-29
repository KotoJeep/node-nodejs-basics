import fs from "fs";
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const create = async () => {
  const path = `${__dirName }/files/fresh.txt`
  if (fs.existsSync(path)) {
    throw new Error('FS operation failed');
  } else {
    fs.open(path, 'w', (err) => {
      fs.writeFile(path, 'I am fresh and young', err => {
        if (err) console.log(err)
      })
      console.log('файл записан')
    })
  }
  
  
};

await create();
