let arr = [1, 3, 5, 6, 7, 89, 9, 67, 4, 6, 4, 6, 4, 3, 53, 32, 5, 5, 532];
// let evnArr = [];
// for (ech of arr) {
//   if (ech % 2 === 0) {
//     evnArr = ech;
//   }
//   console.log(evnArr);
//  }

let evanarr =  arr.filter(n=>n%2===0);

console.log(evanarr);