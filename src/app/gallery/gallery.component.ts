import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos : any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSearch(dataForm) {

    this.http.get('https://covid-193.p.rapidapi.com/countries',{
      headers: {'x-rapidapi-host':'covid-193.p.rapidapi.com',
        'x-rapidapi-key':'01fb07f8c0msh57887b00af8927dp1c00aajsn1fe640756221'}
    })
      .subscribe(data=>{
        // tslint:disable-next-line:no-console
        console.log(data)
        this.pagePhotos = data;
      })
  }
}
