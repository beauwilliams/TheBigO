console.log("Starting...");

nFactorial = 1;
n = 4;

//firstly we calculate Factorial n i.e n! - this is not included in the actual algorithm
//I am using a linear algorithm below that runs n! times which is equivalent
function Factorialise(n) {
  for (let i = n; i > 0; i--) {
    nFactorial = nFactorial * i;
  }
}

function Linear(n) {
  //this runs n! times i.e n=4, n! = 4*3*2*1 = 24 iterations
  for (let i = 0; i < nFactorial; i++) {
    console.log("i is " + i);
  }
}

const { performance } = require("perf_hooks");
const time1 = performance.now();
Linear(Factorialise(n));
const time2 = performance.now();
console.log(`Elapsed time: ${(time2 - time1) / 1000} seconds`);
