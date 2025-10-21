
let limit=50;
let sumNonPrimes = 0;    
 let primenumner= [];
if(limit>0){
    for(let i=1;i<=limit;i++){
       
        if(i%1===0 && i%i===0){
            if(i%2===0){
                console.log(`${i} is not prime number`);
            }
         
        primenumner=i;
        }
    }
    console.log(primenumner)

}