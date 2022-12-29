import {createHash} from 'crypto'
import {readFile} from 'fs/promises'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const calculateHash = async () => {
    // Write your code here
  const file = await readFile(`${__dirName }/files/fileToCalculateHashFor.txt`)
  const hash = createHash('sha256').update(file).digest('hex');
  console.log(hash)
};

await calculateHash();
