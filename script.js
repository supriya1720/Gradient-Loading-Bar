var c =0;
var counter=setInterval(loading, 70);
function loading(){
    document.getElementById("head").innerHTML="LOADING "+c+"%";
    c++;
    if(c==101)
    clearInterval(counter);
}