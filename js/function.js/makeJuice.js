function makeAJucie (){

    let fruit=prompt("enter fruit name:");

    if(!fruit){
        console.log("No fruit selected!");
        return;
    }
    return `${fruit} juice is ready!`;
}
let jucie=makeAJucie();

if(jucie){
    console.log(jucie)
}