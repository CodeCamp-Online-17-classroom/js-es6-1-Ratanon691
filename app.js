function multiplyNumbers(...nums) {
  if (nums.length === 0){
    return 0
  }
  return nums.reduce((acc, num) => acc * num, 1)
}

console.log(multiplyNumbers(2, 3, 4)); // 24 (2 * 3 * 4 = 24)
console.log(multiplyNumbers(5, 6));    // 30 (5 * 6 = 30)
console.log(multiplyNumbers(10));      // 10
console.log(multiplyNumbers());        // 0
