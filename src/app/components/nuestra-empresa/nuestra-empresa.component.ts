import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestra-empresa',
  templateUrl: './nuestra-empresa.component.html',
  styleUrls: ['./nuestra-empresa.component.scss']
})
export class NuestraEmpresaComponent implements OnInit {
  public title: string;
  constructor() { 

    this.title = "PRODUCCIÓN, COMERCIALIZACIÓN Y TRANSPORTE DE MINERAL CARBÓN";
  }


  ngOnInit(): void {
  }

}
