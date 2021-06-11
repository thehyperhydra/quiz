class Question {

    constructor() {
      this.input1 = createInput("Name");
      this.input2 = createInput("enter the answer")
      this.button = createButton('submit');
      this.title = createElement('h2');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');

     
    }
    hide(){
      this.title.hide();
      this.button.hide();
      this.input1.hide();
      this.intput2.hide();
    }
  
    display(){
      this.title.html("Quiz show");
      this.title.position(350, 0);

      this.question.html("question:what starts and ends with the letter E but has only 1 letter")
      this.question.position(150,80)

      this.option1.html("everyone")
      this.option1.position (150,100)

      this.option2.html("envelope")
      this.option2.position (150,120)

      this.option3.html("Escape")
      this.option3.position (150,140)

      this.option4.html("everywhere")
      this.option4.position (150,100)
  
      this.input1.position(150,230);
      this.button.position(290,300);
      this.input2.position(350,230);
  
      this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.title.hide();

        contestant.name = this.input1.value();
        contestant.answer=this.input2.value();
        
        contestantCount+=1;

        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      
      });
  
      
      
  
    }
  }
  