import { Component, OnInit, Input } from '@angular/core';
import { QuizScreenComponent } from './../quiz-screen/quiz-screen.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() person: string;
  @Input() text: string;
  @Input() picture: string;
  @Input() links: string[];
  @Input() postType: string;
  constructor() { }

  ngOnInit() {
  }

}
