import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../questions';

@Component({
  selector: 'app-quiz-screen',
  templateUrl: './quiz-screen.component.html',
  styleUrls: ['./quiz-screen.component.css']
})
export class QuizScreenComponent implements OnInit {

  currentQuestionId: number = 0;
  question: Question = QUESTIONS[0];

  changeQuestion(increment: number) {
    this.currentQuestionId += increment;
    this.question = QUESTIONS[this.currentQuestionId];
  }

  constructor() { }

  ngOnInit() {
  }

}
