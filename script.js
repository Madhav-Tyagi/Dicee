var no1= Math.floor(Math.random() *6)+1;
var no2= Math.floor(Math.random() *6)+1;

var diceImg1 = "dice"+no1+".png";
var diceImg2 = "dice"+no2+".png";

document.querySelector(".img1").setAttribute("src",diceImg1);
document.querySelector(".img2").setAttribute("src",diceImg2);



if (no1>no2){
    document.querySelector("h1").innerHTML="Player 1 is the winner";
}else if (no2>no1){
    document.querySelector("h1").innerHTML="Player 2 is the winner";
}else{
    document.querySelector("h1").innerHTML="It's draw";
}

var reloadButton = document.querySelector("#reload")

function Reload() {
    window.location.reload();
  }
  
  reloadButton.addEventListener("click", Reload);