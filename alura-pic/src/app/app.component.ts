import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'alura-pic';

  photos: Object[] = [];

  constructor(
    private http: HttpClient
  ){

    this.http.get<Object[]>('http://localhost:3000/flavio/photos').subscribe(
      (photos) => { this.photos = photos
    });

  }
}
