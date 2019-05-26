import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LecDataService {
  public lecdata:  any[] = [{ title: 'Teacher Name'  , detail: 'Detail By Teacher'},
    { title: 'Teacher Name'  , detail: 'Detail By Teacher'},
    { title: 'Teacher Name'  , detail: 'Detail By Teacher'},
    { title: 'Teacher Name'  , detail: 'Detail By Teacher'},
    { title: 'Teacher Name'  , detail: 'Detail By Teacher'},
  ];

  constructor() { }
}
