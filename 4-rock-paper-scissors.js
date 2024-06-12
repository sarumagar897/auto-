let  score =JSON.parse(localStorage.getItem('score')) || {
  Wins:0,
  Losses:0,
  Tie:0

};
updateScoreElement();
/*
if (!score){
score ={
  Wins:0,
  Losses:0,
  Tie:0

};
} */



function playGame (playerMove){
const computerMove = pickRandomNumber ();
let result='';
if (playerMove === 'rock'){
 if (computerMove == 'rock'){
  result = 'Tie.';
 }else if (computerMove === 'paper'){
  result ='You lose.';
 }else if (computerMove === 'scissors'){
  result ='You win.'
 }
}else if(playerMove === 'paper'){
  if (computerMove == 'rock'){
  result = 'You win.';
 }else if (computerMove === 'paper'){
  result ='Tie.';
 }else if (computerMove === 'scissors'){
  result ='You lose.'
 }
}else if (playerMove === 'scissors'){
  if (computerMove == 'rock'){
  result = 'You lose.';
 }else if (computerMove === 'paper'){
  result ='You win.';
 }else if (computerMove === 'scissors'){
  result ='Tie.'
 }
}
if (result === 'You win.' ){
  score.Wins += 1
}else if (result === 'You lose.'){
  score.Losses +=1
}else if (result === 'Tie.'){
  score.Tie += 1
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-moves').
innerHTML = `You 
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;



}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`Wins :${score.Wins},Losses:${score.Losses},Tie:${score.Tie}`;
}
function pickRandomNumber (){
const randomNumber =Math.random();
let computerMove='';
if (randomNumber >0 && randomNumber <1/3){
computerMove='rock';
} else if (randomNumber >1/3 && randomNumber <2/3){
computerMove='paper';
} else if (randomNumber > 2/3 && randomNumber<1){
computerMove='scissors'
}
return computerMove;
}