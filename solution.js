//  #### 1. NaN
// NaN = Not a Number

const text = "hello";
console.log(typeof text === NaN);
console.log("hello" === NaN);
console.log(3 === NaN);

console.log(typeof NaN);
// Type of NaN is number

// #### 2. Rounding
console.log(0.1 * 0.2);
console.log((0.1 * 0.2).toFixed(2));

// #### 3. Infinity
console.log(Infinity / 0);
console.log(Infinity / Infinity);
console.log(1 / 0);
