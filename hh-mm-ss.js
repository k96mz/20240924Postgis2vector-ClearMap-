const TimeFormat = require("hh-mm-ss");

console.log(TimeFormat.toMs("00:01"));
console.log(TimeFormat.toS("02:00"));

console.log(TimeFormat.fromMs(3000));
console.log(TimeFormat.fromS(180));
console.log(TimeFormat.fromS(1800));
console.log(TimeFormat.fromS(18000));

const startTime = new Date();
console.log(`startTime: ${startTime}`);

setTimeout(() => {
  const endTime = new Date();
  console.log(`endTime: ${endTime}`);
  console.log(`Time difference in ms: ${endTime - startTime}`);
  console.log(
    `Time differencein in mm:ss: ${TimeFormat.fromMs(endTime - startTime)}`
  );
}, 2000);
