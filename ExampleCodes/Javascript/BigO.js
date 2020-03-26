//sources & credits

// https://medium.com/@abhishekbisht1895/big-o-notation-data-structures-and-algorithms-in-javascript-5c5b77d79ee8

//https://www.studytonight.com/data-structures/space-complexity-of-algorithms


const addUpto = (n) => { //O(n) complexity
    //quick note on JS let vs var
    // let is scoped to codeblock ONLY
    //var is scoped to fn like Java
    let total = 0 ////note - you don't need semicolon here in JS

    for( let i = 0; i <= n; i++){ //for loops are O(n)
        total += i; //or we can have semicolon =)
    }
    return total //note - you don't need semicolon here in JS
}

console.log(addUpto(5));

const addUpToFaster = (n) => { //O(1) complexity

    return n * ( n + 1 ) / 2; //arithmetic is O(1)
}

console.log(addUpToFaster(10));

// Now lets do performance comparisons..
//record time before function start
//NOTE - We are using node so we must do this
// https://stackoverflow.com/questions/46436943/referenceerror-performance-is-not-defined-when-using-performance-now
const {performance} = require('perf_hooks');
const time1 = performance.now();
//let t1 = performance.now();
//now lets call the function
addUpto(10000);
//now lets record the time after function complete
//let time2 = performance.now();
const time2 = performance.now();
console.log(`Elapsed time: ${(time2-time1)/1000} seconds`);

//now lets measure our other algorithm
const time3 = performance.now();
addUpToFaster(10000);
const time4 = performance.now();
console.log(`Elapsed time: ${(time4-time3)/1000} seconds`);

//as we can see, the latter algorithm is faster

//--------------NOTES ON BIG O---------------//

//*******TYPES OF OPERATIONS */

// 1... f(n) could be linear, f(n) = n
// 2... f(n) could be quadratic, f(n) = n^2
// 3... f(n) could be constant, f(n) = 1
//4... f(n) could be something entirely different..


//*************TIME COMPLEXITY */

//We use BIG-O to represent Time Complexity
// BIG-O is an ASYMPTOTIC represenation of TC
//That is it is not representative of any particular algorithm
//But of its ASYMPTOTE - i.e the limit of the Fn

//*************GENERAL RULES OF THUMB */

//1..... Arithmetic operations are always constant O(1)
// e.g whether you are adding 10+10 o the thousand 
// or 10+10 to the billions the time complexity is contant O(1)
//2......Variable assignment is a CONSTANT fn. f(n) = 1
//3... Similarly accessing an element in an array (by index)
// or an Object (by key) is constant
//4... in a LOOP, the (time) complexity is..
// the length of the MULTIPLIED by the stuff that 
//happens INSIDE the loop. So say if you have a loop
//that repeats only 3 times but you put some super
//slow code in the loop it will have 3 X (some high number)
// (time) complexity. i.e it will have a fair amount of 
// complexity despite being a short loop!!!..


//-------------- SPACE --- COMPLEXITY -------//

//In addition to time complexity we also have space complexity

//this can be defined as
// Space complexity = auxillary (reserved) space + space used by an input
// In layman terms a 32bit pointer is.. drumroll.. 32 bits!
// even if that pointer is all 0's or all 1's there is
//still 32 bits of 'space' allocated

// but that is if we were to say create ONE 32 pointer
// what if we created 3 pointers, added them and then
//RETURNed the result?

//eg. the below is 4 * 4 + 4  

/*
{
let z = a + b + c // 4 * 4 bytes
    return z // + 4 bytes for return statement
}    
*/

//see what if we added another variable d?
//well the complexity would increase by 4 bytes
// this is in other words O(1) complexity
//that is the complexity is =====CONSTANT===== 
//depending on "how much you put in..."


//what if we were so use reference types instead
//....such as an array?
//would this be constant still..?
//you would imagine that it could be linear instead
//lets look at an example of an algorithm that
//sums up all the items in the array
/* 
by the way use these from now on lol
*/

//lets begin...

//provided n, which is EQUAL to the length of array arr
// the math = 
// x, n , i each take 4 bytes (3*4)
// array takes 4 * n bytes of space (grows as n grows)
// therefore you can write this as = 4*n + 12

/*
int sum(int arr[], int n) {
        int x = 0; //4 bytes for x
        for( int i = 0; i < n; i++) {
            x += arr[i] //4 * n btyes for the ARRAY
    }
    return x; //4 more bytes for x
}
*/

//so if the array was 5 elements in size
// the result would be (4n + 12) = 4*5+12 = 32 btyes of space

//this is an example of ====LINEAR COMPLEXITY====

//*************GENERAL RULES OF THUMB */

//1..... Primitive types require constant space, O(1)
//2..... Strings require relative O(n) space
//        (n defines string length)
//3..... Reference types are generally O(n), 
//       where n is the length (arrays)
//       or the number of keys (objects)


//******************SOME MORE EXAMPLES */

//Space complexity of O(1)

function logUptTo(n) { //given n, the algortithm takes n space
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

logUptTo(10); //outputs sequence of numbers from 1 to 10
//              taking 10*4 + 4 bytes (extra 4 for i)


//Space complexity of O(n)

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

console.log(subtotals([1,2,3,4,5]));
//Output: [ 1, 3, 6, 10, 15 ]