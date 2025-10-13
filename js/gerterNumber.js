let password =prompt("enter your passworld ")

let lenOfPass=password.length;

if(lenOfPass>=8){
     
    let lastChar=password.charAt(password.length-1);

    if(lastChar=== "@"){
        console.log("very very strong password")
    }
    else{
        console.log("valid password")
    }
}
else{
    console.log("invalid password")
}