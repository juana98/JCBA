import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public title_one : string;
    public title_two : string;
  constructor() { 

    this.title_one = "PRODUCCIÓN, COMERCIALIZACIÓN Y TRANSPORTE DE MINERAL CARBÓN";  
    this.title_two = "Noticias";

  }

  ngOnInit(): void {
  }

}
