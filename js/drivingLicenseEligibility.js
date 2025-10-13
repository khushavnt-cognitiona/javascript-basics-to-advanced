// Ask the user for their age. Display:

// <16 → "Too young to drive"

// 16–18 → "Learner's License"

// 19–70 → "Full Driving License"

// >70 → "License Renewal Required"

// Invalid age → "Invalid age entered"


let age =parseInt(prompt("enter your age"));

if( age>=0 && age < 16){
    console.log("Too young to drive");
}else if(age>=16 && age<19){
 console.log("Learner's License");
}else if(age>=19 && age<70){
   console.log("Full Driving License");
}else if(age >70){
    console.log("License Renewal Required");
}
