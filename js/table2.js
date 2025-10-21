let table = parseInt(prompt("enter the number of you want to table "));

if (table > 0) {
  for (let i = 1; i <= 10; i++) {
    let t = i * table;
    console.log(`table =${i} * ${table} := ${t}`);
  }
} else {
  console.log("please enter valid number");
}
