import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../questions';

const DELAY = 3000;

@Component({
  selector: 'app-quiz-screen',
  templateUrl: './quiz-screen.component.html',
  styleUrls: ['./quiz-screen.component.css']
})
export class QuizScreenComponent implements OnInit {

  currentQuestionId: number = 0;
  score: number = 0;
  allCorrectPerQuestion: boolean;
  question: Question;
  totalQuestions: number = QUESTIONS.length;

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
    this.allCorrectPerQuestion = true;
    this.comments = [];
    this.activeAnswers = this.question.answers;

    this.correctAnswersLeft = question.answers
      .map((x) => +x.correct)
      .reduce((x, y) => x + y);

    window.setTimeout(() => {
      this.comments.push({
        person: "Twoja Mama",
        text: "Drogie dziecko, a co Ty o tym sądzisz?"
      });
    }, DELAY);

    window.setTimeout(() => { this.showAnswers = true; }, 2 * DELAY);
  }

  pickAnswer(answer) {

    this.showAnswers = false;

    this.comments.push({
      person: "Ty",
      text: answer.text
    });

    const somethingMore = this.correctAnswersLeft > 1 ? " Coś jeszcze?" : "";

    setTimeout(() => {
      this.comments.push({
        person: "Wujek Mietek",
        text: answer.reply + somethingMore
      });
    }, DELAY);

    if (!answer.correct) {
      this.allCorrectPerQuestion = false;
    }

    this.activeAnswers = this.activeAnswers
      .filter((x) => x.text != answer.text);

    setTimeout(() => {
      this.correctAnswersLeft -= answer.correct;
      if (this.correctAnswersLeft == 0) {
        this.score += +this.allCorrectPerQuestion;
        this.showConclusion = true;
      } else {
        this.showAnswers = true;
      }
    }, 2 * DELAY);

  }

  ngOnInit() {
  }

}
