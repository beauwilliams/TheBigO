console.log("Starting...");

const Logarithmic = (n) => {
  //O(log n) complexity
  for (let i = 1; i <= n; i = i * 2) {
    console.log("i is " + i);
  }
};

const { performance } = require("perf_hooks");
const time1 = performance.now();
Logarithmic(16); //this is n
const time2 = performance.now();
console.log(`Elapsed time: ${(time2 - time1) / 1000} seconds`);
