
// Diamond Pattern

// Question 
// You are given an integer n. Based on the value of n, print a center-aligned diamond pattern made of asterisks (*).
// The upper half of the pattern contains n rows, and the lower half contains n - 1 rows.
// Each line should have a certain number of leading spaces followed by continuous stars (*) so that the overall shape looks symmetric like a diamond.

// Output Format:
// Print the diamond pattern with each line on a new row.
// There should be no extra spaces between stars and no extra blank lines after the output.

// Rules / Notes:

// Each line should have leading spaces followed by consecutive * characters (no spaces between stars).

// The pattern must be perfectly center-aligned.

// Time Complexity: O(n²)

// Space Complexity: O(1) (no extra arrays or matrices should be used)

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

const n = 5;

// Upper part
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let s = 1; s <= n - i; s++) {
    line += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    line += "*";
  }
  console.log(line);
}

// Lower part
for (let i = n - 1; i >= 1; i--) {
  let line = "";
  for (let s = 1; s <= n - i; s++) {
    line += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    line += "*";
  }
  console.log(line);
}
