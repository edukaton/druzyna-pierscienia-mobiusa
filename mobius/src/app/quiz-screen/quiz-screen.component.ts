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
  score: number = 50;
  question: Question;

  showAnswers: boolean;
  showConclusion: boolean;
  correctAnswersLeft: number;
  comments;
  activeAnswers;

  constructor() {
    this.startQuestion(QUESTIONS[0]);
  }

  changeQuestion(increment: number) {
    this.currentQuestionId += increment;
    this.startQuestion(QUESTIONS[this.currentQuestionId]);
  }

  startQuestion(question: Question) {
    this.question = question;
    this.showAnswers = false;
    this.showConclusion = false;
    this.comments = [];
    this.activeAnswers = this.question.answers;

    this.correctAnswersLeft = question.answers
      .map((x) => +x.correct)
      .reduce((x, y) => x + y);

    window.setTimeout(() => {
      this.comments.push({
        person: "Twoja Mama",
        text: "Jacusiu, a co o Tym sądzisz?"
      });
    }, 2000);

    window.setTimeout(() => { this.showAnswers = true; }, 4000);
  }

  pickAnswer(answer) {

    this.comments.push({
      person: "Ty",
      text: answer.text
    });
    this.comments.push({
      person: "Wujek Mietek",
      text: answer.reply
    });

    this.activeAnswers = this.activeAnswers
      .filter((x) => x.text != answer.text);

    this.score += (2 * answer.correct - 1);
    this.correctAnswersLeft -= answer.correct;
    if (this.correctAnswersLeft == 0) {
      this.showAnswers = false;
      this.showConclusion = true;
    }
  }


  ngOnInit() {
  }

}
