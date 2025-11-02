let numbers = [
  2, 5, 11, 8, 22, 17, 4, 9, 30, 14, 3, 27, 6, 19, 25, 12, 1, 40, 7, 18,
];

console.log(numbers);

function findEven(element) {
  return element % 2 === 0;
}

let result = numbers.find(findEven);
console.log(result);

let arr2 = [
  "Khushvant","Rohan","Amit","Sagar","Pooja",
  "Vikas","Sneha","Rahul","Sayali","Priya"
];

function findName(name) {
  return name.length > 2;
}

let name2 = arr2.find(findName);
console.log(name2);

console.log("***********************************************");

let newArr = arr2.filter((element) => element.length > 4);
console.log(newArr);
