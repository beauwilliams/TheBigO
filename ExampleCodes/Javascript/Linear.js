console.log("Starting...");

const Linear = (n) => {
  //O(n) complexity
  for (let i = 0; i < n; i++) {
    console.log("i is " + i);
  }
};

const { performance } = require("perf_hooks");
const time1 = performance.now();
Linear(5); //this is n
const time2 = performance.now();
console.log(`Elapsed time: ${(time2 - time1) / 1000} seconds`);
