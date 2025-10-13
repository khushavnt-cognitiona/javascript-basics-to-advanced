//  Problem Statement:
// Write a JavaScript program to determine the movie ticket price based on the user’s age.

//  Input:
// The program should take the user’s age as input using the prompt() function.

//  Output:
// Based on the given age, display the correct ticket type and price using console.log().
// Age Range	Output Message
// Age less than 5	 “Free Ticket (Infant)”
// Age between 5 and 12	 “Child Ticket — ₹100”
// Age between 13 and 18	 “Student Ticket — ₹150”
// Age between 19 and 60	 “Adult Ticket — ₹200”
// Age greater than 60	 “Senior Citizen Ticket — ₹120”
// Invalid age (less than 0 or greater than 120)	 “Invalid age entered!”


let age= parseInt(prompt("enter your age"));

 if( age >120 ) {
    console.log("invaild age") 
 }
 else{
    if( age >0  &&age <5){
    console.log("Free Ticket (Infant)");
    }
    else{
      console.log("invaild age")  
    }
 }
 
 if(age <=5 &&  age>=12){
     console.log("Child Ticket — ₹100”");
}else if(age>12 && age <19){
    console.log("Student Ticket — ₹150");

}else if(age>18 && age <61){
    console.log("Adult Ticket — ₹200");


}
if(age>61 && age<=120  ){
  console.log("Senior Citizen Ticket — ₹120");
}
else{
    console.log("invalid age")
}
