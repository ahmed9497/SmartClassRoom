
import {Student} from '../entities/student';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public students:  Student[] = [{ password: 'apass 1'  , email: 'email1' , slct: '1' , radio: 'Option 1', chk: true ,
      fName: 'Option 1', lName: 'Option 1'},
    {password: 'apass 2'  , email: 'email2' , slct: '2' , radio: 'Option 2', chk: true ,
      fName: 'Option 2', lName: 'Option 1'}
    ];
  constructor() { }
}
