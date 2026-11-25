function getDigitCount(params) {
  if (typeof(params) !== "number")  return "invalid input"
  if(params === 0) return 1 
  let n = Math.abs(params) 
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(getDigitCount(0));
