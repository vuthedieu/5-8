// 1. Viết 1 arrow function nhận vào 3 số, trả về số lớn nhất
const findLargest = (num1, num2, num3) => {
  return Math.max(num1, Math.max(num2, num3));
};

console.log(findLargest(5, 3, 4));
// 2. Sử dụng map in ra các số chia 3 dư 2 trong mảng
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num % 3 === 2);
console.log(filteredNumbers);

// 3. Sử dụng filter in ra các số chia 3 dư 2 trong mảng
const filteredArr = numbers.filter((num) => num % 3 === 2);
console.log(filteredArr);

// 4. Sử dụng map, tính tổng các phần tử * 2

const doubledArr = numbers.map((num) => num * 2);
const sum = doubledArr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// 5. Sử dụng reduce, tính tổng các phần tử * 2
const arr = [1, 2, 3, 4, 5];
let sum1 = arr.reduce((acc, curr) => acc + curr * 2, 0);
console.log(sum1);
