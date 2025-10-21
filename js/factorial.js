let number=parseInt(prompt("enter the number you want "));

let fact=1;

if(number>0){
    for(let i=1;i<=number;i++){
        fact=fact*i;
    }
    console.log(fact);
}