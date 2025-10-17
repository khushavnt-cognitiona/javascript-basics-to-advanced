// write  program to cheak a number evan or odd
let num = parseInt(prompt("enter a number"));

if (num > 0) {
  for (let i = 1; i <= num; i++) {
    if(i%2===0){
        console.log("Even number ");
    }
    else{
        console.log("the number is odd number")
    }
  }
}
