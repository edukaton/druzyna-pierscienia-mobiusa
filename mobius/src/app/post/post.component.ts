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
  postTypeSelector:any = {
    "question":"bg-primary text-white",
    "otherPerson":"bg-primary text-white",
    "answer":"bg-light",
    "conclusion":"bg-primary text-white",
    "Ty":"bg-warning text-white"}
  constructor() { 
  }

  ngOnInit() {
    //console.log("this.person : "+this.person)
    if(this.person=="Ty") {
      this.postType = "Ty";
    }
  }

}
