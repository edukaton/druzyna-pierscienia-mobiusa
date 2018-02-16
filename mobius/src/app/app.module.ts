import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { QuizScreenComponent } from './quiz-screen/quiz-screen.component';
import { EndScreenComponent } from './end-screen/end-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    QuizScreenComponent,
    EndScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'start', component:StartScreenComponent},
      {path:'quiz', component:QuizScreenComponent},
      {path:'koniec', component:EndScreenComponent},
      {path:'', redirectTo :'start', pathMatch:'full' },
      {path:'**', redirectTo :'start', pathMatch:'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
