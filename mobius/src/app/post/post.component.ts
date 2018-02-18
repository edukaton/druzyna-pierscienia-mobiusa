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
  loader:string=".";
  loaderCounter:number=0;
  showPost:boolean=false;
  postTypeSelector:any = {
    "question":"bg-primary text-white",
    "otherPerson":"bg-primary text-white",
    "answer":"bg-light",
    "conclusion":"bg-primary text-white",
    "Ty":"bg-warning text-white"}
  constructor() { 
  }

  ngOnInit() {
    const timerId = setInterval(() => {
      this.loader=this.loader.length==4?".":this.loader+='.';
      this.loaderCounter+=1;
      if(this.loaderCounter==7){
        this.showPost=true;
        clearInterval(timerId);
      }
    },100);

    //changes postType if the person is "Ty"
    if(this.person=="Ty") {
      this.postType = "Ty";
    }
  }

}
