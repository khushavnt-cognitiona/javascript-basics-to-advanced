let amamunt =parseInt(prompt("enter total amout"));
 let discoutted_Amanount=0;
 let finalAmount;
if(amamunt<=5000){

let finalAmount=discoutted_Amanount-amamunt*0.20;

    console.log("totol amount after discounted  20% "+ finalAmount);

}else if(amamunt>=3000 && amamunt<5000){
   discoutted_Amanount = amamunt *0.10;
       finalAmount= discoutted_Amanount-amamunt;
    console.log("totol amount after discounted  10% "+ finalAmount);
}else if(amamunt>1000 && amamunt<=2999){
     discoutted_Amanount=amamunt* 0.05;
     finalAmount=discoutted_Amanount-amamunt;
       console.log("totol amount after discounted  0.5% "+ finalAmount);
}else if(amamunt<1000){
    console.log("sorry you dont have discounted")
}
else {
  let finalAmount =amamunt-discoutted_Amanount;
  console(finalAmount)
  
}