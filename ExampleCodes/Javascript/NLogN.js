console.log("Starting...");

const NLogN = (n) => {
  //O(n log n) complexity or in this case O(8*log8) = 24 operations
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j = j * 2) {
      console.log("i is " + i + " j is " + j);
    }
  }
};

const { performance } = require("perf_hooks");
const time1 = performance.now();
NLogN(8); //this is n
const time2 = performance.now();
console.log(`Elapsed time: ${(time2 - time1) / 1000} seconds`);
