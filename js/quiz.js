class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }

update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()

      question.display();
    }
  }


  play(){
    question.hide();
    background ("red")

text ("result of the quiz")
Contestant.getPlayerInfo ()


    if(allContestants !== undefined){
      
        debugger
        var display_answser = 230
        text ("correct ans highlighted",130,230)
      for(var plr in allContestants){
       
        debugger
        var correctans = "2"
        if (correctans===allContestants[plr].answser)
        fill ("green")
        else
        fill ("red")

        display_answser+=30
        text (allContestants[plr].name+":"+allContestants[plr].answser,250,display_answser)

      }
    }
}

}
