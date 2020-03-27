console.log("Starting...");

const Polynomial = (n) => {
  //O(n)^p complexity, in this case O(4)^2= 16 operations
  for (let i = 0; i < n; i++) {
    console.log("i is " + i);
    for (let j = 0; j < n; j++) {
      //2nd linear loop making p=2
      console.log("j is " + j);
    }
  }
};
const { performance } = require("perf_hooks");
const time1 = performance.now();
Polynomial(4); //this is n
const time2 = performance.now();
console.log(`Elapsed time: ${(time2 - time1) / 1000} seconds`);
