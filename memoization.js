// In computing, memoization or memoisation is an optimization technique
// used primarily to speed up computer programs by storing the results of expensive function calls
// and returning the cached result when the same inputs occur again.

// https://nodejs.org/api/console.html#console_console_timeend_label

function slowFunction(n) {
  let x = 3,
    y = 4,
    z;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      z = x + y;
    }
  }
  // console.log(z + 7);
  return z + n;
}
/* console.log("Function called");
console.time("slowFunction");
slowFunction(100000);
console.timeEnd("slowFunction"); */

// memoization
const memoizationFunc = function(func) {
  let cache = {};
  return function(para) {
    const context = this;
    const prop = para.toString();
    console.log(`${cache[para]}`);
    if (cache[prop] === undefined) {
      cache[prop] = func.call(context, para);
    }
    // console.log(`${cache[para]}`);
    return cache[prop];
  };
};

const memoizationSlowFunc = memoizationFunc(slowFunction);

/* console.log("Function execution starts");
console.time("slowFunction");
console.log(memoizationSlowFunc(10000));
console.timeEnd("slowFunction");
console.log("Function execution ends"); */

// memoization - fibonacci
function fib(n) {
  return n === 0 ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2);
}

const memoizationFib = memoizationFunc(fib);

console.log("Function execution starts");
console.time("slowFunction");
console.log(memoizationFib(16));
console.timeEnd("slowFunction");
console.log("Function execution ends");
