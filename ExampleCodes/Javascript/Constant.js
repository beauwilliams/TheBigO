console.log("Starting...")

function Constant (n) { //O(1) complexity, no matter how large n
        console.log("n is " + n)
}

const {performance} = require('perf_hooks');
const time1 = performance.now();
Constant(9001); //this is n 
const time2 = performance.now();
console.log(`Elapsed time: ${(time2-time1)/1000} seconds`);
