import { Component, OnInit, Input } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { QuizScreenComponent } from './../quiz-screen/quiz-screen.component';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
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
  @Input() pysk: string;
  @Input() postType: string;
  @Input() video: any;
  //variables needed for typing animation
  loader:string=".";
  loaderCounter:number=0;
  showPost:boolean=false;
  //picture url
  pictureUrl:string='assets/pyski/';
  postTypeSelector:any = {
    "question":"bg-primary text-white",
    "otherPerson":"bg-primary text-white",
    "answer":"bg-light clickable",
    "conclusion":"bg-success text-white",
    "Ty":"bg-warning"}
  constructor(private sanitizer: DomSanitizer) {
  
  }

  ngOnInit() {
    //Typing animation
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.video);

    const timerId = setInterval(() => {
      this.loader=this.loader.length==4?".":this.loader+='.';
      this.loaderCounter+=1;
      if(this.loaderCounter==7){
        this.showPost=true;
        clearInterval(timerId);
      }
    },100);

    console.log("vid",this.video);
    //changes postType if the person is "Ty"
    if(this.person=="Ty") {
      this.postType = "Ty";
    }
    if (this.postType=="question" || this.postType=="otherPerson"){this.pictureUrl+=this.person.replace(' ','_')+'.jpg'}
    else if (this.postType=="Ty"){this.pictureUrl+='cat.jpeg'}
    else if (this.postType=="answer"){
      this.person=="Twoja Mama"?  this.pictureUrl+='Twoja_Mama.jpg':this.pictureUrl+='question.png';
    }
    else if (this.postType=="conclusion"){this.pictureUrl+='Spock.jpg'}
    //console.log("picture",this.pictureUrl);
  }

}
