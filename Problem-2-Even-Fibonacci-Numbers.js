function fiboEvenSum(n) {
  let sum = 0;
  let fibo = [1, 2];
  for (let i = 3; i < n; i++) {
    if (fibo[fibo.length - 1] < n) {
      fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    }
  }
  for (let i = 0; i < n; i++) {
    if (fibo[i] % 2 === 0) {
      sum += fibo[i];
    }
  }
  return sum;
}

console.log(fiboEvenSum(4000000));