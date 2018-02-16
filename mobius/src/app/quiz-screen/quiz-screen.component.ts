import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-screen',
  templateUrl: './quiz-screen.component.html',
  styleUrls: ['./quiz-screen.component.css']
})
export class QuizScreenComponent implements OnInit {
  
  currentQuestion:number=0;

  changeQuestion(increment:number){
    this.currentQuestion+=increment;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
