let nam = prompt("enter name");

let len = nam.length;

if (len < 0) {
  console("invalid input");
} else {
  for (let i = 0; i < len; i++) {
    console.log(nam[i]);
  }
}
