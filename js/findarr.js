let numbers = [2, 5, 11, 8, 22, 17, 4, 9, 30, 14, 3, 27, 6, 19, 25, 12, 1, 40, 7, 18];

console.log(numbers);

function findEvan(elemnet){

    return elemnet %2===0;
}

let result= numbers.find(findEvan);

console.log(result);
