const fib = (num) => {
  let fibNumbers = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
  }
  console.log(fibNumbers);
};

fib(10);
