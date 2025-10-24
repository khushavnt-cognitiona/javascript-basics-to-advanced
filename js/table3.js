
let number=parseInt(prompt("enetr any number "));

if(number>0){

    for(let i=1;i<=10;i++){
        let table=i*number;
         
         console.log(`${number} * ${i} := ${table} `);
    }

}else{
    console.log("please enter correct number");
}

