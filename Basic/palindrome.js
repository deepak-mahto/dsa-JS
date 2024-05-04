function palindrome(num) {
  return num < 0
    ? false
    : num === Number(num.toString().split("").reverse().join(""));
}

const number = 121;
console.log(palindrome(number));
