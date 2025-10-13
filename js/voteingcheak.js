// Ask the user to enter their age
let age = parseInt(prompt("Enter your age")); 

// Print the entered age to the console
console.log(age);

// Check if the age is 18 or above
if(age >= 18){
    // If age is 18 or more, user is eligible to vote
    console.log("User can give vote as per government rule");
}else{
    // If age is less than 18, user is not eligible to vote
    console.log("User is not given vote");
}
