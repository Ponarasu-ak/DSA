// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

function reverseInteger(x) {
  let limit = 2 ** 31;
  let xCopy = x;
  let PositiveNumber = Math.abs(x);
  let reverse = 0;
  while (PositiveNumber > 0) {
    reverse = reverse * 10 + (PositiveNumber % 10);
    PositiveNumber = Math.floor(PositiveNumber / 10);
  }
  let value = xCopy < 0 ? -reverse : reverse;
  return value < -limit || value > limit ? 0 : value;
}

console.log(reverseInteger(120));
