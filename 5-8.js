// // 1. Viết 1 arrow function nhận vào 3 số, trả về số lớn nhất
// const findLargest = (num1, num2, num3) => {
//   return Math.max(num1, Math.max(num2, num3));
// };

// console.log(findLargest(5, 3, 4));
// // 2. Sử dụng map in ra các số chia 3 dư 2 trong mảng
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredNumbers = numbers.filter((num) => num % 3 === 2);
// console.log(filteredNumbers);

// // 3. Sử dụng filter in ra các số chia 3 dư 2 trong mảng
// const filteredArr = numbers.filter((num) => num % 3 === 2);
// console.log(filteredArr);

// // 4. Sử dụng map, tính tổng các phần tử * 2

// const doubledArr = numbers.map((num) => num * 2);
// const sum = doubledArr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// // 5. Sử dụng reduce, tính tổng các phần tử * 2
// const arr = [1, 2, 3, 4, 5];
// let sum1 = arr.reduce((acc, curr) => acc + curr * 2, 0);
// console.log(sum1);
//  1. Viết 1 arrow function nhận vào 1 số, trả về true nếu số nguyên tố, false nếu không nguyên tố
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime(2));
console.log(isPrime(10));

// 2. Viết 1 arrow function nhận vào 1 mảng, sử dụng map để in ra các số nguyên tố trong mảng
const findPrimes = (arr) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const primeNumbers = arr.filter((num) => isPrime(num));
  primeNumbers.map((prime) => console.log(prime));
};
findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 3. Viết 1 arrow function nhận vào 1 mảng, trả về 1 mảng chỉ gồm các phần tử số nguyên tố, sử dụng filter
const findPrimes1 = (arr) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const primeNumbers = arr.filter((num) => isPrime(num));
  return primeNumbers;
};
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeArray = findPrimes1(inputArray);
console.log(primeArray);

// 4. Viết 1 arrow function nhận vào 1 mảng, trả về 1 tổng các bình phương từng phần tử, sử dụng reduce
const sumOfSquaredElements = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr ** 2, 0);
  return sum;
};
const result = sumOfSquaredElements(inputArray);
console.log(result);
