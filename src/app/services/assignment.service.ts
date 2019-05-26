import { Injectable } from '@angular/core';
import {Student} from '../entities/student';
import {until} from 'selenium-webdriver';
import titleContains = until.titleContains;

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  public assignments:  any[] = [{ title: 'Teacher Name'}, // , detail: 'detail3'
    { title: 'Teacher Name' },                              // , detail: 'detail3'
    { title: 'Teacher Name' },                              // , detail: 'detail3'
    { title: 'Teacher Name' },          // , detail: 'detail3'
    { title: 'Teacher Name' },          // , detail: 'detail3'
    ];
  constructor() { }
}
