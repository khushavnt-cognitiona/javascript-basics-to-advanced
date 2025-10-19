
let password=prompt("enter your password");

len=password.length;

if(len>8){

   for(let i=0;i<len;i++){
    if(password [i]==="@"){

  
         console.log("very very strong passwoard");
         break;
   }else{
     
        console.log("valid password");
       }
   }
}else{



      
       
     
  
    console.log("Invalid password: length must be more than 8 characters");
}