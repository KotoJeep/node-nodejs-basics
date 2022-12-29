import {spawn} from 'child_process'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const __dirName = dirname(fileURLToPath(import.meta.url))

const spawnChildProcess = async (args) => {
  let init = false
  const chProcess = spawn('node', [`${__dirName}/files/script.js`, ...args.split(' ')])
  
  process.stdin.on('data', msg => {
    chProcess.stdin.write(msg)
  })
  
  chProcess.stdout.on('data', data => {
    console.log(data.toString())
    if (!init) {
      console.log(`Write anything to console` + '\n')
      init = true
    }
  })
  
};

spawnChildProcess();
