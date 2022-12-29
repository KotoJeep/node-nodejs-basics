import {Worker} from 'worker_threads'
import {cpus} from 'os'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirName = dirname(fileURLToPath(import.meta.url))

const performCalculations = async () => {
  let num = 10
  const cp = cpus()
  
  const compute = (number) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(`${__dirName}/worker.js`, {workerData: number})
      worker.on('message', msg => resolve(msg))
      worker.on('error', err => reject(err))
    })
  }
  
  const results = await Promise.allSettled(
    cp.map((proc, idx) => {
     return compute(num + idx)
    })
  )
  
  const response = results.map(el => ({
    status: el.status === 'fulfilled' ? 'resolve' : ' error',
    data: el.status === 'fulfilled' ? el.value : null
}))
  
  console.log(response)
  
  return response
};

await performCalculations();
