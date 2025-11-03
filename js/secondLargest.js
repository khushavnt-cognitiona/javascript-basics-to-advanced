let arr = [10, 5, 8, 20, 2, 18, 7, 1, 15];

let largest=arr[0];
let secondlarg=arr[0];

for(num of arr){

    if(num>largest){
        
        for(sec of arr){
            if(sec >secondlarg){
                secondlarg= sec;
            }
        }

    }
}
console.log(secondlarg)
