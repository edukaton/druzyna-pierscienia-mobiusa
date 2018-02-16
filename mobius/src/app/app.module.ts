import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
