console.log("Starting...");

const Exponential = (k, n) => {
  //O(k)^n complexity or in this case O(k)5 = 32 operations
  for (let i = 0; i < Math.pow(k, n); i++) {
    console.log("i is " + i);
  }
};

const { performance } = require("perf_hooks");
const time1 = performance.now();
Exponential(2, 5); //this is n
const time2 = performance.now();
console.log(`Elapsed time: ${(time2 - time1) / 1000} seconds`);
