// Write a JavaScript program to print the following reverse star triangle pattern on the console:
// * * * * *
// * * * *
// * * *
// * *
// *
for (let i = 5; i >= 0; i--) {
  let line = "";

  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}
