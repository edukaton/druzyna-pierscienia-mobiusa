export class Answer {
  text: string;
  reply: string;
  correct: boolean;
}

export class Question {
  person: string;
  post: string;
  source: string;
  answers: Answer[];
  conclusion?: string;
  picture?: string;
  pysk?:string;
  video?:string;
}
