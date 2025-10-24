for(let j=2;j<=100;j++){
    let isPrime=true;

    for(let i=2;i<j;i++){
        if (j % i === 0) {
            isPrime = false;
        }
    }
     if (isPrime) {
        console.log(`${j} : is the Prime Number`);
    } else {
        console.log(`${j} : is not the Prime Number`);
    }
}