
let password=prompt("enter your password");

let passleng=password.length;

let cheaksingpass=password.search("@");

if(passleng>8 && cheaksingpass){
    console.log("very very strong password ");
}
else if(passleng>=8){
      console.log("valid password")
}
else{
    console.log("invalid password")
}



