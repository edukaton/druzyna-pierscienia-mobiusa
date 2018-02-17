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
  question: Question;

  showPrompt: boolean;
  showAnswers: boolean;
  showConclusion: boolean;

  constructor() {
    this.startQuestion(QUESTIONS[0]);
  }

  changeQuestion(increment: number) {
    this.currentQuestionId += increment;
    this.startQuestion(QUESTIONS[this.currentQuestionId]);
  }

  startQuestion(question: Question) {
    this.question = question;
    this.showPrompt = false;
    this.showAnswers = false;
    this.showConclusion = false;

    window.setTimeout(() => { this.showPrompt = true; }, 2000);

    window.setTimeout(() => { this.showAnswers = true; }, 4000);
  }

  pickAnswer(answer) {

    this.showConclusion = true;
  }


  ngOnInit() {
  }

}
