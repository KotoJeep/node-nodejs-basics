import {env} from 'node:process';

const parseEnv = () => {
  // Write your code here
  const res = []
  const arr = Object.entries(process.env)
  arr.forEach(([key, value]) => {
    if (key.startsWith('RSS_')) {
      res.push(`${key}=${value}`)
    }
    
  })
  console.log(res.join('; '));
};

parseEnv();
