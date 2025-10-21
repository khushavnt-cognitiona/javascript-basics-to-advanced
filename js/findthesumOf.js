let a = 100;
let sum = 0;
if (a > 0) {
  for (let i = 1; i <= a; i++) {
    if (i % 2 === 0) {
      console.log(`${i} : = is a even number`);
      sum = sum + i;
    } else {
      console.log(`${i}:= is a odd number`);
    }
  }
  console.log(sum);
} else {
  console.log("please enter valid number ");
}
