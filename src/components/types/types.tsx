export interface iData{
  id: number;
  question: string;
  property_question: string;
  answer:{
    a?: string;
    b?: string;
    c?: string;
    d?: string;
  }
  number_answer: number;
  correct_answer: string;
}

export interface iItems extends iData{

}

