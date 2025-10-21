// Question:
// Write a JavaScript program to print the following increasing number triangle pattern on the console:

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(let i=1;i<6;i++){
    let partan= " "
    for(let j=1;j<=i;j++){
          
       partan+= j+" ";  
           
    }
    console.log(partan);
}
