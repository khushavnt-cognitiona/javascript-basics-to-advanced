// read the number promt the 


let number=parseInt(prompt("enter the number"));
let sum =0;

if(number>0){
    for(let i=1;i<=number;i++){
      
         sum = sum + i;

       
}
console.log(sum);   
}else{
    console.log(null)
}