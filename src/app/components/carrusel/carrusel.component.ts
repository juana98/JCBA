import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  //arreglo de las imagenes para el carrusel 
  imagenes: any[] = [
    {
      name: 'Bascula',
      imge: 'assets/images/maquina.jpg',
      desc: 'Hey aprovecha nuestro servicio de bascula evitate multas por sobrecarga'
    
    },
    {
      name: 'carbón',
      imge: 'assets/images/gcarbon.jpg',
      desc: 'Compra el mejor carbón de la zona'
    
    }
  ];
  
  

  constructor(private _config: NgbCarouselConfig){
    
  }

  ngOnInit(): void {
  }
 
  

 
}
