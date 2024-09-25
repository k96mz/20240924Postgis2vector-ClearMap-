const prettysize = require("prettysize");

const result1 = prettysize(1024);
const result2 = prettysize(1024 * 1024);
const result3 = prettysize(123456789);
const result4 = prettysize(10000000000);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
