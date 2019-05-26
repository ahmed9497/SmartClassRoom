import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
public weather: any;
public searchstring: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://api.apixu.com/v1/current.json?key=ffb3371c71964e0fa08112627192601&q=islamabad').subscribe(data => {
      this.weather = data;
      console.log(data);
    });
}
  search() {
    this.http.get('http://api.apixu.com/v1/current.json?key=ffb3371c71964e0fa08112627192601&q=' + this.searchstring).subscribe(data => {
      this.weather = data;
      console.log(data);
    });
  }

}
