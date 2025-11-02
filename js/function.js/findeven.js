function evenNumber() {
  let n = parseInt(prompt("enter the number you"));

  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        console.log(`${i}:= is a even number`);
      }
    }
  } else {
    console.log("please enter a valid number ");
  }
}
evenNumber();
