// Question:
// Write a program to find all the prime numbers between 1 and 100.
// A prime number is a number greater than 1 that has no divisors other than
//  1 and itself.
for (let j = 2; j <= 100; j++) {
  let isPrime = true;

  for (let i = 2; i < j; i++) {
    if (j % i === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(`${j} : is the Prime Number`);
  } else {
    console.log(`${j} : is not the Prime Number`);
  }
}
