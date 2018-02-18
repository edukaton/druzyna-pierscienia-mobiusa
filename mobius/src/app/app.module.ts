import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { QuizScreenComponent } from './quiz-screen/quiz-screen.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { PostComponent } from './post/post.component';
import { AuthorsComponent } from './authors/authors.component';


@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    QuizScreenComponent,
    EndScreenComponent,
    PostComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'start', component:StartScreenComponent},
      {path:'quiz', component:QuizScreenComponent},
      {path:'end', component:EndScreenComponent},
      {path:'authors', component:AuthorsComponent},
      {path:'', redirectTo :'start', pathMatch:'full' },
      {path:'**', redirectTo :'start', pathMatch:'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
