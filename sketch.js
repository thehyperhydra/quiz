var canva;
var gameState = 0;
var contestantCount,allContestants,answer,database,question,contestant,quiz

function setup(){
  canvas = createCanvas(850,400);
  database= firebase.database ()
  quiz= new Quiz ()
  quiz.getState ()
  quiz.start ()
}


function draw(){
  background("pink");

  if (contestantCount===2){

quiz.update(1)


  }

  if (gameState===1){

clear()
quiz.play()




  }

  
}
