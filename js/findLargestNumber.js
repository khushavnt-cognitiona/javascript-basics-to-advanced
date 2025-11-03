let arr=[10, 5, 8, 20, 2, 18, 7, 1, 15]

let largest=arr[0];
let indxof=0

for(num of arr){
    if(num > largest){
        largest=num;
         
        indxof=num;

        
    }
   
}
console.log(`Largest number in the array is: ${largest}`);
