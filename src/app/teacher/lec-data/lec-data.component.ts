import { Component, OnInit } from '@angular/core';
import {LecDataService} from '../../services/lec-data.service';

@Component({
  selector: 'app-lec-data',
  templateUrl: './lec-data.component.html',
  styleUrls: ['./lec-data.component.css']
})
export class LecDataComponent implements OnInit {
  public lecdata: any[];
  currentTime;
  constructor(private lecdataService: LecDataService) { }
  fileuploads(event) {       // fileupload function
  }
  ngOnInit() {
    this.lecdata = this.lecdataService.lecdata; // data display
    const today = new Date(); // current date time picker function
    const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.currentTime = date + ' ' + time;
  }
  }
