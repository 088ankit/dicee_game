var rnd=Math.floor(Math.random()*6)+1;
var source="images/dice"+rnd+".png";
document.querySelector(".img1").setAttribute("src",source);

// if(rnd===1)
// {
//   document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// if(rnd===2)
// {
//   document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// if(rnd===3)
// {
//   document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// if(rnd===4)
// {
//   document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// if(rnd===5)
// {
//   document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// if(rnd===6)
// {
//   document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }
//
var rnd2=Math.floor(Math.random()*6)+1;
var source2="images/dice"+rnd2+".png";
document.querySelectorAll("img")[1].setAttribute("src",source2);

// {
//   document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// if(rnd2===2)
// {
//   docu2ment.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// if(rnd2===3)
// {
//   docu2ment.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// if(rnd2===4)
// {
//   docu2ment.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// if(rnd2===5)
// {
//   docu2ment.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// if(rnd2===6)
// {
//   document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
//
if(rnd > rnd2)
document.querySelector("h1").textContent="🚩Player 1 Wins!"; //Or inner Htlm
else if(rnd2>rnd)
document.querySelector("h1").textContent="Player 2 Wins! 🚩 ";
else
document.querySelector("h1").textContent="🚩 Draw! 🚩";
