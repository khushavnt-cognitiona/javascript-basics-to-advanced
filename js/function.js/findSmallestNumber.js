let arr = [
  1, 3, 4, 5, 67, 7, 8, 4, 2, 2432, 52, 2, 13124, 32, 5346, 54, 6, 12, 45, 78,
  23, 56, 89, 10, 99, 3, 5, 2, 88, 14, 37, 42, 66, 21, 18, 29, 53, 77, 84, 13,
  24, 36, 57, 73, 91, 47, 68, 82, 90, 11, 26, 39, 50, 61, 74, 86, 92, 7, 4, 19,
  28, 34, 43, 58, 69, 80, 95, 96, 22, 35, 40, 41, 48, 59, 60, 72, 75, 79, 81,
  85, 94, 98, 33, 38, 49, 51, 63, 64, 70, 83, 87, 93, 97, 100, 6, 27, 16,
];

let smallest = arr[0];
for (let num of arr) {
  if (num < smallest) {
    smallest = num;
  }
}

let evenArray = arr.filter((n) => n % 2 === 0);

let greaterThanThousand = arr.filter((n) => n > 1000);

let lessThanHundred = arr.filter((n) => n < 100);

console.log(`Smallest number: ${smallest}`);
console.log(`Even numbers: ${evenArray}`);
console.log(`Numbers greater than 1000: ${greaterThanThousand}`);
console.log(`Numbers less than 100: ${lessThanHundred}`);
