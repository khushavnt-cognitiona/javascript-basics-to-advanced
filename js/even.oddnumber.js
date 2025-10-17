
let a=2;
b=100;

let even;
let odd;

for(let i=a;i<=b;i++){
 
    if(i%2===0){
        even=i;
        console.log(even);

    }else{
       odd=i; 
      console.log(`${odd} is an odd number`);
    }

}