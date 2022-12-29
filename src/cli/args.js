const parseArgs = () => {
  // Write your code here
  const [executer, file, ...args] = process.argv
  
  const cliArg = args.reduce((acc, arg, index, arr) => {
    const nextEl = arr[index + 1]
    if (nextEl && arg.startsWith('--')) {
      const transformArg = arg.slice(2)
      acc.push(`${transformArg} is ${nextEl}`)
    }
    return acc
  }, [])
  console.log(cliArg.join(', '))
};

parseArgs();
