import fs from "fs";

const transform = async () => {
    // Write your code here
  
  process.stdin.on('data', function (data) {
    process.stdout.write(`data: ${data.toString().split("").reverse().join("")}`)
  })
};

await transform();
