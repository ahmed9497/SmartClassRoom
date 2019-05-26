import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LecturesService {

  public subjects: any[] = [{subjectname: 'English', student: 'studentenrolled', body: 'body1', footer: 'footer1'},
                            {subjectname: 'Urdu', student: 'studentenrolled', body: 'body2', footer: 'footer2'},
                            {subjectname: 'Math', student: 'studentenrolled', body: 'body3', footer: 'footer3'},
  ];
  constructor() { }
}
