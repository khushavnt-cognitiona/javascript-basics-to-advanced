

// let a = "20" + 5 - "10" + 2;
// console.log(a, typeof(a));

// "20" is a string and 5 is a number.
// In this case, string concatenation happens.
// Result: "205" (string)

// "205" (string) and "10" (string) are used with the '-' operator.
// Here, arithmetic operation is performed (string converted to number).
// Result: 195 (number)

// 195 (number) + 2 (number) is a simple addition.
// Result: 197 (number)



// let b = 10 + "5" + 5 - "2";
// console.log(b, typeof(b));

// 10 is a number and "5" is a string  string + number = string because of string concatenation  =105 string

// 105 string + "5" aging string string concateantion = 1055 string 
 //  1055 is string and -" 2" is also string due to both data tye same and in between optertore is - is this case will 
 // perform artmatic oprtion and final ans is  1055-2 = 1053 and type of number
  
let marks = parseInt(prompt("enter your marks"));

console.log(marks)

if(marks >=35&&marks<=50){
    console.log("student passed with Grade C");
}
if(marks>50&&marks<=70){
    console.log("student passed with garge B");
}
if(marks >70&&marks<=85  ){
    console.log(" student passed with A");
}
if(marks >85&&marks<=100){
    console.log("students pass with District");

}
else{
    console.log("student fail");
}