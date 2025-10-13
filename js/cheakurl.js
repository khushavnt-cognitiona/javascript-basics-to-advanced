
let url=prompt("enter url");


let startUrl=url.startsWith("https://");
let urlEnd=url.endsWith(".com");

if(startUrl && urlEnd){
    console.log("valid url ");

}
else{
    console.log("invalid url");
}
