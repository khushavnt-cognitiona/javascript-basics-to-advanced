let a = 1;
let b = 200;
let even;
let odd;
if (a > 0) {
  for (let i = a; i <= b; i++) {
    if (i % 5 === 0) {
      if (i % 2 === 0) {
        even = i;
        console.log(`${even} is divisible by 5 and it is an even number.`);
      } else {
        odd = i;
       console.log(`${odd} is divisible by 5 and it is an odd number.`);

      }
    } else {
     console.log(`${i} is not divisible by 5.`);

    }
  }
}
